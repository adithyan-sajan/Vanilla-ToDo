import './styles.css'
import *  as projectManager from './projectManager'
import *  as displayManager from './displayManager'

const form = document.querySelector(".form-container");
form.addEventListener("submit", (event) => {
    // event.preventDefault();

    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const body = document.getElementById("body").value;
    const priority = document.querySelector('input[name="priority"]:checked')?.value ?? "low";
    let tempToDo = projectManager.createToDo(title, body, date, priority);
    let currProj = displayManager.findFromProject(projectContainer.getProjects(), displayManager.currentProject);
    currProj.addToProject(tempToDo);
});

let projectContainer = projectManager.createProjectContainer()

let todo1 = projectManager.createToDo("todo1", "body1", "2025-05-08", "high");
let todo2 = projectManager.createToDo("todo2", "body2", "2025-05-09", "medium");
let todo3 = projectManager.createToDo("todo3", "body3", "2025-05-10", "low");

let todo4 = projectManager.createToDo("todo4", "body4", "2025-05-11", "high");
let todo5 = projectManager.createToDo("todo5", "body5", "2025-05-12", "medium");
let todo6 = projectManager.createToDo("todo6", "body6", "2025-05-13", "low");

let todo7 = projectManager.createToDo("todo7", "body7", "2025-05-14", "high");
let todo8 = projectManager.createToDo("todo8", "body8", "2025-05-15", "medium");
let todo9 = projectManager.createToDo("todo9", "body9", "2025-05-16", "low");

let project1 = projectManager.createProject("project1");
project1.addToProject(todo1);
project1.addToProject(todo2);
project1.addToProject(todo3);

let project2 = projectManager.createProject("project2");
project2.addToProject(todo4);
project2.addToProject(todo5);
project2.addToProject(todo6);

let project3 = projectManager.createProject("project3");
project3.addToProject(todo7);
project3.addToProject(todo8);
project3.addToProject(todo9);

projectContainer.addToContainer(project1);
projectContainer.addToContainer(project2);
projectContainer.addToContainer(project3);

const sideBarRoot = document.querySelector(".projects");
const projectArr = projectContainer.getProjects();
displayManager.attachToSidebar(sideBarRoot, projectArr)

const cardContainer = document.querySelector(".card-container");
displayManager.generateCards(cardContainer, projectArr);




