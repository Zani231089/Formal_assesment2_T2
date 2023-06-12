let studentRegistration = []

registerStudent = () => {

    let studentTotal = 0

    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let number = document.getElementById("number").value;
    let subOne = document.getElementById("subOne").value;
    let subTwo = document.getElementById("subTwo").value;

    console.log(studentRegistration)

    

    //Radio options
    let baseCheck = document.getElementsByName("baseRadio");
    let baseValue;
    for(let i = 0; i < baseCheck.length; i++){
        if(baseCheck[i].checked){
            baseValue.push(baseCheck[i].value)
            studentTotal = studentTotal + +baseCheck[i].dataset.cost
        }
    }

    studentRegistration.push({
        first: first,
        last: last,
        number: number,
        baseCheck: baseValue
    });

    
}