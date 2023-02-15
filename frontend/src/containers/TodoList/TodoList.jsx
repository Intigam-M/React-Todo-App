import React from "react";
import Todo from "../../components/Todo/Todo";
import TodoListTitle from "../../components/TodoList/TodoListTitle";
import './TodoList.scss'



function TodoList () {
    return(
       <>
            <TodoListTitle />
            <div>
                <Todo />
            </div>
       </>
    )
}


export default TodoList