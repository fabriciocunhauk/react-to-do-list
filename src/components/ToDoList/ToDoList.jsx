import React, { useState, useEffect } from 'react';
import ToDo from '../ToDo/ToDo';
import checkedIcon from '../../assets/images/icon-check.svg';

import './to-do-list.css';

const ToDoList = ({ themeIconChange }) => {
    const [inputContent, setInputContent] = useState("");
    const [toDoContent, setToDoContent] = useState([]);
    const [filteredContent, setFilteredContent] = useState([]);
    const [filterActiveClass, setFilterActiveClass] = useState(0);
    const [filterWhenChecked, setFilterWhenChecked] = useState(null);

    const handleChange = (event) => {
        setInputContent(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleFilters(0);
        setToDoContent([...toDoContent, { toDoText: inputContent }]);
        setInputContent("");
    }

    const handleDelete = (ToDoIndex, indexToDelete) => {
        const notesArray = toDoContent;

        if (filterWhenChecked === 1) {
            notesArray.splice(indexToDelete, 1);
            setFilteredContent([...notesArray]);
            return handleFilters(1);
        }

        if (filterWhenChecked === 2) {
            notesArray.splice(indexToDelete, 1);
            setFilteredContent([...notesArray]);
            return handleFilters(2);
        }

        notesArray.splice(ToDoIndex, 1);
        setFilteredContent([...notesArray]);
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

            if (filterWhenChecked === 1) {
                return handleFilters(1);
            }

            if (filterWhenChecked === 2) {
                return handleFilters(2);
            }

            return setFilteredContent(notesArray);
        });
    }

    const handleFilters = (ToDoFilterIndex) => {
        let notesArray = toDoContent;
        setFilterWhenChecked(ToDoFilterIndex);

        if (ToDoFilterIndex === 0) {
            setFilterActiveClass(ToDoFilterIndex);
            setFilteredContent(notesArray);
        }

        if (ToDoFilterIndex === 1) {
            setFilterActiveClass(ToDoFilterIndex);
            notesArray = notesArray.filter((note, noteIndex) => {
                if (note.active !== "completed-todo-active") {
                    note.indexToDelete = noteIndex;
                }
                return note.active !== "completed-todo-active";
            });

            setFilteredContent(notesArray);
        }

        if (ToDoFilterIndex === 2) {
            setFilterActiveClass(ToDoFilterIndex);
            notesArray = notesArray.filter((note, noteIndex) => {
                if (note.active === "completed-todo-active") {
                    note.indexToDelete = noteIndex;
                }
                return note.active === "completed-todo-active";
            });
            setFilteredContent(notesArray);
        }
    }

    useEffect(() => {
        setFilteredContent(toDoContent);
    }, [toDoContent]);

    const handleClearCompleted = () => {
        let notesArray = toDoContent;

        for (var i = 0; i < notesArray.length; i++) {
            if (notesArray[i].active === "completed-todo-active") {
                notesArray.splice(i, 1)
                handleFilters(0);
                i--;
            }
        }

        return setFilteredContent([...notesArray]);
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
                                handleDelete={() => handleDelete(ToDoIndex, todo.indexToDelete)}
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