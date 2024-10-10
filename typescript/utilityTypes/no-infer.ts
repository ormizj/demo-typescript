function createColorNoInfer<C extends string>(
    colors: C[],
    defaultColor?: NoInfer<C>
) { 
    // ... 
}
createColorNoInfer(["red", "yellow", "green"], "red");  // OK
createColorNoInfer(["red", "yellow", "green"], "blue");  // Error
// C = "red" | "yellow" | "green"

function createColor<C extends string>(
    colors: C[],
    defaultColor?: C,
) {
    // ...
}
createColor(["red", "yellow", "green"], "red");  // OK
createColor(["red", "yellow", "green"], "blue");  // OK
// C = "red" | "yellow" | "green" | "blue"
