interface MyInterface {
    name:string;
    age:number;

    getName: () => string;
}

abstract class MyAbstract {
    abstract name:string;
    age:number;

    abstract getName():string
}



class MyInterfaceClass implements MyInterface {
    name: string;
    age: number;

    getName() {
        return this.name
    };
}

class MyAbstractClass extends MyAbstract {
    name: string;

    getName(): string {
        return this.name
    }
}