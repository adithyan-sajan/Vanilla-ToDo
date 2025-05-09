export function attachToSidebar(sideBarRoot, projectArr) {
    projectArr.forEach((project) => {
        let div = document.createElement("div");
        div.classList.add("left-side-bar-item");
        div.dataset.id = project.name;
        sideBarRoot.appendChild(div);
        let h3 = document.createElement("h3");
        div.appendChild(h3)
        h3.innerHTML = project.name;
        for (let item of project.todos) {
            let h4 = document.createElement("h4");
            h4.innerHTML = item.name;
            div.appendChild(h4)
        }
        div.addEventListener("click", ()=>{
            let cardContainer = document.querySelector(".card-container");
            clearCardContainer(cardContainer);
            let array = findFromProject(projectArr,div.dataset.id);
            console.log(array.todos);
            generateCardFromProject(cardContainer,array);
            currentProject = div.dataset.id;
        })
    })
}
export function generateCards(cardContainer, projectArr) {
    projectArr.forEach((project) => {
        generateCardFromProject(cardContainer,project);
    })
}
export function clearCardContainer(div) {
    div.innerHTML = "";
}
export function generateCardFromProject(cardContainer, project) {
    for (let item of project.todos) {
        let div = document.createElement("div");
        div.classList.add("card");
        cardContainer.appendChild(div);

        let h3 = document.createElement("h3");
        let date = document.createElement("p");
        let body = document.createElement("p");
        let btn = document.createElement("button");
        h3.textContent = item.name;
        date.textContent = item.date;
        body.textContent = item.body;
        body.classList.add("body-text");
        btn.textContent = "mark as done";

        div.appendChild(h3);
        div.appendChild(date);
        div.appendChild(body);
        div.appendChild(btn);
    }
}
export let currentProject = "project1"

export function findFromProject(projectArr, id) {
    return projectArr.find((project) => project.name === id);
}

const modal = document.querySelector(".modal-container");
export function showModal() {
    modal.classList.add("active-modal");
}

const newTodoButton = document.querySelector("#new-todo");
newTodoButton.addEventListener("click",showModal);

const cancelButton = document.querySelector("#cancel-button");
cancelButton.addEventListener("click",function(){
    modal.classList.remove("active-modal");
});