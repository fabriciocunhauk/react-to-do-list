import React from 'react';

import './to-do.css';

const ToDo = ({ toDoText, handleDelete }) => {
    return (
        <li className="todo">
            <span>
                <div className="completed-todo"></div>
            </span>
            <span className="to-do-text">
                {toDoText.toUpperCase()}
            </span>
            <span>
                <div className="delete-todo" onClick={handleDelete}>X</div>
            </span>
        </li>
    );
}

export default ToDo;