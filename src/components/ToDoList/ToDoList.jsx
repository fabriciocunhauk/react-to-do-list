import React, { useState, useEffect } from 'react';
import ToDo from '../ToDo/ToDo';
import checkedIcon from '../../assets/images/icon-check.svg';

import './to-do-list.css';

const ToDoList = () => {
    const [inputContent, setInputContent] = useState("");
    const [toDoContent, setToDoContent] = useState([]);
    const [Content, setContent] = useState([]);
    const [filterActiveClass, setFilterActiveClass] = useState(0);

    const handleChange = (event) => {
        setInputContent(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setToDoContent([...toDoContent, { toDoText: inputContent }]);
        setInputContent("");
    }

    const handleDelete = (ToDoIndex) => {
        const notesArray = [...Content];
        notesArray.splice(ToDoIndex, 1);
        setToDoContent(notesArray);
    }

    const handleCompleted = (ToDoIndex) => {
        let notesArray = [...Content];
        notesArray = notesArray.filter((note, noteIndex) => {
            if (noteIndex === ToDoIndex) {
                if (note.active === "completed-todo-active") {
                    note.active = "";
                    note.image = "";
                } else {
                    note.active = "completed-todo-active";
                    note.image = checkedIcon;
                }
            }
            return setContent(notesArray);
        });
    }

    const handleCompletedToDos = (ToDoFilterIndex) => {
        let notesArray = toDoContent;

        if (ToDoFilterIndex === null) return notesArray;

        if (ToDoFilterIndex === 0) setFilterActiveClass(ToDoFilterIndex);

        if (ToDoFilterIndex === 1) {
            setFilterActiveClass(ToDoFilterIndex);
            notesArray = notesArray.filter(note => {
                return note.active !== "completed-todo-active";
            });
        }

        if (ToDoFilterIndex === 2) {
            setFilterActiveClass(ToDoFilterIndex);
            notesArray = notesArray.filter(note => {
                return note.active === "completed-todo-active";
            });
        }

        console.log(notesArray);
        return setContent(notesArray);
    }

    useEffect(() => {
        handleCompletedToDos();
    }, [toDoContent]);

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
                    {Content.map((todo, ToDoIndex) => {
                        return (
                            <ToDo
                                key={ToDoIndex}
                                toDoText={todo.toDoText}
                                toDoActive={todo.active}
                                toDoActiveImage={todo.image}
                                handleDelete={() => handleDelete(ToDoIndex)}
                                handleCompleted={() => handleCompleted(ToDoIndex)}
                            />
                        );
                    })}
                </ul>
                <div className="to-do-options">
                    <p>{toDoContent.length} Items left</p>
                    <ul>
                        <li
                            className={filterActiveClass === 0 ? "filter-active" : ""}
                            onClick={() => handleCompletedToDos(0)}>
                            All
                        </li>
                        <li
                            className={filterActiveClass === 1 ? "filter-active" : ""}
                            onClick={() => handleCompletedToDos(1)}>
                            Active
                        </li>
                        <li
                            className={filterActiveClass === 2 ? "filter-active" : ""}
                            onClick={() => handleCompletedToDos(2)}>
                            Completed
                        </li>
                    </ul>
                    <p className="clear-completed">Clear Completed</p>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;