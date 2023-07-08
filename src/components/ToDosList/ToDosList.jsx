import React from 'react';
import closeSvg from '../../assets/images/icon-cross.svg';

import './todos-list.css';

const ToDosList = ({ text, handleDelete, handleCompleted, isActive, isImageActive }) => {
    return (
        <li className="todo">
            <span>
                <div className={`completed-todo ${isActive}`} onClick={handleCompleted}>
                    <img src={isImageActive} alt="" />
                </div>
            </span>
            <span className="to-do-text">
                {text.toUpperCase()}
            </span>
            <span>
                <img className="delete-todo" onClick={handleDelete} src={closeSvg} alt="delete todo" />
            </span>
        </li>
    );
}

export default ToDosList;