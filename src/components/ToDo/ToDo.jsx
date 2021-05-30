import React from 'react';
import closeSvg from '../../assets/images/icon-cross.svg';

import './to-do.css';

const ToDo = ({ toDoText, handleDelete, handleCompleted, toDoActive, toDoActiveImage }) => {
    return (
        <li className="todo">
            <span>
                <div className={`completed-todo ${toDoActive}`} onClick={handleCompleted}>
                    <img src={toDoActiveImage} alt="" />
                </div>
            </span>
            <span className="to-do-text">
                {toDoText.toUpperCase()}
            </span>
            <span>
                <img className="delete-todo" onClick={handleDelete} src={closeSvg} alt="delete todo" />
            </span>
        </li>
    );
}

export default ToDo;