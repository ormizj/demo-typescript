// needed when there are no default values (if there are default values, you can declare default and add "as <type>")
const sum = ({ x, y }: { x: number; y: number }) => {
	return x + y;
};

console.log(sum({ x: 2, y: 2 }));
