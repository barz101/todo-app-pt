import React, { useEffect, useState } from 'react';
import { TodoList } from './TodoList';
import todoService from '../services/todoService';
import { AddTodoForm } from './AddTodoForm'
import searchIcon from '../styles/assets/svgs/search.svg';
import sortingIcon from '../styles/assets/svgs/sorting.svg'

function TodoPage() {
    const [todos, setTodos] = useState<any>();
    const [isModalOpen, setModal] = useState(false);
   
    useEffect(() => {
        todoService.query().then((todos) => {
            setTodos(todos)
        })
    })

    const addTodo: AddTodo = (newTodo: Todo) => {
        todoService.add(newTodo).then((todo) => {
        })
        setTodos([...todos, newTodo]);
    }

    const deleteTodo: DeleteTodo = (todoId: string) => {
        todoService.deleteTodo(todoId).then((todoId) => {
            todos.splice(todos.indexOf(todoId), 1)
            setTodos([todos]);
        })
    }

    const closeModal: CloseModal = () => {
        setModal(!isModalOpen);
    }
    return (
        <div className="todo-container">
            <h1 className="todo-title">ניהול משימות</h1>
            <div className="search flex align-center space-between">
                <span>חיפוש משימה...</span>
                <img src={searchIcon}></img>
            </div>
            {isModalOpen && <AddTodoForm addTodo={addTodo} closeModal={closeModal} />}
            <div className="flex space-between align-center">
                {todos && <h2>רשימת הלקוחות שלך: ({todos.length})</h2>}
                <button className="new-task" onClick={() => setModal(!isModalOpen)}>משימה חדשה</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th className="check-box"><input className="check-box"></input></th>
                        <th>שם שם הלקוח <img src={sortingIcon}></img></th>
                        <th>טלפון</th>
                        <th>מייל</th>
                        <th>תאריך יצירת המשימה <img src={sortingIcon}></img></th>
                        <th>פעולות</th>
                    </tr>
                </thead>
                <tbody>
                    {todos && <TodoList todos={todos} deleteTodo={deleteTodo} />}
                </tbody>
            </table>
            <div className=" flex coulnm space-between pagination">
                <div className="results">
                    <span>מראה 1-20 מתוך 140 תוצאות</span>
                    <span className="result-input"><img src={sortingIcon}></img>20</span>
                    <span>תוצאות לעמוד</span>
                </div>
                <div>
                    <button>ראשון</button>
                    <button>הקודם</button>
                    <button>4</button>
                    <button>3</button>
                    <button>2</button>
                    <button>1</button>
                    <button>אחרון</button>
                </div>
            </div>
        </div>
    );
}

export default TodoPage;