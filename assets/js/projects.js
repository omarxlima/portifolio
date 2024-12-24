// projects

const elemProjects = document.getElementById('project__content');

export const createImage = (image) => {
    const elemPicture = document.createElement('picture');
    const elemImg = document.createElement('img');

    elemImg.setAttribute('src', image);
    elemPicture.appendChild(elemImg);

    return elemPicture;
};

export const createStrong = (projectName) => {
    const elemStrong = document.createElement('strong');
    elemStrong.innerText = projectName;

    return elemStrong;
};

export const createTags = (projectTags) => {
    const elemTags = document.createElement('div');
    projectTags.forEach(tag => {
        const elemTag = document.createElement('span');
        elemTag.innerText = tag;

        elemTags.appendChild(elemTag);
    });
    return elemTags;
};

export const createProject = (project) => {
    const elemProject = document.createElement('a');

    elemProject.setAttribute('href', project.link);
    elemProject.setAttribute('target', '_blank');
    elemProject.classList.add('project');

    // Adiciona a imagem
    elemProject.appendChild(createImage(project.image));

    // Adiciona o nome do projeto
    elemProject.appendChild(createStrong(project.name));

    // Adiciona as tags do projeto
    elemProject.appendChild(createTags(project.tags));

    return elemProject;
};

export const loadProjects = (projects) => {
    projects.forEach(project => {
        elemProjects.appendChild(createProject(project));
    });

    console.log(elemProjects);
};

export const fetchProjects = () => {
    fetch('./projects.json')
        .then(response => response.json())
        .then(loadProjects);
};
