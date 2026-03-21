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

    // ===== VIEW EMPLOYEES =====
    const table = document.getElementById("employeeTable");

    if (table) {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];

        table.innerHTML = "";

        employees.forEach((emp) => {
            table.innerHTML += `
                <tr>
                    <td>${emp.name}</td>
                    <td>${emp.email}</td>
                    <td>${emp.phone}</td>
                    <td>${emp.department}</td>
                    <td>
                        <button onclick="showDetails()">Details</button>
                        <button onclick="editContact()">Edit</button>
                        <button onclick="deleteContact()">Delete</button>
                    </td>
                </tr>
            `;
        });
    }

    // ===== DASHBOARD COUNT =====
    const countElement = document.getElementById("contactCount");

    if (countElement) {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        countElement.textContent = employees.length;
    }

});