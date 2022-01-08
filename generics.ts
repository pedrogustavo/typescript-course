// S => State
// T =: Type
// K => key
// V => Value
// E => Element

// any = qualquer coisa
// unknown = Após definido irá aceitar apenas o tipo que foi definido

type numOrStr = number | string

function useState <S extends numOrStr = string >() {
    // S extends number | string ... define o tipo
    // = string define o default
    let state: S

    function getState () {
        return state
    }

    function setState (newState: number | string) {
        state = newState
    }

    return{ getState, setState }
}

const newState = useState()

// newState.setState(false)
// console.log(newState.getState())

newState.setState('foo') // string
console.log(newState.getState())

newState.setState(123) // dê erro
console.log(newState.getState())

newState.setState('bla')
console.log(newState.getState())