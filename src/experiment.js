const SIZE = 30;
const LIMIT = SIZE - 1;
const CHAR = 'x';
const SPACE = ' ';
let result = '';

for (let y = 0; y < SIZE; ++y) {
  let aux = '';
  for (let x = 0; x < SIZE; ++x) {
    if (
      x === 0 ||
      x === LIMIT ||
      y === 0 ||
      y === LIMIT ||
      x === y ||
      LIMIT - x === y
    ) {
      aux += CHAR;
    } else {
      aux += SPACE;
    }
  }
  result = `${result}${aux}\n`;
}

console.log(result);
