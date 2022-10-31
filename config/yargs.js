const argv = require('yargs')(process.argv.slice(2))
    .option(
        'b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            description: 'Is the base of the table'
        })
        .option(
        'l', {
            alias: 'list',
            type: 'boolean',
            default: false,
            description: 'Show the table'
        })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw `The base have to be a number`
        } else {
            return true // tell Yargs that the arguments passed the check
        }
    }).argv;

    module.exports = argv;