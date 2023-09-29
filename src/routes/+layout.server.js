import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({locals}) {
    if (locals.user != null) {
        return {
            user: locals.user
        }
    }
}