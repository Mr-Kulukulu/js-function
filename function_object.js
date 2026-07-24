const student = {
    name : 'Tonoy',
    roll : 100,
    age :18,
    marks : 55,
}
function objectFun (role) {
        console.log(role)
    if(student.age>=18){
        console.log("Age is",student.age,"Ready for vote")
    }
    else{
        console.log("Not ready for vote")
    }

}

const isStudent = objectFun(student)
