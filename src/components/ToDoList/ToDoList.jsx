import React, { useState } from 'react';
import ToDo from '../ToDo/ToDo';
import checkedIcon from '../../assets/images/icon-check.svg';

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

    const handleDelete = (index) => {
        const notesArray = [...toDoContent];
        notesArray.splice(index, 1);
        setToDoContent(notesArray);
    }

    const handleCompleted = (index) => {
        const notesArray = [...toDoContent];
        notesArray.filter((note, ind) => {
            if (ind === index) {
                if (note.active === "completed-todo-active") {
                    note.active = "";
                    note.image = "";
                } else {
                    note.active = "completed-todo-active";
                    note.image = checkedIcon;
                }
            }
            return setToDoContent(notesArray);
        });
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
                                toDoActive={todo.active}
                                toDoActiveImage={todo.image}
                                handleDelete={() => handleDelete(index)}
                                handleCompleted={() => handleCompleted(index)}
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