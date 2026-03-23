// ===== BUTTON PLACEHOLDERS =====
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

    // ===== SAMPLE DATA FOR DEMO =====
    if (!localStorage.getItem("employees")) {
        const sampleEmployees = [
            { name: "John Mwangi", email: "john@gmail.com", phone: "0712345678", department: "IT" },
            { name: "Mary Wanjiku", email: "mary@gmail.com", phone: "0723456789", department: "HR" },
            { name: "David Otieno", email: "david@gmail.com", phone: "0734567890", department: "Finance" },
            { name: "Grace Achieng", email: "grace@gmail.com", phone: "0745678901", department: "Marketing" },
            { name: "Peter Kamau", email: "peter@gmail.com", phone: "0756789012", department: "Sales" }
        ];

        localStorage.setItem("employees", JSON.stringify(sampleEmployees));
    }


    // ===== ADD EMPLOYEE FORM (still works) =====
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

            // Optional redirect
            window.location.href = "view-contacts.html";
        });
    }


    // ===== VIEW EMPLOYEES TABLE =====
    const table = document.getElementById("employeeTable");
    const emptyMessage = document.getElementById("emptyMessage");

    if (table) {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];

        table.innerHTML = "";

        if (employees.length === 0) {
            if (emptyMessage) emptyMessage.style.display = "block";
        } else {
            if (emptyMessage) emptyMessage.style.display = "none";

            employees.forEach((emp) => {
                table.innerHTML += `
                    <tr>
                        <td>${emp.name}</td>
                        <td>${emp.email}</td>
                        <td>${emp.phone}</td>
                        <td>${emp.department}</td>
                        <td>
                            <button class="action-btn details" onclick="showDetails()">Details</button>
                            <button class="action-btn edit" onclick="editContact()">Edit</button>
                            <button class="action-btn delete" onclick="deleteContact()">Delete</button>
                        </td>
                    </tr>
                `;
            });
        }
    }


    // ===== DASHBOARD COUNT =====
    const countElement = document.getElementById("contactCount");

    if (countElement) {
        let employees = JSON.parse(localStorage.getItem("employees")) || [];
        countElement.textContent = employees.length;
    }

    // ===== DASHBOARD EXTRA =====
const deptCount = document.getElementById("deptCount");
const activityList = document.getElementById("activityList");

let employees = JSON.parse(localStorage.getItem("employees")) || [];

// Department count
if (deptCount) {
    let departments = new Set(employees.map(emp => emp.department));
    deptCount.textContent = departments.size;
}

// Recent activity
if (activityList) {
    activityList.innerHTML = "";

    if (employees.length === 0) {
        activityList.innerHTML = "<li>No recent activity</li>";
    } else {
        let last = employees[employees.length - 1];

        activityList.innerHTML += `<li>✔ Last added: ${last.name}</li>`;
        activityList.innerHTML += `<li>📊 Total employees: ${employees.length}</li>`;
        activityList.innerHTML += `<li>🏢 Departments: ${new Set(employees.map(e => e.department)).size}</li>`;
    }
}

});