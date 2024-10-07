function validateInput(input) {
    return !isNaN(input.value) && input.value !== "";
}


function Addition() {
    let v = document.getElementById('Num1');
    let d = document.getElementById('Num2');
    if (!validateInput(v)) {
        document.getElementById("error-Num1").innerHTML = "Please enter a valid number";
    } else {
        document.getElementById("error-Num1").innerHTML = "";
    }
    if (!validateInput(d)) {
        document.getElementById("error-Num2").innerHTML = "Please enter a valid number";
    } else {
        document.getElementById("error-Num2").innerHTML = "";
    }
    if (validateInput(v) && validateInput(d)) {
        let res = parseInt(v.value) + parseInt(d.value);
        document.getElementById("Result").innerHTML = res;
    }
}

function Substraction() {
    let v = document.getElementById('Num1');
    let d = document.getElementById('Num2');
    if (!validateInput(v)) {
        document.getElementById("error-Num1").innerHTML = "Please enter a valid number";
    } else {
        document.getElementById("error-Num1").innerHTML = "";
    }
    if (!validateInput(d)) {
        document.getElementById("error-Num2").innerHTML = "Please enter a valid number";
    } else {
        document.getElementById("error-Num2").innerHTML = "";
    }
    if (validateInput(v) && validateInput(d)) {
        let res = parseInt(v.value) - parseInt(d.value);
        document.getElementById("Result").innerHTML = res;
    }
}

function Multiplication() {
    let v = document.getElementById('Num1');
    let d = document.getElementById('Num2');
    if (!validateInput(v)) {
        document.getElementById("error-Num1").innerHTML = "Please enter a valid number";
    } else {
        document.getElementById("error-Num1").innerHTML = "";
    }
    if (!validateInput(d)) {
        document.getElementById("error-Num2").innerHTML = "Please enter a valid number";
    } else {
        document.getElementById("error-Num2").innerHTML = "";
    }
    if (validateInput(v) && validateInput(d)) {
        let res = parseInt(v.value) * parseInt(d.value);
        document.getElementById("Result").innerHTML = res;
    }
}

function Division() {
    let v = document.getElementById('Num1');
    let d = document.getElementById('Num2');
    if (!validateInput(v)) {
        document.getElementById("error-Num1").innerHTML = "Please enter a valid number";
    } else {
        document.getElementById("error-Num1").innerHTML = "";
    }
    if (!validateInput(d)) {
        document.getElementById("error-Num2").innerHTML = "Please enter a valid number";
    } else {
        document.getElementById("error-Num2").innerHTML = "";
    }
    if (validateInput(v) && validateInput(d)) {
        if (d.value === "0") {
            document.getElementById("error-Num2").innerHTML = "Cannot divide by zero";
            document.getElementById("Result").innerHTML = "";
        } else {
            let res = (parseInt(v.value) / parseInt(d.value)).toFixed(2);
            document.getElementById("Result").innerHTML = res;
        }
    }
}