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
    }, [todos])


    const completeAllHandler=React.useCallback(()=>{
        const url = "http://127.0.0.1:8000/api/complete-all-todo/";
        axios.post(url)
        .then(()=>{
            setTodos(prevState => prevState.map(todo => ({...todo, completed:true})))
        })
    }, [])

    const uncompleteAllHandler=React.useCallback(()=>{
        const url = "http://127.0.0.1:8000/api/uncomplete-all-todo/";
        axios.post(url)
        .then(()=>{
            setTodos(prevState => prevState.map(todo => ({...todo, completed:false})))
        })
    }, [])

    const deleteAllHandler=React.useCallback(()=>{
        const url = "http://127.0.0.1:8000/api/delete-all-todo/";
        axios.post(url)
        .then(()=>{
            setTodos([])
        })
    }, [])

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
                <button onClick={completeAllHandler}>Complete all tasks</button>
                <button onClick={uncompleteAllHandler}>Un complete all tasks</button>
                <button onClick={deleteAllHandler}>Delete all tasks</button>
            </div>
       </>
    )
}


export default TodoList