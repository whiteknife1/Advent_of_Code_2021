import { readFileSync } from 'fs';

const depths = readFileSync('./input.txt', 'utf-8');
// count to keep track of depth increases
let depthIncreases = 0;
// split string on newline character and map to type number
const depthsArray = depths.split('\n').map(Number);
const length = depthsArray.length;
let i = 0;
while (i < length - 1) {
	const current = depthsArray[i];
	const next = depthsArray[i+1];
	if (next > current) {
		depthIncreases++;
	}
	i++;
}
// tslint:disable-next-line: no-console
console.log("Depth Increases:", depthIncreases);