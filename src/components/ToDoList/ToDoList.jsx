import React, { useState, useEffect } from 'react';
import ToDo from '../ToDo/ToDo';
import checkedIcon from '../../assets/images/icon-check.svg';

import './to-do-list.css';

const ToDoList = ({ themeIconChange }) => {
    const [inputContent, setInputContent] = useState("");
    const [toDoContent, setToDoContent] = useState([]);
    const [filteredContent, setFilteredContent] = useState([]);
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
        const notesArray = [...filteredContent];
        notesArray.splice(ToDoIndex, 1);
        setToDoContent(notesArray);
    }

    const handleCompleted = (ToDoIndex) => {
        let notesArray = [...filteredContent];
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
            return setFilteredContent(notesArray);
        });
    }

    const handleFilters = (ToDoFilterIndex) => {
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

        return setFilteredContent(notesArray);
    }

    useEffect(() => {
        setFilteredContent(toDoContent);
    }, [toDoContent]);

    const handleClearCompleted = () => {
        let notesArray = [...filteredContent];
        notesArray.filter((note, toDoIndex) => {
            if (note.active === "completed-todo-active") {
                notesArray.splice(toDoIndex, 1)
            }
            return setToDoContent(notesArray);
        })
    }

    return (
        <div className="to-do-container">

            <form onSubmit={handleSubmit}>
                <input
                    className={
                        themeIconChange
                            ? "input-theme-light input-theme"
                            : "input-theme"
                    }
                    type="text"
                    name="to-do"
                    id="to-do"
                    value={inputContent}
                    required
                    onChange={handleChange}
                />
            </form>

            <div className={
                themeIconChange
                    ? "to-dos-light to-dos"
                    : "to-dos"}
            >
                <ul className="to-dos-lists">
                    {filteredContent.map((todo, ToDoIndex) => {
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
                <div className={
                    themeIconChange
                        ? "to-do-options-light to-do-options"
                        : "to-do-options"}
                >
                    <p>{toDoContent.length} Items left</p>
                    <ul>
                        <li
                            className={filterActiveClass === 0 ? "filter-active" : ""}
                            onClick={() => handleFilters(0)}>
                            All
                        </li>
                        <li
                            className={filterActiveClass === 1 ? "filter-active" : ""}
                            onClick={() => handleFilters(1)}>
                            Active
                        </li>
                        <li
                            className={filterActiveClass === 2 ? "filter-active" : ""}
                            onClick={() => handleFilters(2)}>
                            Completed
                        </li>
                    </ul>
                    <p className={
                        themeIconChange
                            ? "clear-completed-light"
                            : "clear-completed"
                    }
                        onClick={handleClearCompleted}
                    >
                        Clear Completed
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;