import React, { useState } from 'react';

import './to-do-list.css';

function ToDoList() {
    const [toDoContent, setToDoContent] = useState('');

    // function handleChange(event) {
    //     setToDoContent(event);
    // }

    function handleSubmit(event) {
        event.preventDefault();

        const toDos = document.querySelector('.to-dos-lists');
        toDos.innerHTML = `<li>${toDoContent}</li>`;

        const toDoInput = document.querySelector('#to-do');
        toDoInput.value = "";
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
                        required
                        onChange={(e) => setToDoContent(e.target.value)}
                    />
                </label>
            </form>

            <div className="to-dos">
                <ul className="to-dos-lists"></ul>
                <div className="to-do-options">
                    <p>0 items left</p>
                    <ul>
                        <li>All</li>
                        <li>Active</li>
                        <li>Completed</li>
                    </ul>
                    <p>Clear Completed</p>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;