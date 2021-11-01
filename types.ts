// boolean (true / false)
let isOpen: boolean
isOpen = true

// string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

// number (int, float, hex, binary)
let total: number
total = 0xff0

// array (type[])
let items: string[]
items = ['foo', 'bar']

let values: Array<number>
values = [1, 2, 3]

// tuple um array onde já se sabe os itens
let title: [number, string]
title = [1, 'foo']

// enum
enum Colors {
    white = '#fff',
    black = '#000'
}

// any pode ser qualquer coisa
let coisa: any
coisa = [1]

// void (vazio) não retorna nada
function logger ():void {
    console.log('foo')
}

// null | undefined
type Bla = string | undefined

// never não é um retorno de nada
throw new Error('error')

// object
let cart: object
cart = {
    key: 'fiat'
}

// Type Inference - seta um tipo default com base no primeiro valor setado
let message2 = "messagem definida"
message2 = "string nova"

window.addEventListener('click', e => {
    // descreve o tipo do "e" sem precisar setar pois ele já entende.
    console.log(e.target)
})