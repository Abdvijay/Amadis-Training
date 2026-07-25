let tasks = getFromStorage(STORAGE_KEYS.TASKS);
let editingTaskId = null;

// CREATE TASK
function createTask() {
    const title = document.getElementById("taskTitle").value.trim();
    const description = document.getElementById("taskDescription").value.trim();
    const projectId = document.getElementById("taskProject").value;
    const priority = document.getElementById("taskPriority").value;
    const status = document.getElementById("taskStatus").value;

    // VALIDATION
    if (title === "") {
        alert("Please enter task title.");
        return;
    }

    if (description === "") {
        alert("Please enter task description.");
        return;
    }

    if (projectId === "") {
        alert("Please select a project.");
        return;
    }

    // TASK OBJECT
    const task = {
        id: Date.now(),
        title,
        description,
        projectId: Number(projectId),
        priority,
        status,
        createdDate: new Date().toLocaleDateString(),
    };

    // SAVE
  	tasks.push(task);
    saveToStorage(STORAGE_KEYS.TASKS, tasks);

    // CLEAR FORM
    clearTaskForm();

    // REFRESH UI
    refreshApplication();
}

// CLEAR TASK FORM
function clearTaskForm() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDescription").value = "";
    document.getElementById("taskProject").selectedIndex = 0;
    document.getElementById("taskPriority").selectedIndex = 0;
    document.getElementById("taskStatus").selectedIndex = 0;
}

// RENDER TASKS
function renderTasks(taskList = tasks) {
    const tableBody = document.getElementById("taskTableBody");
    tableBody.innerHTML = "";

    if (taskList.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="empty-state">
                    No Tasks Found
                </td>
            </tr>
        `;
        return;
    }


    taskList.forEach(task => {
        const project = projects.find(
            project => project.id === task.projectId
        );

        tableBody.innerHTML += `
            <tr>
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${project ? project.name : "-"}</td>
                <td>
                    <span class="priority ${task.priority.toLowerCase()}">
                        ${task.priority}
                    </span>
                </td>
                <td>
                    <span class="status ${task.status.toLowerCase().replace(" ","")}">
                        ${task.status}
                    </span>
                </td>
                <td>${task.createdDate}</td>
                <td>
                    <div class="action-buttons">
                        <button class="edit-btn" onclick="openEditModal(${task.id})">Edit</button>
                        <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
                    </div>
                </td>
            </tr>
        `;
    });
}

// DELETE TASK
function deleteTask(taskId) {
    const confirmation = confirm("Are you sure you want to delete this task?");

    if (!confirmation) {
        return;
    }

    // REMOVE TASK
    tasks = tasks.filter((task) => task.id !== taskId);

    // SAVE STORAGE
    saveToStorage(STORAGE_KEYS.TASKS, tasks);

    //REFRESH UI
    refreshApplication();
}

// POPULATE EDIT PROJECT DROPDOWN
function populateEditProjectDropdown() {
    const dropdown = document.getElementById("editTaskProject");

    dropdown.innerHTML = `
        <option value="">Select Project</option>
    `;

    projects.forEach((project) => {
        dropdown.innerHTML += `
            <option value="${project.id}">
                ${project.name}
            </option>
        `;
    });
}

// OPEN EDIT MODAL
function openEditModal(taskId) {
    editingTaskId = taskId;
    const task = tasks.find((task) => task.id === taskId);

    if (!task) {
        alert("Task not found.");
        return;
    }

    populateEditProjectDropdown();
    document.getElementById("editTaskTitle").value = task.title;
    document.getElementById("editTaskDescription").value = task.description;
    document.getElementById("editTaskProject").value = task.projectId;
    document.getElementById("editTaskPriority").value = task.priority;
    document.getElementById("editTaskStatus").value = task.status;
    document.getElementById("editTaskModal").classList.add("active");
}

// CLOSE MODAL
function closeEditModal() {
    document.getElementById("editTaskModal").classList.remove("active");
    editingTaskId = null;
}

// UPDATE TASK
function updateTask() {
    const task = tasks.find((task) => task.id === editingTaskId);

    if (!task) {
        return;
    }

    const title = document.getElementById("editTaskTitle").value.trim();
    const description = document.getElementById("editTaskDescription").value.trim();
    const projectId = document.getElementById("editTaskProject").value;

    if (title === "") {
        alert("Task title is required.");
        return;
    }

    if (description === "") {
        alert("Task description is required.");
        return;
    }

    if (projectId === "") {
        alert("Please select a project.");
        return;
    }

    task.title = title;
    task.description = description;
    task.projectId = Number(projectId);
    task.priority = document.getElementById("editTaskPriority").value;
    task.status = document.getElementById("editTaskStatus").value;
    
    // SAVE STORAGE
    saveToStorage(STORAGE_KEYS.TASKS, tasks);

    //REFRESH UI
    refreshApplication();
    
    closeEditModal();
}