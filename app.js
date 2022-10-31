const { createFile } = require('./helpers/multiplica');

console.clear();

// const bases = [
//     1,2,3,4,5,6,7,8,9,10
// ]
// bases.forEach(base => {
//     createFile(base).then(fileName => console.log(`${fileName} created`))
//     .catch(err => {throw err})
    
// });

createFile(base=2).then(fileName => console.log(`${fileName} created`))
.catch(err => {throw err})
