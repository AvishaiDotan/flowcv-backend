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

async function post(userId, resume, isNew) {

    resume._id = makeId()

    try {

        if (isNew) {
            const data = JSON.stringify({username: 'Maxim', resumes: [JSON.stringify(resume)]})
            const isNewDocCreated = databases.createDocument(databaseId, collectionId, ID.unique(), data);
            
            //Logger

            return isNewDocCreated
        }

        const {username, resumes} = await databases.getDocument(databaseId, collectionId, userId);
        
        resumes.push(JSON.stringify(resume))

        const user = {
            username, 
            resumes,
        }

        const res = await databases.updateDocument(databaseId, collectionId, userId, JSON.stringify(user));
        //Logger
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
        return res
    } catch (err) {
        console.log(err);
        throw new Error(err)
    }
}

async function get(userId) {
    try {
        const {resumes} = await databases.getDocument(databaseId, collectionId, userId);

        //Logger
        return resumes
    } catch (err) {
        console.log(err);
        throw new Error(err)
    }
}

async function deleteResume(userId) {
    try {
        const isDelete = await databases.deleteDocument(databaseId, collectionId, userId);

        //Logger

        return isDelete
    } catch (err) {
        console.log(err);
        throw new Error(err)
    }
}

module.exports = {
    post,
    put,
    get,
    deleteResume
}