const { Client, Account, Databases, ID } = require('appwrite')
const { v1: makeId } = require('uuid')


const endpoint = 'http://localhost/v1'
const projectId = '63d9016cea6df8e70edc'
const databaseId = '63d901781afad61fd78d'
const collectionId = '63d901d89c618b74d51b'

const client = new Client()

client
    .setEndpoint(endpoint)
    .setProject(projectId)

const account = new Account(client)
const databases = new Databases(client)

async function post(userId, resume) {
    try {
        const {username, resumes} = await databases.getDocument(databaseId, collectionId, userId);

        resume._id = makeId()
        resumes.push(JSON.stringify(resume))

        const user = {
            username, 
            resumes,
        }

        const res = await databases.updateDocument(databaseId, collectionId, userId, JSON.stringify(user));
        return res
    } catch (err) {
        console.log(err);
        throw new Error(err)
    }
}

async function put(userId, updatedResume) {
    try {
        const {username, resumes} = await databases.getDocument(databaseId, collectionId, userId);

        const resumeIdx = resumes.findIndex(resume => {
            const {_id} = JSON.parse(resume)
            return _id === updatedResume._id
        })
        
        resumes[resumeIdx] = JSON.stringify(updatedResume)

        const user = {
            username, 
            resumes,
        }

        const res = await databases.updateDocument(databaseId, collectionId, userId, JSON.stringify(user));
        //Logger
    } catch (err) {
        console.log(err);
        throw new Error(err)
    }
}

module.exports = {
    post,
    put
}