import TodoList from "./TodoList/index.jsx";
import {useState} from "react";

function Todo() {

    return (
        <>
            <form>
                <input placeholder={"Add todo"}/>
                <button type={"submit"}>Add</button>
            </form>
            <TodoList/>
        </>
    );
}

export default Todo;