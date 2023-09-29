import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  throw redirect(302, '/signin')
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
      event.cookies.delete('auth');
      event.locals.user = null
      throw redirect(303, '/')
    }
};