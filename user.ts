// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
    id: number, 
    name: string,
    email?: string // interrogação seta opcional
}

const account: AccountInfo = {
    id: 123,
    name: 'Pedro',
    email: 'eu@pedrogustavo.com'
}

type CharInfo = {
    nickname: string,
    level: number
}

const char: CharInfo = {
    nickname: 'pedrogustavo',
    level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: 'pedro',
    nickname: 'pedrogustavo',
    level: 100
}