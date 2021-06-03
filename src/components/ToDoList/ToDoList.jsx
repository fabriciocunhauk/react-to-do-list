import React, { useState, useEffect } from 'react';
import ToDo from '../ToDo/ToDo';
import checkedIcon from '../../assets/images/icon-check.svg';

import './to-do-list.css';
import ToDoFilter from '../ToDoFilter/ToDoFilter';

const ToDoList = () => {
    const filterOptions = ["All", "Active", "Completed"];
    const [inputContent, setInputContent] = useState("");
    const [toDoContent, setToDoContent] = useState([]);
    const [Content, setContent] = useState([]);

    const handleChange = (event) => {
        setInputContent(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setToDoContent([...toDoContent, { toDoText: inputContent }]);
        setInputContent("");
    }

    const handleDelete = (ToDoIndex) => {
        const notesArray = [...toDoContent];
        notesArray.splice(ToDoIndex, 1);
        setToDoContent(notesArray);
    }

    const handleCompleted = (ToDoIndex) => {
        let notesArray = [...toDoContent];
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
        let notesArray = [...toDoContent];
        if (ToDoFilterIndex === null) return notesArray;

        if (ToDoFilterIndex === 1) {
            notesArray = notesArray.filter(note => {
                return note.active !== "completed-todo-active";
            });
        }

        if (ToDoFilterIndex === 2) {
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
                        {filterOptions.map((optionText, ToDoFilterIndex) => {
                            return (
                                <ToDoFilter
                                    key={ToDoFilterIndex}
                                    liText={optionText}
                                    handleCompletedToDos={() => handleCompletedToDos(ToDoFilterIndex)}
                                />
                            )
                        })}
                    </ul>
                    <p className="clear-completed">Clear Completed</p>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;