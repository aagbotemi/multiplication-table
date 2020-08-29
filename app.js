//selecting DOM
const clear = document.querySelector(".clear");
const num1 = document.getElementById("number");
const num2 = document.getElementById("range");
const btn = document.getElementById("btn");
const tableValue = document.getElementById("table");

btn.addEventListener('click', (e) => {
    e.preventDefault();

    multiply();
});

function multiply() {
    let number = parseInt(num1.value); // take number input from the user
    let range = parseInt(num2.value); // take range input from the user

    if(!isNaN(number) || !isNaN(range)) {
        let result = "";
        let multiTable = "";

        //creating a multiplication table using for loop
        for(let i = 1; i <= range; i++) {
            result = i * number;
            multiTable += `${number} * ${i} = ${result} <br/>`;
            
            tableValue.innerHTML = multiTable;
        }
    } else {
        //conditional for an empty input
        tableValue.innerHTML = "Enter a valid number";
    }

    num1.value = "";
    num2.value = "";
}