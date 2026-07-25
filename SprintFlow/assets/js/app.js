//APPLICATION INITIALIZATION
document.addEventListener("DOMContentLoaded", initializeApplication);

// INITIALIZE APPLICATION
function initializeApplication() {
    bindEvents();
    loadApplication();
}

// BIND EVENTS
function bindEvents() {
    document.getElementById("createProjectBtn").addEventListener("click", createProject);
    document.getElementById("addTaskBtn").addEventListener("click", createTask);
    document.getElementById("updateTaskBtn").addEventListener("click", updateTask);
    document.getElementById("cancelEditBtn").addEventListener("click", closeEditModal);
    document.getElementById("closeModalBtn").addEventListener("click", closeEditModal);
    document.getElementById("searchTask").addEventListener("input", searchTasks);
    document.getElementById("statusFilter").addEventListener("change", applyTaskFilters);
    document.getElementById("priorityFilter").addEventListener("change", applyTaskFilters);
}

document.addEventListener("click", function(event) {
    const modal = document.getElementById("editTaskModal");
    if (event.target === modal) {
        closeEditModal();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeEditModal();
    }
});

// LOAD APPLICATION
function loadApplication() {
    renderProjects();
    populateProjectDropdown();
    refreshApplication();
}

function refreshApplication() {
    applyTaskFilters();
    updateDashboard();
}