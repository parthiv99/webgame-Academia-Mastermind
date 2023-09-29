import { fail, redirect } from '@sveltejs/kit';
import * as argon2 from 'argon2'
import { userDefaultImages } from '$lib/gameAssets';
import { Users } from '$lib/server/db/users'
import { dateTimeFormatter, validateInput } from '$lib/server/utils';

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    // Redirect user to home page if they already signed in
    if (locals.user) {
        throw redirect(302, 'protected/home')
    } 
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({request}) => {
        const data = await request.formData()
        const name = data.get('name')
        const username = data.get('username')
        const password = data.get('password')
        if (!name) {
            return fail(400, { name, missing: true})
        }

        if (!username) {
            return fail(400, { username, missing: true})
        }

        if (!password) {
            return fail(400, { password, missing: true})
        }

        // Check if username already exists
        const user = await Users.findOne({ username: username })
        if (user) {
            return fail(409, {
                error: true,
                message: 'Username already exists!',
                name,
                username,
                password
            })
        }

        // validate form inputs
        const savedName = name.toString().trim()
        const savedUserName= username.toString().trim()
        const savedPassword = password.toString().trim()
        const validName = /^[a-zA-Z\s]{4,20}$/;
        const validUserName = /^[a-zA-Z][a-zA-Z0-9]{5,20}$/;
        const validPassword = /.{6,20}/;

        if (!validateInput(savedName, validName)) {
            return fail(400, { 
                error: true,
                message: 'Invalid name',
                name,
                username,
                password
            })
        }

        if (!validateInput(savedUserName, validUserName)) {
            return fail(400, { 
                error: true,
                message: 'Invalid username',
                name,
                username,
                password
            })
        }

        if (!validateInput(savedPassword, validPassword)) {
            return fail(400, { 
                error: true,
                message: 'Invalid password',
                name,
                username,
                password
            })
        }
        

        // Hash password
        const hashedPassword = await argon2.hash(savedPassword)
        
        // Create a new user object
        const newUser = { 
            name: savedName, 
            username: savedUserName, 
            password: hashedPassword,
            // Default profile
            profile: userDefaultImages.profile,
            // Default avatar
            avatar: [],
            // Unlocked levels nad Experience points in Mathematics subject
            // Default level1 and 0 exp
            mathStats: {
                level1: 0
            },
            // Unlocked levels nad Experience points in Mathematics subject
            // Default level1 and 0 exp
            scienceStats: {
                level1: 0
            },
            // Unlocked levels nad Experience points in Mathematics subject
            // Default level1 and 0 exp
            socialScienceStats: {
                level1: 0
            },
            createdAt: dateTimeFormatter.format(new Date()),
        }
        // Add new user to Users db
        await Users.insertOne(newUser)
        
        // Redirect to signin page
        throw redirect(303, '/signin')

    }
}