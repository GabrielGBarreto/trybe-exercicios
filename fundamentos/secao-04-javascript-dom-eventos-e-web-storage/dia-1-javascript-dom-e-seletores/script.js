let num1 = document.getElementsByClassName("num1");
for (index = 0; index < num1.length; index += 1) {
    num1[index].style.color = "white";
    num1[index].style.backgroundColor = "purple";
}

const emergencyTasks = document.getElementsByClassName("emergency-tasks");
emergencyTasks[0].style.backgroundColor = "salmon";

let num2 = document.getElementsByClassName("num2");
for (index = 0; index < num2.length; index += 1) {
    num2[index].style.color = "white";
    num2[index].style.backgroundColor = "black";
}

const noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
noEmergencyTasks[0].style.backgroundColor = "yellow";

const footerContainer = document.getElementById("footer-container");
footerContainer.style.color = "white";
footerContainer.style.backgroundColor = "green";

const headerContainer = document.getElementById("header-container");
headerContainer.style.color = "white";
headerContainer.style.backgroundColor = "green";