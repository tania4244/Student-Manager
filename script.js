function addStudent() {
    let name = document.getElementById("studentName").value;
    let id = document.getElementById("studentId").value;

    if (name === "" || id === "") {
        alert("Please enter student name and ID!");
        return;
    }

    let li = document.createElement("li");

    let studentInfo = document.createElement("span");
    studentInfo.innerText = name + " - " + id;

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";

    editBtn.onclick = function() {
        let newName = prompt("Enter new student name:", name);
        let newId = prompt("Enter new student ID:", id);

        if (newName !== null && newName.trim() !== "" &&
            newId !== null && newId.trim() !== "") {
            name = newName;
            id = newId;
            studentInfo.innerText = name + " - " + id;
        }
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(studentInfo);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("studentList").appendChild(li);

    document.getElementById("studentName").value = "";
    document.getElementById("studentId").value = "";
}