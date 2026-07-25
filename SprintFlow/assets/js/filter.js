// APPLY TASK FILTERS
function applyTaskFilters() {
    const keyword = document.getElementById("searchTask").value.trim().toLowerCase();
    const status = document.getElementById("statusFilter").value;
    const priority = document.getElementById("priorityFilter").value;
    
    let filteredTasks = [...tasks];

    // SEARCH
    if (keyword !== "") {
        filteredTasks = filteredTasks.filter((task) => {
            const project = projects.find((project) => project.id === task.projectId);
            const projectName = project ? project.name.toLowerCase() : "";
            return (
                task.title.toLowerCase().includes(keyword) ||
                task.description.toLowerCase().includes(keyword) ||
                projectName.includes(keyword)
            );
        });
    }

    // STATUS FILTER
    if (status !== "All") {
        filteredTasks = filteredTasks.filter((task) => task.status === status);
    }

    // PRIORITY FILTER
    if (priority !== "All") {
        filteredTasks = filteredTasks.filter((task) => task.priority === priority);
    }

    console.log("Search Result : ",filteredTasks);

    renderTasks(filteredTasks);
}