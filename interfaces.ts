// conjunto de dados pra descrever a estrutura dos objetos

interface Game {
    title: string
    description: string
    readonly genre: string
    platform?: string[] // ? deixa como opcional
    getSimilars?: (title:string) => void
}

const tlou: Game = {
    title: 'The Last of Us',
    description: 'The best game in the world',
    genre: 'action',
    // platform: ['PS3', 'PS4'],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`)
    }
}

console.log(tlou.title)
if (tlou.getSimilars) tlou.getSimilars(tlou.title)

interface DLC extends Game { // extende uma interface
    originalGame: Game
    newContent: string[]
}

const leftbehind: DLC = {
    title: 'The Last of Us - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'action',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ['3 hours story', 'new characters']
}

class CreateGame implements Game{
    title: string
    description: string
    genre: string

    constructor(t: string, d: string, g: string) {
        this.title = t
        this.description = d
        this.genre = g
    }
}