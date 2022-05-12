const fs = require('fs');  // define the fs module // 

const addStudent = (name, ID, marks) => {
    const student = loadStudents();
    const duplicateName = student.find(student =>{
     return student.name === name
    });
    const duplicateID = student.find(student =>{
       return student.ID === ID
    });
    if(duplicateName || duplicateID){   // if the name or ID is already taken //
        console.log('Student already exists');
    }
    else{
        student.push({
            name,
            ID,
            marks,
            total : calculateTotal(marks)   // calculate the total marks //
        });        
        saveStudents(student);
        console.log('Student added');
    }
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
        addStudent
    }

