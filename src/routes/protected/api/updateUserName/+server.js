import { Users } from '$lib/server/db/users'
import { dateTimeFormatter } from '$lib/server/utils'
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function PUT({ request }) {
    const { username, newName } = await request.json()
    const savedName = newName.toString().trim()
    const validName = /^[a-zA-Z\s]+$/;
    if (savedName.length > 20 || savedName.length < 1) 
        return json("Name must be between 1 and 20 characters!")
    else if (!savedName.match(validName)) 
        return json("Name can only contain alphabetical characters!")
    else {
        try {
            // Get user
            const user = await Users.findOne({ username: username })
            
            const filter = { _id: user._id}
            const updateDocument = {
                $set: {
                    name: savedName,
                    lastUpdate: dateTimeFormatter.format(new Date())
                }
            }
            await Users.updateOne(filter, updateDocument)
            return json("success")
        }
        catch (error) {
            console.error(error)
            return json("Internal server error. Failed to change name!")
        }
    }  
}
