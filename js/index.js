let studentRegistration = []

registerStudent = () => {

    let studentTotal = 0

    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    let number = document.getElementById("number").value;
    let subOne = document.getElementById("subOne").value;
    let subTwo = document.getElementById("subTwo").value;

    

   alert(first + " has been added to" + " " + "registration")

   
   if(subOne === "Interactive Development"){
    studentTotal = studentTotal + 0
   } else if(subOne === "Interaction Design"){
    studentTotal = studentTotal + 0
   } else if( subOne === "Product Design"){
    studentTotal = studentTotal + 0
   } else if(subOne === "Photography"){
    studentTotal = studentTotal + 0
   } else if(subOne === "Game Design"){
    studentTotal = studentTotal + 0
   }
  

   //radio option
   let baseCheck = document.getElementById("one").value;

   let baseValue;

   for(let i = 0; i < baseCheck.length; i++){
    if(baseCheck[i].checked){
        baseValue = baseCheck[i].value
        studentTotal = studentTotal + +baseCheck[i].dataset.cost
    }
   }

   console.log(first , last , number , subOne)
    
}

displayStudent = () => {

    area.innerHTML = " "

    for(let i = 0; i < studentRegistration.length; i++){
        let first = studentRegistration[i].first;
        let last = studentRegistration[i].last;
        let number = studentRegistration[i].number;
    }

    area.innerHTML += `
    <div class="card" style="width: 100%;">
              <div class="card-body">
                <h5 class="card-title">Student Name ${first}</h5>
                <p>Student Number: value${number}</p>
                <p>Year: value</p>
                <p>Choice One: value</p>
                <p>Choice Two: value</p>
              </div>
            </div> `


}