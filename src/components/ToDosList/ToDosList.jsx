import React, { useEffect, useState } from 'react';
import closeSvg from '../../assets/images/icon-cross.svg';
import checkedIcon from '../../assets/images/icon-check.svg';

import './todos-list.css';

const ToDosList = ({  toDoContent, toDoType }) => {
    const [toDosList, setToDosList] = useState(toDoContent)

       function handleDelete(todoIndex) {
           toDoContent.forEach((todo, index) => {
            if(todoIndex === index ) {
                toDoContent.splice(todoIndex, 1);
                localStorage.setItem('todo', JSON.stringify([...toDoContent]));
            }
            window.location.reload();
        }) 
    }

    function handleCompleted(todoIndex) {
        toDoContent.forEach((todo, index) => {
            if(todoIndex === index ) {
                
                if (!todo.completed) {
                    toDoContent.splice(todoIndex, 1);
                    localStorage.setItem('todo', JSON.stringify([...toDoContent, {text: todo.text, completed: "completed" }]));
                } else {
                    toDoContent.splice(todoIndex, 1);
                    localStorage.setItem('todo', JSON.stringify([...toDoContent, {text: todo.text, active: "active"}]));
                }
            }
            window.location.reload();
        }) 
    }

    useEffect(() => {
       if (toDoType === "all") {
            setToDosList(toDoContent);
        }
        if (toDoType === "active") {
            const activeTodo = toDoContent.filter(todo => todo.active)
            setToDosList(activeTodo)
        }
        if (toDoType === "completed") {
            const completedTodo = toDoContent.filter(todo => todo.completed)
            setToDosList(completedTodo)
        }
        // if (toDoType === "clear") {
        //     const completedTodo = toDoContent.forEach((todo, index) => {
        //         if (todo.completed) {
        //             handleDelete(index)
        //         } 
        //     })
        //     setToDosList(completedTodo)
        // }
    }, [toDoType, toDoContent, handleDelete])
    
    return (
        <ul className="to-dos-lists">
            {toDosList.map((todo, todoIndex) => {
                return (
                    <li className="todo" key={todoIndex}>
                        <span>
                            <div className={todo.completed ? "completed-todo completed-todo-active" : "completed-todo"} onClick={() => handleCompleted(todoIndex)}>
                              {todo.completed === "completed" &&  <img src={checkedIcon} alt="checked" />}
                            </div>
                        </span>
                        <span className="to-do-text">
                            {todo.text.toUpperCase()}
                        </span>
                        <span onClick={() => handleDelete(todoIndex)}>
                            <img className="delete-todo" src={closeSvg} alt="delete todo" />
                        </span>
                    </li>
                );
            })}
        </ul>
    );
}

export default ToDosList;