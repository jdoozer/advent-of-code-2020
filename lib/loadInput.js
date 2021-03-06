const fs = require('fs');
const path = require('path');

const loadInput = ({ number=false, test=false, delimiter='\n' }) => {
  const dir = path.dirname(module.parent.filename);
  const file = path.resolve(`${dir}/${test ? 'test_' : ''}input.txt`);

  const input = fs.readFileSync(file, 'utf8');
  const inputStringArray = input.trim().split(delimiter);
  return number ? inputStringArray.map(num => parseInt(num)) : inputStringArray;
}

module.exports = loadInput;