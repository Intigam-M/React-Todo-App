import React from "react";
import { todoContext } from "../../App";
import Todo from "../../components/Todo/Todo";
import TodoListTitle from "../../components/TodoList/TodoListTitle";
import './TodoList.scss'
import axios from "axios";



function TodoList () {
    const {todos, setTodos} = React.useContext(todoContext) 
    const checkHandler = React.useCallback((id)=>{
        const todoIndex = todos.findIndex(todo=> todo.id === id)
        const todo = todos[todoIndex]
        const url = "http://127.0.0.1:8000/api/todo-list/"+id;
        axios.put(url, {
            content: todo.content,
            completed: !todo.completed
        }).then(()=>{
            setTodos((prev)=>{
                const newState = [...prev]
                const newTodo = {...todo, completed: !todo.completed}
                newState[todoIndex] = newTodo
                return newState
            })
        })

    }, [todos])


    const deleteHandler = React.useCallback(async(id)=>{
        const todoIndex = todos.findIndex(todo=> todo.id === id)
        const url = "http://127.0.0.1:8000/api/todo-list/"+id;
        await axios.delete(url)
        setTodos((prevState)=>{
            const newState = [... prevState]
            newState.splice(todoIndex, 1)
            return newState
        })
    }, todos)


    

    return(
       <>
            <TodoListTitle />
            <div>
                {
                    todos.map((todo)=>(
                        <Todo key={todo.id} {...todo} 
                        onChecked={()=>checkHandler(todo.id)}
                        onDelete ={()=>deleteHandler(todo.id)}
                        />
                    ))
                }
            </div>
            <div>
                <button>Complete all tasks</button>
                <button>Un complete all tasks</button>
                <button>Delete all tasks</button>
            </div>
       </>
    )
}


export default TodoList