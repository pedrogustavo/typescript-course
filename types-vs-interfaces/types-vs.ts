// type Alias

// definição
type GameT = {
    title: string
}

type DLCT = {
    extra: string
}

// intersection
type GameCollectionT = GameT & DLCT

// implements
class CreateGameT implements GameCollectionT {}

// declarar função
type getSimilarsT = (title: string) => void

// ======================= Diferenças ======================= //

// permite declarar tipos primitivos

type IDT = string | number

// pode declarar tuplas
type TupleT = [number, number]

[1, 2] as TupleT

// apenas uma declaração por escopo

type JQueryT = { a: string }
type JQueryT = { b: string }

// mais recomendado
// na moioria das vezes
// comece com types e com a necessidade usar interfaces
// React - Props