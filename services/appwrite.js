const { ID, Account, Client } = require('appwrite') //Client, Account, Databases
const sdk = require('node-appwrite')

const endpoint = 'http://localhost/v1'
const projectId = '63d9016cea6df8e70edc'
const databaseId = '63d901781afad61fd78d'
const collectionId = '63d901d89c618b74d51b'

const sdkClient = new sdk.Client()

sdkClient
    .setEndpoint(endpoint)
    .setProject(projectId)
    .setKey('d90326ff72e7a94659fa87fa85ff0b91cf13aff2eb55a180fe1c32ec1c0bd5008224d589507927ff193d0ab1251bdc4c458987c4f9afedc39ab9f2a5dc0c50bacd43cc4ec12c47121353324f801d152680c3cb82e5680de4fc104d65b87c5d380967618b72ffa5de34220222d8248bcedf878dba798b6437bea884ba26ff6a24')

const sdkDatabases = new sdk.Databases(sdkClient)
const sdkAccount = new sdk.Account(sdkClient);
const sdkUsers = new sdk.Users(sdkClient);

const client = new Client()

client
    .setEndpoint(endpoint)
    .setProject(projectId)

const account = new Account(client) 

module.exports = {
    sdkDatabases,
    sdkAccount,
    sdkClient,
    sdkUsers,

    client, 
    account,
    databaseId,
    collectionId,
    ID
}