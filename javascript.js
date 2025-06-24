const pwd = document.getElementById("password");

const confirmPassword = document.querySelector(".confirm-password")

const output = document.querySelector(".output")

const confirmOutput = document.querySelector(".confirm-output")


pwd.addEventListener("input", () => {
    if (pwd.checkValidity() == false) {
        output.textContent = "Minimum password length 8 characters";        
    } else {
        output.textContent = "";
    }
});

confirmPassword.addEventListener("input", () => {
    if (confirmPassword.checkValidity() == false) {
        confirmOutput.textContent = "Minimum password length 8 characters";        
    } else {
        confirmOutput.textContent = "";
    }
});
