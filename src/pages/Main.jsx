import React, { useState, useEffect } from 'react';
import checkedIcon from '../assets/images/icon-check.svg';
import darkBackground from '../assets/images/bg-desktop-dark.jpg';
import lightBackground from '../assets/images/bg-desktop-light.jpg';
import moonIcon from '../assets/images/icon-moon.svg';
import sunIcon from '../assets/images/icon-sun.svg';

import './main.css';
import ToDoForm from '../components/ToDoForm/ToDoForm';
import ToDosList from '../components/ToDosList/ToDosList';
import ToDosFilter from '../components/ToDosFilter/ToDosFilter';

function Main() {
    const [filteredContent, setFilteredContent] = useState([]);
    const [toDoContent, setToDoContent] = useState(() => {
        const todo = localStorage.getItem('todo');
        return todo ? JSON.parse(todo) : [];
    });

    const [filterActiveClass, setFilterActiveClass] = useState(0);
    const [filterWhenChecked, setFilterWhenChecked] = useState(null);

    const [themeIconChange, setThemeIconChange] = useState(false);
    const [themeIcon, setThemeIcon] = useState(moonIcon);
    const [themeBg, setThemeBg] = useState(darkBackground);

    function handleTheme() {
        if (themeIconChange) {
            setThemeIcon(moonIcon);
            setThemeBg(darkBackground);
            setThemeIconChange(false);
        } else {
            setThemeIcon(sunIcon);
            setThemeBg(lightBackground);
            setThemeIconChange(true);
        }
    }

    function handleDelete(ToDoIndex) {
        const notesArray = toDoContent;

        notesArray.splice(ToDoIndex, 1);
        setToDoContent([...notesArray]);
    }

    function handleCompleted(ToDoIndex) {
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

            return setToDoContent(notesArray);
        });
    }

    function handleFilters(ToDoFilterIndex) {
        let notesArray = toDoContent;
        setFilterWhenChecked(ToDoFilterIndex);

        if (ToDoFilterIndex === 0) {
            setFilterActiveClass(ToDoFilterIndex);
        }

        if (ToDoFilterIndex === 1) {
            setFilterActiveClass(ToDoFilterIndex);
            notesArray = notesArray.filter((note) => {
                return note.active !== "completed-todo-active";
            });

        }

        if (ToDoFilterIndex === 2) {
            setFilterActiveClass(ToDoFilterIndex);
            notesArray = notesArray.filter((note) => {
                return note.active === "completed-todo-active";
            });
        }

        return setFilteredContent(notesArray);
    }

    useEffect(() => {
        setFilteredContent(toDoContent)
    }, [toDoContent]);

    function handleClearCompleted() {
        let notesArray = toDoContent;

        for (var i = 0; i < notesArray.length; i++) {
            if (notesArray[i].active === "completed-todo-active") {
                notesArray.splice(i, 1)
                handleFilters(0);
                i--;
            }
        }

        return setToDoContent([...notesArray]);
    }

    return (
        <div className={themeIconChange ? "main-container-light main-container" : "main-container"}>
            <img src={themeBg} alt="dark-background" />
            <div className="to-do-header">
                <h1>TODO</h1>
                <img src={themeIcon} alt="moon icon" onClick={handleTheme} />
            </div>
            <div className="to-do-container">
               <ToDoForm
                    themeIconChange={themeIconChange} 
                    handleFilters={handleFilters}
                    setToDoContent={setToDoContent}
                    toDoContent={toDoContent}
               />
                <div className={
                    themeIconChange
                        ? "to-dos-light to-dos"
                        : "to-dos"}
                >
                    <ul className="to-dos-lists">
                        {filteredContent.map((todo, ToDoIndex) => {
                            return (
                                <ToDosList
                                    key={ToDoIndex}
                                    text={todo.toDoText}
                                    isActive={todo.active}
                                    isImageActive={todo.image}
                                    handleDelete={() => handleDelete(ToDoIndex, todo.indexToDelete)}
                                    handleCompleted={() => handleCompleted(ToDoIndex)}
                                />
                            );
                        })}
                    </ul>
                    <ToDosFilter 
                        themeIconChange={themeIconChange}
                        toDoContent={toDoContent}
                        filterActiveClass={filterActiveClass}
                        handleFilters={handleFilters}
                        handleClearCompleted={handleClearCompleted}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;
