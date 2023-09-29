import { start_mongo } from "$lib/server/db/mongo"
import { Users } from '$lib/server/db/users'
import { redirect } from '@sveltejs/kit'

start_mongo().then(() => {
    console.log('Mongo started')
}).catch( error => {
    console.error(error)
})

/** @type {import('@sveltejs/kit').Handle} */
export async function handle ({ event, resolve }) {
    
	// get auth token from cookies
	const authToken = event.cookies.get('auth');

	if (authToken) {
		// find the user based on the auth token
		const user = await Users.findOne({ userToken: authToken });
		
		// if user exists set event.locals.user
		if (user) {
			event.locals.user = {
				name: user.name,
				username: user.username,
				profile: user.profile,
				avatar: user.avatar,
				mathematics: user.mathStats,
				science: user.scienceStats,
				social_science: user.socialScienceStats
			}
		}
	}
	
	// Only logged in users are allowed to access these routes
	if (event.url.pathname.startsWith('/protected')) {
		// Redirect guest to login page
		if (!event.locals.user) {
			throw redirect(303, '/signin')
		}
	}

	return await resolve(event);
}