class TodoClass {
    constructor(title) {
        this.id = Date.now();
        this.title = title;
        this.createdAt = Date();
        this.isCompleted = false;
    }
}

export default TodoClass;