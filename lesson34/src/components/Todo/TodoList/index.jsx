import TodoItem from "./TodoItem/index.jsx";
import {useState} from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);

    return (
        <>
            {todos &&
                todos.map((todo, index) => {
                    return <TodoItem key={index} todo={todo} index={index}/>;
                })}
        </>
    );
}

export default TodoList;
