class TodoType {
    id: string
    todo: string 

    constructor(todo: string) {
        this.todo = todo
        this.id = Math.random().toString(16)
    }
}

export default TodoType;