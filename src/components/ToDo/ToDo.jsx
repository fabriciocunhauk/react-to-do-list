import React from 'react';

import './to-do.css';

const ToDo = ({ toDoText }) => {
    return (
        <li className="todo">
            <span>
                <div className="completed-todo"></div>
            </span>
            <span className="to-do-text">
                {toDoText.toUpperCase()}
            </span>
            <span>
                <div className="delete-todo">X</div>
            </span>
        </li>
    );
}

export default ToDo;