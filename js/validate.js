function checkInput(){
    const form = document.querySelector('.registration-form');
    const inputFields = form.querySelectorAll('.field input');
    const errorFields = form.querySelectorAll(".error-message");


    let counter = 0;
    let isCorrect = true;
    for (let field of inputFields){
        let fieldErrorMessage = errorFields[counter];
        counter++;

        if (field.id === "name") {
            if (!/^[a-zA-Z-']+$/u.test(field.value)) {
                fieldErrorMessage.style.display = "block";
                fieldErrorMessage.textContent = "This field can't be empty and you can't use numbers";
                isCorrect = false;
                field.style.borderColor = "red";
            } else {
                fieldErrorMessage.style.display = "none";
                field.style.borderColor = "green";
            }
        }else if (field.id === "lastName"){
            if (!/^[a-zA-Z-']+$/u.test(field.value)){
                fieldErrorMessage.style.display = "block";
                fieldErrorMessage.textContent = "This field can't be empty and you can't use numbers";
                isCorrect = false;
                field.style.borderColor = "red";
            }else {
                fieldErrorMessage.style.display = "none";
                field.style.borderColor = "green";
            }
        }else if (field.id === "patronymic") {
            if (!/^[a-zA-Z-']+$/u.test(field.value)) {
                fieldErrorMessage.style.display = "block";
                fieldErrorMessage.textContent = "This field can't be empty and you can't use numbers";
                isCorrect = false;
                field.style.borderColor = "red";
            } else {
                fieldErrorMessage.style.display = "none";
                field.style.borderColor = "green";
            }
        }else if (field.id === "birthday") {
            if (field.value === "") {
                fieldErrorMessage.style.display = "block";
                fieldErrorMessage.textContent = "Enter a birthday";
                field.style.borderColor = "red";
                isCorrect = false;
            } else {
                fieldErrorMessage.style.display = "none";
                field.style.borderColor = "green";
            }
        }else if (field.id === "age") {
            if (parseInt(field.value) < 6 || field.value === "") {
                fieldErrorMessage.style.display = "block";
                fieldErrorMessage.textContent = "Your age must be more 6";
                field.style.borderColor = "red";
                isCorrect = false;
            } else {
                fieldErrorMessage.style.display = "none";
                field.style.borderColor = "green";
            }
        }else if (field.id === "email") {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                fieldErrorMessage.style.display = "block";
                fieldErrorMessage.textContent = "Invalid email address. Use the format example@example.com";
                field.style.borderColor = "red";
                isCorrect = false;
            } else {
                fieldErrorMessage.style.display = "none";
                field.style.borderColor = "green";
            }
        }else if (field.id === "sport") {
            if (field.value === "") {
                fieldErrorMessage.style.display = "block";
                fieldErrorMessage.textContent = "Enter a kind of sport";
                field.style.borderColor = "red";
                isCorrect = false;
            } else {
                fieldErrorMessage.style.display = "none";
                field.style.borderColor = "green";
            }
        }else if (field.id === "phone") {
            if (!/^\+38\(0[0-9]{2}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(field.value)) {
                fieldErrorMessage.style.display = "block";
                fieldErrorMessage.textContent = "Enter a phone. For example '+38(099)-123-45-67'";
                field.style.borderColor = "red";
                isCorrect = false;
            } else {
                fieldErrorMessage.style.display = "none";
                field.style.borderColor = "green";
            }
        }else if (field.id === "male" || field.id === "female" || field.id === "other") {
            counter--;
            if (!(document.getElementById("male").checked || document.getElementById("female").checked ||
                document.getElementById("other").checked)) {
                fieldErrorMessage = field.closest('.field').querySelector('.error-message')
                fieldErrorMessage.style.display = "block";
                fieldErrorMessage.textContent = "Enter a gender";
                isCorrect = false;
            }else {
                fieldErrorMessage.style.display = "none";
            }
        }else if (field.id === "file") {
            fieldErrorMessage = field.closest('.field').querySelector('.error-message');
            if (field.value === "") {
                fieldErrorMessage.style.display = "block";
                fieldErrorMessage.textContent = "Enter a file";
                field.style.borderColor = "red";
                isCorrect = false;
            } else {
                fieldErrorMessage.style.display = "none";
                field.style.borderColor = "green";
            }
        }
        if (!isCorrect){
            document.getElementById("registerButton").disabled = true;
        }else {
            document.getElementById("registerButton").disabled = false;
            document.getElementById("registerButton").background = "#030303";
        }
    }

}