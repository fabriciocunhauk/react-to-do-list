import React, { useState } from 'react';

import './to-do-list.css';

function ToDoList() {
    const [inputContent, setInputContent] = useState("");
    const [toDoContent, setToDoContent] = useState([]);

    function handleChange(event) {
        setInputContent(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setToDoContent([...toDoContent, { toDoText: inputContent }]);
        setInputContent("");
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
                        return <li key={index}>{todo.toDoText}</li>
                    })}
                </ul>
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