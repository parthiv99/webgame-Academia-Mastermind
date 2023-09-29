import { fail, redirect } from '@sveltejs/kit';
import * as argon2 from 'argon2'
import { Users } from '$lib/server/db/users'

/** @type {import('./$types').PageServerLoad} */
export async function load({locals}) {
    // Redirect user to home page if they already signed in
    if (locals.user) {
        throw redirect(302, '/protected/home')
    } 
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async({ cookies, request}) => {
        const data = await request.formData()
        const username = data.get('username')
        const password = data.get('password')

        // empty username or password
        if (!username || !password) {
            return fail(400, { 
                error: true, 
                message: 'Enter username or password!'})
        }

        const user = await Users.findOne({ username: username })

        // username does not exist
        if (!user) {
            return fail(401, { 
                error: true, 
                message: 'Username is incorrect!'
            })
        }

        // Checking password
        if (await argon2.verify(user.password, password.toString())) {
            // Match

            // Date-time format
            const formatter = new Intl.DateTimeFormat("en-US", {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                timeZone: 'America/Los_Angeles',
                hour12: true
            })
            // Create an authentication token
            const authToken = crypto.randomUUID()
            // Add a new field called userToken to db for signed in user
            const filter = { _id: user._id}
            const updateDocument = {
                $set: {
                    lastSignedInAt: formatter.format(new Date()),
                    userToken: authToken
                }
            }
            await Users.updateOne(filter, updateDocument)

            // Set cookies
            cookies.set('auth', authToken, {

                // Make cookie available to all routes
                path: '/',

                // Send cookies from same site only
                sameSite: 'strict',
    
                // Set cookie expiration in 1 day (measured in seconds)
                maxAge: 60 * 60 * 24
            })
            
            // Redirect user to welcome page
            throw redirect(303, '/protected/welcome')
        } else {
            // Not match
            return fail(401, {
                username, 
                error: true, 
                message: 'Password is incorrect!',
            })
        }     
    }
}