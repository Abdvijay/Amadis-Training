// UPDATE DASHBOARD
function updateDashboard() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.status === "Done").length;
    const pendingTasks = totalTasks - completedTasks;
    const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    document.getElementById("totalTasks").textContent = totalTasks;
    document.getElementById("completedTasks").textContent = completedTasks;
    document.getElementById("pendingTasks").textContent = pendingTasks;
    document.getElementById("progressPercentage").textContent = `${progress}%`;
}