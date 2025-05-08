import './styles.css'
import *  as projectManager from './projectManager'

// const projectContainer = (function () {
//     const projects = [];
//     function addToContainer(object) {
//         projects.push(object);
//     };
//     function getProjects() {
//         return projects;
//     }
//     return {
//         getProjects,
//         addToContainer
//     }
// })();

// function createProject(name) {
//     return {
//         name,
//         todos: [],
//         addToProject: function (object) {
//             this.todos.push(object)
//         },
//         getToDos: function () {
//             return this.todos
//         }
//     }
// }

// function projectManager.createToDo(name, body, date, priority) {
//     return {
//         name,
//         body,
//         date,
//         priority
//     }
// }

let projectContainer = projectManager.createProjectContainer()


function attachToSidebar() {
    const sideBarRoot = document.querySelector(".projects");
    const projectArr = projectContainer.getProjects();
    projectArr.forEach((project) => {
        let div = document.createElement("div");
        sideBarRoot.appendChild(div);
        let h3 = document.createElement("h3");
        div.appendChild(h3)
        h3.innerHTML = project.name;
        for (let item of project.todos) {
            let h4 = document.createElement("h4");
            h4.innerHTML = item.name;
            div.appendChild(h4)
        }
    })
}



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

attachToSidebar();

console.log(todo1);
console.log(projectContainer.getProjects());

