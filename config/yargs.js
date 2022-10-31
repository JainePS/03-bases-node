const argv = require('yargs')
    .options({
        'base': {
            alias: 'b',
            type: 'number',
            demandOption: true,
            description: 'Is the base of the table'
        },
        'list': {
            alias: 'l',
            type: 'boolean',
            default: false,
            demandOption: true,
            description: 'Show the table'
        }
    }
    ).check((argv, options) => {
        if (isNaN(argv.b)) {
            throw `The base have to be a number`
        } else {
            return true // tell Yargs that the arguments passed the check
        }
    }).help()
    .argv;
    console.log('base: yargs', argv.base);
    console.log(argv);
    module.exports = argv;