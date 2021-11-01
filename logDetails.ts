// Type Alias
type Uid = number | string

function logDetails (uid: Uid | string, item: string) {
    console.log(`A product with ${uid} has a title as ${item}`)
}

function logInfo (uid: Uid | string, user: string) {
    console.log(`An user with ${uid} has a name as ${user}`)
}

logDetails(123, 'sapato')
logDetails('123', 'sapato')

logInfo(123, 'Willian')
logInfo('123', 'Willian')


type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'ios'

function renderPlatform (platform: Platform) {
    return platform
}

// vai dar erro, pois não está listado nas plataformas
renderPlatform('ios')