const tableUsers = document.querySelector("#tableUsers");

function createRow(){
    const tableUsers = document.querySelector("#tableUsers");
    const inputName = document.querySelector("#name");
    const inputLastName = document.querySelector("#lastName");
    const inputPatronymic = document.querySelector("#patronymic");
    const inputBirthday = document.querySelector("#birthday");
    const inputAge = document.querySelector("#age");
    const inputEmail = document.querySelector("#email");
    const inputKindSport = document.querySelector("#sport");
    const inputPhone = document.querySelector("#phone");

    const genderRadios = document.querySelectorAll('input[type="radio"][name="gender"]');

    let genderValue = "Other"
    for (let radio of genderRadios){
        if (radio.checked){
            genderValue = radio.value;
        }
    }

    const createdRow = document.createElement("tr");

    const nameTD = document.createElement("td");
    const lastNameTD = document.createElement("td");
    const patronymicTD = document.createElement("td");
    const birthdayTD = document.createElement("td");
    const ageTD = document.createElement("td");
    const emailTD = document.createElement("td");
    const sportTD = document.createElement("td");
    const phoneTD = document.createElement("td");
    const genderTD = document.createElement("td");


    const checkboxTD = document.createElement("td");
    const inputCheckboxTD = document.createElement("input");
    inputCheckboxTD.setAttribute("type", "checkbox");
    inputCheckboxTD.classList.add("select-row");

    checkboxTD.appendChild(inputCheckboxTD);


    nameTD.textContent = inputName.value;
    lastNameTD.textContent = inputLastName.value;
    patronymicTD.textContent = inputPatronymic.value;
    birthdayTD.textContent = inputBirthday.value;
    ageTD.textContent = inputAge.value;
    emailTD.textContent = inputEmail.value;
    sportTD.textContent = inputKindSport.value;
    phoneTD.textContent = inputPhone.value;
    genderTD.textContent = genderValue;

    createdRow.appendChild(nameTD);
    createdRow.appendChild(lastNameTD);
    createdRow.appendChild(patronymicTD);
    createdRow.appendChild(birthdayTD);
    createdRow.appendChild(ageTD);
    createdRow.appendChild(emailTD);
    createdRow.appendChild(sportTD);
    createdRow.appendChild(phoneTD);
    createdRow.appendChild(genderTD);

    createdRow.appendChild(checkboxTD);

    tableUsers.appendChild(createdRow);
}


function deleteRows(){
    const checkboxes = document.querySelectorAll(".select-row");
    const rowsForDelete = [];
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            rowsForDelete.push(index);
        }
    });

    for (let i = rowsForDelete.length - 1; i >= 0; i--) {
        tableUsers.deleteRow(rowsForDelete[i] + 1);
    }
}

function dublicateRow(){
    const checkboxes = document.querySelectorAll(".select-row");
    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            checkbox.checked = false;
            const rowToDuplicate = tableUsers.rows[index + 1];
            const newRow = rowToDuplicate.cloneNode(true);
            tableUsers.appendChild(newRow)
        }
    });
}