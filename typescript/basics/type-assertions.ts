const formatNumber = (num: number, format: boolean): number | string => {
	return format ? `${num}` : num;
};

const myNumNumber = formatNumber(5, false) as number;
const myStrNumber = <string>formatNumber(5, true);
