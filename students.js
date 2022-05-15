const fs = require('fs');  // define the fs module // 
// add function to add a new student //
const addStudent = (name, ID, marks) => {
    const students = loadStudents();  // load the students data //
    const duplicateName = students.find(student =>{
        return student.name === name
    });
    const duplicateID = students.find(student =>{
       return student.ID === ID
    });
    if(duplicateName || duplicateID){   // if the name or ID is already taken //
        console.log('Student already exists');
    }
    else if(marks.length !==4){  // if the marks array is longer than 4 //
        console.log('only 4 marks allowed to enter');
    }
    
    else{    // if everything went well //    
        students.push({
            name,
            ID,
            marks,
            total : calculateTotal(marks)   // calculate the total marks //
    });        
        saveStudents(students);   // save the new students data //
        console.log('Student added');
    }
}
// remove the student function by ID //
const removeStudent = (ID) => {
    const students = loadStudents();  // load the students data //
    const studentToRemove = students.filter((student) =>{   // filter the students data and return array with the corresponding data //
        return student.ID !== ID        
    })
    if(students.length > studentToRemove.length){  // confirm that the student is removed //
        saveStudents(studentToRemove);    // save the new students data //
        console.log('Student removed');
    }
    else{   // if the student is not found //
        console.log('Student not found');
    }
}
// read the students data from JSON file //
const readStudents = (name) => {
    const students = loadStudents();  // load the students data //
    const student = students.find((student) => {   // find the student with the corresponding name //    
        return student.name === name
    })
    if(student){  // if the student is found //
        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.ID}`);
        console.log(`maths: ${student.marks[0]}\nphysics: ${student.marks[1]}\nchemistry: ${student.marks[2]}\nbiology: ${student.marks[3]}`);
        console.log(`Total: ${student.total}`);
    }
    else{  // if the student is not found //
        console.log('Student not found');
    }
}
// list the students function //
const listStudents = () => {
    const students = loadStudents();  // load the students data //
    students.forEach((student) => {   // print the students data //
        console.log(`Name: ${student.name}`);
        console.log(`ID: ${student.ID}`);
        console.log(`maths: ${student.marks[0]}\nphysics: ${student.marks[1]}\nchemistry: ${student.marks[2]}\nbiology: ${student.marks[3]}`);
        console.log(`Total: ${student.total}`);
        console.log(`\n ------------------------------------------------- \n`);
    })
}


// calculate the total marks function//
const calculateTotal = (marks) => {
    let total = 0;
    marks.forEach((mark) => {       // loop through the marks array //   
        total += mark;
    })    
    return total;
}
// load the students function //
 const loadStudents = () =>{
        try{
            const studentData = fs.readFileSync('students.json')
            return JSON.parse(studentData); 
    }
    catch(e){
        return [];
    }
}
 // save the students data into JSON form//
 const saveStudents = (student) => {
        fs.writeFileSync('students.json', JSON.stringify(student));
    }
// export the addStudent function //
    module.exports = {
        addStudent ,
        removeStudent,
        readStudents,
        listStudents
    }

