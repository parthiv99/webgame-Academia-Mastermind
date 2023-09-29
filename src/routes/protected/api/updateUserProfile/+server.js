import { Users } from '$lib/server/db/users'
import { dateTimeFormatter } from '$lib/server/utils'
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function PUT({ request }) {
    const { username, newProfileSrc } = await request.json()
    if (newProfileSrc) {
        // check fize size
        // Max image size is 2Mbs
	    const MAX_SIZE = 2 * 1000 * 1000
        const file_size = Buffer.from(newProfileSrc, 'base64').length;
        console.log(file_size)
        if (file_size > MAX_SIZE) {
            return json('The maximum file size is 2Mbs')
        }
        // check file type
        const ACCEPT_TYPES = ['image/jpeg', 'image/png', 'image/jpg']
        const colon = newProfileSrc.indexOf(':')
        const semiColon = newProfileSrc.indexOf(';')
        const file_type = newProfileSrc.substring(colon + 1, semiColon)
        console.log(file_type)
        if (!ACCEPT_TYPES.includes(file_type)) {
            return json('Unsupported file type!')
        }

        try {
            // Get user
            const user = await Users.findOne({ username: username })
            
            const filter = { _id: user._id}
            const updateDocument = {
                $set: {
                    profile: newProfileSrc,
                    lastUpdate: dateTimeFormatter.format(new Date())
                }
            }
            await Users.updateOne(filter, updateDocument)
            return json("success")
        }
        catch (error) {
            console.error(error)
            return json("Internal server error. Failed to change profile!")
        } 
    }
    else return json("Image is null!")
    
}