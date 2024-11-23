interface FunctionInterface<T> {
	// method 1
	func1(): T;

	// method 2
	func2: () => T;

	// method 1 doesn't work with dynamic keys
	[K: string]: () => T;
}
