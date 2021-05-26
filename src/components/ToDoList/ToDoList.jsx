import React, { useState } from 'react';
import ToDo from '../ToDo/ToDo';

import './to-do-list.css';

const ToDoList = () => {
    const [inputContent, setInputContent] = useState("");
    const [toDoContent, setToDoContent] = useState([]);

    const handleChange = (event) => {
        setInputContent(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setToDoContent([...toDoContent, { toDoText: inputContent }]);
        setInputContent("");
    }

    const handleDelete = (ind) => {
        const notesArray = [...toDoContent];
        notesArray.splice(ind, 1);
        setToDoContent(notesArray);
    }

    return (
        <div className="to-do-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="to-do">
                    TODO
                    <input
                        type="text"
                        name="to-do"
                        id="to-do"
                        value={inputContent}
                        required
                        onChange={handleChange}
                    />
                </label>
            </form>

            <div className="to-dos">
                <ul className="to-dos-lists">
                    {toDoContent.map((todo, index) => {
                        return (
                            <ToDo
                                key={index}
                                toDoText={todo.toDoText}
                                handleDelete={() => handleDelete(index)}
                            />
                        );
                    })}
                </ul>
                <div className="to-do-options">
                    <p>{toDoContent.length} Items left</p>
                    <ul>
                        <li>All</li>
                        <li>Active</li>
                        <li>Completed</li>
                    </ul>
                    <p className="clear-completed">Clear Completed</p>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;