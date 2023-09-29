import { error } from '@sveltejs/kit';
import { subjectStlyes } from '$lib/gameAssets.js';
import { SUBJECTS } from '$lib/gameLogic.js';

/** @type {import('./$types').PageServerLoad} */
export function load({ params, locals }) {
    const user = locals.user
    const selectedSubject = params.subject
    if (SUBJECTS.includes(selectedSubject)) {
        const unlockedLevels = Object.keys(user[selectedSubject])
        return {
            unlockedLevels,
            subject: {
                name: selectedSubject,
                color: subjectStlyes[selectedSubject].color,
                backgroundImage: subjectStlyes[selectedSubject].backgroundImage,
            }
        }
    }
    else {
        throw error(404, `${selectedSubject} subject does not exist!!!`);
    }
}