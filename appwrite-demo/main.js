import { ID, Account, Client } from './node_modules/appwrite/types/index.d.ts' //Client, Account, Databases

const endpoint = 'http://localhost/v1'
const projectId = '63d9016cea6df8e70edc'
const databaseId = '63d901781afad61fd78d'
const collectionId = '63d901d89c618b74d51b'

const client = new Client()
// const databases = new sdk.Databases(client)

client
    .setEndpoint(endpoint)
    .setProject(projectId)

const account = new Account(client) 

async function signup() {
    const credentials = {
        username: 'D22222322',
        password: '1223221121221234234',
        email: 'd23222222@gmail.com',
    }//req body
    try {
        const user = await account.create(ID.unique(), credentials.email, credentials.password, credentials.username)
        const session = await account.createEmailSession(credentials.email, credentials.password)
        const jwt = await account.createJWT()
        console.log(jwt);
    } catch (err) {
        console.log(err)
    }
}

signup()