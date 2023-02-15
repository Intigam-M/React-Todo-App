import './App.scss';
import logo from './assets/logo.png'
import AddTodo from './containers/AddTodo/AddTodo';
import TodoList from './containers/TodoList/TodoList';

function App() {
  return (
    <div>
        <div className="header"></div>
        <div className="container">
            <section className="logo-section">
                <img src={logo} alt="logo" />
            </section>
            <section className="add-todo-section">
                <AddTodo />
            </section>
            <section className="todo-list-section">
                <TodoList />
            </section>
        </div>
    </div>
  );
}

export default App;
