function showDetails() {
    alert("Employee full details will appear here.");
}

function editContact() {
    alert("Edit employee feature.");
}

function deleteContact() {
    confirm("Are you sure you want to delete?");
}

// ===== MAIN LOGIC =====
document.addEventListener("DOMContentLoaded", function () {

    // ===== ADD EMPLOYEE =====
    const form = document.getElementById("employeeForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const employee = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                department: document.getElementById("department").value
            };

            let employees = JSON.parse(localStorage.getItem("employees")) || [];

            employees.push(employee);

            localStorage.setItem("employees", JSON.stringify(employees));

            alert("Employee added successfully!");

            form.reset();
        });
    }
