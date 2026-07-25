const STORAGE_KEYS = {
    PROJECTS: "sprintflow_projects",
    TASKS: "sprintflow_tasks",
};

function saveToStorage(key, data) {
    localStorage.setItem(key,JSON.stringify(data));
}

function getFromStorage(key) {
    const data = localStorage.getItem(key);

    if (!data) {
        return [];
    }

    return JSON.parse(data);
}

function removeFromStorage(key) {
    localStorage.removeItem(key);
}