const argv = require('./config/yargs');

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
/**
 * To use a terminal command
 */

console.log(argv.b);
createFile(argv.b, argv.l).then(fileName => console.log(`${fileName} created`))
    .catch(err => { throw err })
