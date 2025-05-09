export function attachToSidebar(sideBarRoot, projectArr) {
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
export function generateCards(cardContainer, projectArr) {
    projectArr.forEach((project) => {
        for (let item of project.todos) {
            let div = document.createElement("div");
            div.classList.add("card");
            cardContainer.appendChild(div);

            let h3 = document.createElement("h3");
            let date = document.createElement("p");
            let body = document.createElement("p");
            let btn = document.createElement("button");
            console.log(item);
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
    })
}