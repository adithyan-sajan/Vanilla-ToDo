export function createProjectContainer() {
    const projects = [];
    function addToContainer(object) {
        projects.push(object);
    };
    function getProjects() {
        return projects;
    }
    return {
        getProjects,
        addToContainer
    }
}

export function createProject(name) {
    return {
        name,
        todos: [],
        addToProject: function (object) {
            this.todos.push(object)
        },
        getToDos: function () {
            return this.todos
        }
    }
}
export function createToDo(name, body, date, priority) {
    return {
        name,
        body,
        date,
        priority
    }
}