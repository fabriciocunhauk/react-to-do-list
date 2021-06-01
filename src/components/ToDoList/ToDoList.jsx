import React, { useState } from 'react';
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
        handleCompletedToDos();
    }

    const handleDelete = (index) => {
        const notesArray = [...toDoContent];
        notesArray.splice(index, 1);
        setToDoContent(notesArray);
    }

    const handleCompleted = (index) => {
        const notesArray = [...toDoContent];
        notesArray.filter((note, ToDoindex) => {
            if (ToDoindex === index) {
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


    const handleCompletedToDos = (index) => {
        let notesArray = toDoContent;
        if (index === null) return notesArray;

        if (index === 1) {
            notesArray = notesArray.filter(note => {

                return note.active !== "completed-todo-active";
            });
        }

        if (index === 2) {
            notesArray = notesArray.filter(note => {
                return note.active === "completed-todo-active";
            });
        }

        console.log(notesArray);
        return setContent(notesArray);
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
                    {Content.map((todo, index) => {
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
                        {filterOptions.map((optionText, index) => {
                            return (
                                <ToDoFilter
                                    key={index}
                                    liText={optionText}
                                    handleCompletedToDos={() => handleCompletedToDos(index)}
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