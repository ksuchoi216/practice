class Human {
    constructor(name="None"){
        this.name = name
    }

    getName(){
        return this.name;
    }
}

class Player extends Human{
    constructor(name, field="None"){
        super(name);
        this.field = field;
    }
}

class Animal {
    isAnimal = true;

    checkisAnimal(){
        return this.isAnimal;
    }
}

class Dog extends Animal{
    constructor(type="dog"){
        super(type);
        this.type = type;
    }

    getType(){
        return this.type;
    }
}

const animal = new Animal()
console.log(animal);

const dog = new Dog("cat")
console.log(dog.getType());

// const human = new Human('KC')
// console.log(human);
// const player = new Player('KC','football')
// console.log(player.getName());
// console.log(player);