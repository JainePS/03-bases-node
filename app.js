const { createFile } = require('./helpers/multiplica');
const argv = require('yargs').argv;

console.clear();
console.log(process.argv);
console.log(argv);

console.log('base: yargs', argv.base);



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

// const [, , arg3 = 'base=0'] = process.argv;
// const [ , base = 0] = arg3.split('=') 
// createFile(base).then(fileName => console.log(`${fileName} created`))
// .catch(err => {throw err})
