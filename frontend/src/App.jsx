import './App.scss';
import logo from './assets/logo.png'
import AddTodo from './containers/AddTodo/AddTodo';
import TodoList from './containers/TodoList/TodoList';
import React from 'react';
import axios from 'axios'
import emptyImage from './assets/empty.png'


export const todoContext = React.createContext(null)

function App() {

    const [todos, setTodos] = React.useState([])

    React.useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/todo-list/'
        axios.get(url)
        .then(response => {
            setTodos(response.data)
        })
     
    }, [])

const addTodoHandler = React.useCallback((content)=>{
    const url = 'http://127.0.0.1:8000/api/todo-list/'
    axios.post(url, {
        content: content
    })
    .then((response=>{
            setTodos((prevState)=>[...prevState, response.data])
    }))
})



  return (
    <div>
        <div className="header"></div>
        <todoContext.Provider value={{todos: todos, setTodos: setTodos}}>
            <div className="container">
                <section className="logo-section">
                    <img src={logo} alt="logo" />
                </section>
                <section className="add-todo-section">
                    <AddTodo onAddTodo={addTodoHandler}/>
                </section>
                {
                    todos.length
                    ?
                    <section className="todo-list-section">
                        <TodoList />
                    </section>
                    :
                    <section className='completed-all'>
                        <img src={emptyImage} alt="empty" />
                        <p>No Task</p>
                    </section>
                }
            </div>
        </todoContext.Provider>
    </div>
  );
}

export default App;
