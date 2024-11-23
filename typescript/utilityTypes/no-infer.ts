function createColor<C extends string>(colors: C[], defaultColor?: C) {
	// ...
}
createColor(['red', 'yellow', 'green'], 'red'); // OK
createColor(['red', 'yellow', 'green'], 'BLUE'); // OK
// C = "red" | "yellow" | "green" | "BLUE"

function createColorNoInfer<C extends string>(
	colors: C[],
	defaultColor?: NoInfer<C>
) {
	// ...
}
createColorNoInfer(['red', 'yellow', 'green'], 'red'); // OK
createColorNoInfer(['red', 'yellow', 'green'], 'BLUE'); // Error
// C = "red" | "yellow" | "green"
