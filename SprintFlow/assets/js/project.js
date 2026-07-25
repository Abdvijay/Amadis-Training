let projects = getFromStorage(STORAGE_KEYS.PROJECTS);

// PROJECT CREATION
function createProject() {
  const projectNameInput = document.getElementById("projectName");
  const projectName = projectNameInput.value.trim();

  // Validation

  if (projectName === "") {
    alert("Please enter a project name.");
    projectNameInput.focus();
    return;
  }

  // Duplicate Validation

  const projectExists = projects.some(
    (project) => project.name.toLowerCase() === projectName.toLowerCase(),
  );

  if (projectExists) {
    alert("Project already exists.");
    projectNameInput.focus();
    return;
  }

  // Project Object

  const project = {
    id: Date.now(),
    name: projectName,
  };

  // Add Project
  projects.push(project);

  // Save Local Storage
  saveToStorage(STORAGE_KEYS.PROJECTS, projects);

  // Clear Input
  projectNameInput.value = "";

  // Refresh UI
  renderProjects();
  populateProjectDropdown();
}

// RENDER PROJECTS
function renderProjects() { 
	const projectList = document.getElementById("projectList"); 
	projectList.innerHTML = ""; 

	if(projects.length === 0) { 
		projectList.innerHTML = `
            <div class="no-project">No Projects Found</div>
        `; 
		return; 
	} 

	projects.forEach(project => {
		projectList.innerHTML += `
            <div class="project-item">
                <div class="project-info">
                    <span class="project-icon"> 📁 </span>
                    <span class="project-name"> ${project.name} </span>
                </div>

                <button class="delete-project-btn" onclick="deleteProject(${project.id})">🗑</button>
            </div>

        `; 
	}); 
}

// DELETE PROJECT
function deleteProject(projectId) {
    const confirmation = confirm("Are you sure you want to delete this project?");

    if (!confirmation) {
        return;
    }

    projects = projects.filter((project) => project.id !== projectId);
    saveToStorage(STORAGE_KEYS.PROJECTS,projects);
    renderProjects();
    populateProjectDropdown();
}

// PROJECT DROPDOWN

function populateProjectDropdown() {
    const dropdown = document.getElementById("taskProject");

    dropdown.innerHTML = `
        <option value="">
            Select Project
        </option>
    `;

    projects.forEach((project) => {
        dropdown.innerHTML += `
            <option value="${project.id}">
                ${project.name}
            </option>
        `;
    });
}