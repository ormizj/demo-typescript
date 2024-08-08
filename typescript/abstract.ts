interface MyInterface {
	name: string;
	age: number;

	getName: () => string;
}

abstract class MyAbstract {
	abstract name: string;
	age: number;

	constructor(age: number) {
		this.age = age;
	}

	abstract getName(): string;
}

class MyInterfaceClass implements MyInterface {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getName() {
		return this.name;
	}
}

class MyAbstractClass extends MyAbstract {
	name: string;

	constructor(name: string, age: number) {
		super(age);
		this.name = name;
	}

	getName(): string {
		return this.name;
	}
}
