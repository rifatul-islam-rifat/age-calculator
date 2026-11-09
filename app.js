const input = document.getElementById("date")
const CalculateBtn = document.getElementById("CalculateBtn")
const output = document.getElementById("output")


function calculateAgeBtn() {

    let date = new Date()
    let currentYear = date.getFullYear();
    let birthYear = input.value;
    birthYear = parseInt(birthYear.split("-")[0])
    let age = currentYear - birthYear;

    output.textContent = `Your age is : ${age} years`;
    





}

CalculateBtn.addEventListener("click", calculateAgeBtn)