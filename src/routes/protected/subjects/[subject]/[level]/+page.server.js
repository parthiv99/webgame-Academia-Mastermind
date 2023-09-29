import { error, redirect } from '@sveltejs/kit';
import db from '$lib/server/db/mongo'
import { SUBJECTS, POINTS_PER_LEVEL } from '$lib/gameLogic';
import { subjectStlyes } from '$lib/gameAssets';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
    const selectedSubject = params.subject;

    // Check params subject
    if (!SUBJECTS.includes(selectedSubject)) {
        throw error(404, `${selectedSubject} does not exist!`)
    }
        
    const user = locals.user
    const unlockedLevels = Object.keys(user[selectedSubject]);
    const selectedLevel = params.level;

    // Check whether level is in unlocked levels
    if (unlockedLevels.includes(selectedLevel)) {

        const subjectCollection = db.collection(selectedSubject)
        
        // Get questions from db based on selected subject and level
        try {
            const questions = await subjectCollection.find({level: selectedLevel}, { projection: { _id: 0, level: 0 }}).toArray();

            return {
                subject: selectedSubject,
                subjectColor: subjectStlyes[selectedSubject].color,
                backgroundImage: subjectStlyes[selectedSubject].backgroundImage,
                level: selectedLevel,
                currentPoints: user[selectedSubject][selectedLevel],
                totalPoints: POINTS_PER_LEVEL[selectedLevel],
                questions: questions
            }

        } catch (error) {
            console.log(error)
            throw error(500, "Internal Server Error");
        }   
    }
    else {
        throw redirect(302, `/protected/subjects/${selectedSubject}`);
    }
}