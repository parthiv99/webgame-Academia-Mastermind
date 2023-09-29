import { SUBJECTS } from '$lib/gameLogic.js';
import { POINTS_PER_LEVEL } from '$lib/gameLogic.js';
import { getSumOfNumberArray } from '$lib/server/utils';

/** @type {import('./$types').PageServerLoad} */
export function load({ locals }) {
    const user = locals.user
    let userStats = [];
	const maxPoints = getSumOfNumberArray(Object.values(POINTS_PER_LEVEL))
	
	for (let i = 0; i < SUBJECTS.length; i++) {
		// Find the total earned points for each subject
		// Push it to userStats
		let userLevels = Object.keys(user[SUBJECTS[i]])
		let highestLevel = userLevels.sort().slice(-1).toString()
		let points = getSumOfNumberArray(Object.values(user[SUBJECTS[i]]))
		userStats.push({ level: highestLevel, points: points})
	};

    return {
		user,
        userStats,
		maxPoints
    }
};
