function onFormSubmit() {
    data = readFormData();

    var form = document.getElementById("reg_form");
    form.reset();

    insertNewRecord(data);
}

function readFormData() {
    var formData = {};

    formData["name"] = document.getElementById("reg_name").value;
    formData["email"] = document.getElementById("reg_email").value;
    formData["age"] = document.getElementById("reg_age").value;
    formData["phone"] = document.getElementById("reg_phone").value;
    formData["bloodgroup"] = document.getElementById("reg_bloodgroup").value;
    
    var gender = document.getElementsByName("gender");
    console.log(gender);
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) 
            formData["gender"] = gender[i].value;
    }
    
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("datalist").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.age;
    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.phone;
    
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.bloodgroup;
    
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.gender;
}
