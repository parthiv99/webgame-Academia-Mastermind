import { json } from '@sveltejs/kit';
import { Users } from '$lib/server/db/users'
import { dateTimeFormatter } from '$lib/server/utils';
import { avatarIframe } from '$lib/gameAssets';

/** @type {import('./$types').RequestHandler} */
export async function PUT({ request }) {
    const { subject, level, nextLevel, highestScore, username } = await request.json()
    try {
        let subjectStats
        // Match db fields
        if (subject == "mathematics") subjectStats = "mathStats"
        else if (subject == "science") subjectStats = "scienceStats"
        else subjectStats = "socialScienceStats"
        // Get user
        const user = await Users.findOne({ username: username })

        // Check for user existence
        if (!user) {
            return json({
                'error': 'Username not found. Failed to record new score!'
            })
        }

        
        // Update score for current level
        let newStats = user[subjectStats]
        newStats[level] = highestScore
        
        const filter = { _id: user._id}
        let updateDocument
        if (nextLevel != "") {
            // Unlock (add) next level
            if (nextLevel != "level6") newStats[nextLevel] = 0
            // add new avatar
            updateDocument = {
                $set: {
                    avatar: [...user.avatar, avatarIframe[subject][level]],
                    [subjectStats]: newStats,
                    lastUpdate: dateTimeFormatter.format(new Date())
                }
            }
        }
        else {
            updateDocument = {
                $set: {
                    [subjectStats]: newStats,
                    lastUpdate: dateTimeFormatter.format(new Date())
                }
            }
        }
        await Users.updateOne(filter, updateDocument)
        return json({
            'success': "New score was recorded"
        })
    }
    catch (error) {
        console.error(error)
        return json({
            'error': 'Some errors occured. Failed to record new score!'
        })
    }
}