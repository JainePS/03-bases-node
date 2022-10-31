const { createFile } = require('./helpers/multiplica');

console.clear();
/**
 * To create all tables once
 */
// const bases = [
//     1,2,3,4,5,6,7,8,9,10
// ]
// bases.forEach(base => {
//     createFile(base).then(fileName => console.log(`${fileName} created`))
//     .catch(err => {throw err})
    
// });

const [, , arg3 = 'base=0'] = process.argv;
const [ , base = 0] = arg3.split('=') 
createFile(base).then(fileName => console.log(`${fileName} created`))
.catch(err => {throw err})
