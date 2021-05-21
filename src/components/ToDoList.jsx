import React from 'react';

import './to-do-list.css';

function ToDoList() {
    return (
        <div className="to-do-container">
            <form>
                <label htmlFor="to-do">TODO</label>
                <input type="text" name="to-do" id="to-do" required />
            </form>

            <div className="to-dos">
                <ul className="to-dos-lists">
                    <li>To Do</li>
                    <li>To Do</li>
                    <li>To Do</li>
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