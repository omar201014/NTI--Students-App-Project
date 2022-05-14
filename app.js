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

// define the remove command //
yargs.command({
    command: 'remove',
    describe: 'Remove a student',
    builder: {
        ID: {
            describe: 'Student ID to remove',
            type: 'number',
            demandOption: true
        }
    },    
    handler: () => {
        students.removeStudent(yargs.argv.ID);
    }
});

// define the read command //
yargs.command({
    command: 'read',
    describe: 'Read the students data',
    builder: {
        name: {
            describe: 'Student name to read data',
            type: 'string',
            demandOption: true
        }
    },
    handler: () => {
        students.readStudents(yargs.argv.name);
    }
});
yargs.parse();


