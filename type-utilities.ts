// feito com base nos generics

type Todo = {
    title: string
    description: string
    completed: boolean
}

// readonly
const todo: Readonly<Todo> = {
    title: 'Assistir Dark de novo',
    description: 'Relembrar os detalhes',
    completed: false
}

console.log(todo)

// todo.completed = true

// Partial: Deixa propriedades opcionais
function updateTodo (todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })

//// Pick
// Pega apenas as propriedades que estamos passando de dentro de um tipo
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo3: TodoPreview = {
    title: 'Fechar Ghost of Tsushima',
    completed: false
}

//// Omit
// omite o que vc informar
type TodoPreview2 = Omit<Todo, 'description'>

const todo4: TodoPreview2 = {
    title: 'Fechar Ghost of Tsushima',
    completed: false
}
