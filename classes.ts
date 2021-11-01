// Não permite criar novas instâncias através dela, apenas estender
abstract class UserAccount {
    public name: string
    // protected age: number
    age: number

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }

    logDetails ():void {
        console.log(`The player ${this.name} is ${this.age} years old`)
    }
}

class CharAccount extends UserAccount {
    private nickname: string
    level: number

    constructor (name: string, age: number, nickname: string, level: number) {
        super(name, age)

        this.nickname = nickname
        this.level = level
    }

    get getLevel () {
        console.log('---------------- GET -----------------')
        return this.level
    }

    set setLevel (level: number) {
        this.level = level
    }

    logCharDetails ():void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
    }
}

// const pedro = new UserAccount('Pedro', 28) erro por conta do abstract
// console.log(pedro)
// console.log(pedro.age) não pode ser acessado fora da classe ou subclasse por conta do protected
// pedro.logDetails()

const ze = new CharAccount('Zé', 35, 'zezinho', 80)
console.log(ze.level)
ze.logDetails()
ze.logCharDetails()
ze.setLevel = 500
console.log(ze.getLevel)