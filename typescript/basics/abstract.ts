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

	override getName(): string {
		return this.name;
	}
}

class MyErrorClass extends MyAbstract {
	// must have same type as superclass
	name: number;

	constructor(name: string, age: number) {
		super(age);
		this.name = name;
	}

	// must have same signature as superclass
	override getName(): number {
		return this.name;
	}
}
