import { Users } from "$lib/server/db/users";
import { getSumOfNumberArray } from "$lib/server/utils.js"

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let playerList = []

    try {
        const allUsers = await Users.find({}, { projection: { _id: 0, name: 1, profile: 1, mathStats: 1, scienceStats: 1, socialScienceStats: 1}}).toArray()
        for (let i = 0; i < allUsers.length; i++) {
            let playerStats = {}
            playerStats.name = allUsers[i].name
            playerStats.profile = allUsers[i].profile
            playerStats.mathPoints = getSumOfNumberArray(Object.values(allUsers[i].mathStats))
            playerStats.sciencePoints = getSumOfNumberArray(Object.values(allUsers[i].scienceStats))
            playerStats.socialSciencePoints = getSumOfNumberArray(Object.values(allUsers[i].socialScienceStats))
            playerStats.totalPoints = playerStats.mathPoints + playerStats.sciencePoints + playerStats.socialSciencePoints
            playerList.push(playerStats)
        }
    } catch (error) {
        console.error(error)
    }

    // Sort array in descending order
    playerList.sort((a, b) => b.totalPoints - a.totalPoints)

    // Keeps only the top 10 players
    playerList = playerList.slice(0, 10)

    // Adds rank for each player
    // The first player has rank 1
    playerList[0].rank = 1
    for (let i = 1; i < playerList.length; i++) {
        // Check for same total points
        if (playerList[i].totalPoints == playerList[i - 1].totalPoints)
            playerList[i].rank = playerList[i - 1].rank
        else 
            playerList[i].rank = playerList[i - 1].rank + 1
    }

    return {
      playerList
    }
}