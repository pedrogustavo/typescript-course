// interfaces

// definição
type Game = {
    title: string
}

type DLC = {
    extra: string
}

// interseção / extend
interface GameCollection extends Game, DLC {}

// implements
class CreateGame implements GameCollection {}

// declarar função
interface getSimilars {
    (title: string): void
}

// ======================= Diferenças ======================= //
// não permite tipos primitivos
interface ID extends number {}

// não consegue definir tuplas na interface
interface Tuple {
    0: number
    1: number
}

[1, 2, 3] as Tuple

// Pode ter multiplas declarações e ele une de mesmo nome
interface JQuery {
    a: string
}

interface JQuery {
    b: string
}

const $: JQuery = {
    a: 'bla',
    b: 'foo'
}

// vantagem: quando estiver criando libs, prefira interfaces, porque são mais extensíveis

// criando objetos/classes (POO)
