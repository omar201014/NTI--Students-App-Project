// install yargs module //
const yargs = require('yargs');
// import the data from the students file //
const students = require('./students');
// define the add command //
yargs.command({
    command: 'add',
    describe: 'Add a new student',
    builder: {
        name: {
            describe: 'Student name',
            type: 'string',
            demandOption: true
        },
        ID: {
            describe: 'Student ID',
            type: 'number',
            demandOption: true
        },
        marks: {
            describe: 'Student marks',
            type: 'array',
            demandOption: true            
        }
    },
    handler: () => {
        students.addStudent(yargs.argv.name, yargs.argv.ID, yargs.argv.marks);
    }
});

yargs.parse();


