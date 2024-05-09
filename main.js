function validateInputForm(form) {
    // Reset error messages and styles
    const formErrors = document.getElementById('formErrors');
    formErrors.innerHTML = '';
    const inputs = document.querySelectorAll('input[type="text"], textarea');
    inputs.forEach(input => {
        input.classList.remove('error');
    });

    // Validation checks
    const requestDateInput = document.getElementById('reqDate');
    const employeeIDInput = document.getElementById('empID');
    const firstNameInput = document.getElementById('fName');
    const lastNameInput = document.getElementById('lName');
    const probDescInput = document.getElementById('probDesc')

    let hasErrors = false;

    const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (!dateRegex.test(requestDateInput.value)) {
        formErrors.innerHTML += '<li>Incorrect date format.</li>';
        requestDateInput.classList.add('error');
        hasErrors = true;
    }

    const idRegex = /^[A-Z][A-Za-z0-9]{5}$/;
    if (!idRegex.test(employeeIDInput.value)) {
        formErrors.innerHTML += '<li>Incorrect employee ID format.</li>';
        employeeIDInput.classList.add('error');
        hasErrors = true;
    }

    const nameRegex = /^[A-Z].*$/;
    if (!nameRegex.test(firstNameInput.value)) {
        formErrors.innerHTML += '<li>Invalid first name.</li>';
        firstNameInput.classList.add('error');
        hasErrors = true;
    }

    if (!nameRegex.test(lastNameInput.value)) {
        formErrors.innerHTML += '<li>Invalid last name.</li>';
        lastNameInput.classList.add('error');
        hasErrors = true;
    }

    if (probDescInput.value.trim() === "") {
        formErrors.innerHTML += '<li>Please list your issue(s) in full detail.</li>';
        probDescInput.classList.add('error');
        hasErrors = true;
    }

    // Show or hide errors
    if (hasErrors) {
        formErrors.classList.remove('hide');
        return false;
    } else {
        formErrors.classList.add('hide');
        return true;
    }
}

// Function to handle form submission (unnecessary)
function checkForm() {
    const form = document.forms[0];
    const isValid = validateInputForm(form);
    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
}

// Event listener for form submission
document.getElementById("submit").addEventListener("click", function(event) {
    checkForm();
    event.preventDefault(); // Prevent default form submission
});

