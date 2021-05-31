import React from 'react';
import './to-do-filter.css';

const ToDoFilter = ({ handleCompletedToDos, liText }) => {
    return (
        <li onClick={handleCompletedToDos}>{liText}</li>
    )
}

export default ToDoFilter;
