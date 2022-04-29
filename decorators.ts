// @Component
// @Selector
// @useState('dasds)



// Class decorator
// Factory 

// function Logger(prefix: string) {
//     return (target) => {
//         console.log(`${prefix} - ${target}`)
//     }
// }

// @Logger('awesome')
// class Foo {
// }

// class decorator
// function setAPIVersion (apiVersion: string) {
//     return (constructor) => {
//         return claass extends constructor {
//             version = apiVersion
//         }
//     }
// }

// // decorator - anotar a versão da API
// @setAPIVersion('1.0.0')
// class API {}

// console.log(new API())
// ==============================================

// Property decorator

// function minLength (length: number) {
//     return (target: any, key: string) => {
//         let val = target[key]

//         const getter = () => val
//         const setter = (value: string) => {
//             if (value.length < length) {
//                 console.log(`Error: vc não pode criar ${key} menor que ${lenght}`)
//             } else {
//                 val = value
//             }
//         }

//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter
//         })
//     }
// }

// class Movie {
//     // validação - se for que 5 error
//     @minLength(5)
//     title: string
//     constructor (t: string) {
//         this.title = t
//     }
// }

// const movie = newMovie('Interstellar')
// console.log(movie)


// Method decorator

// function delay(ms: number) {
//     return (target: any, key: string, descriptor: PropertyDescriptor) => {
//         const originalMethod = descriptor.value

//         descriptor.value = function (...args) {
//             console.log(`Èsperando ${ms}`)
//             setTimeout(() => {
//                 originalMethod.apply(this, args)
//             }, ms)
//             return descriptor
//         }
//     }
// }

// class Greeter {
//     greeting: string

//     constructor(g: string) {
//         this.greeting = g
//     }
//     @delay(1000)
//     greet() {
//         console.log(`Hello ${this.greeting}`)
//     }
// }

// const pessoinha = new Greeter('Pessoinha')
// pessoinha.greet()

// Parameter decorator
// Acessor decorator