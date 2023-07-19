import React, { useState } from "react";
import darkBackground from "../assets/images/bg-desktop-dark.jpg";
import lightBackground from "../assets/images/bg-desktop-light.jpg";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

import "./main.css";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import ToDosList from "../components/ToDosList/ToDosList";
import ToDosFilter from "../components/ToDosFilter/ToDosFilter";

function Main() {
  const [toDoContent, setToDoContent] = useState(() => {
    const getToDos = localStorage.getItem("todo");
   return getToDos ? JSON.parse(getToDos) : [];
  });
  const [toDoStatus, setToDoStatus] = useState("all");
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

  return (
    <div
      className={
        themeIconChange
          ? "main-container-light main-container"
          : "main-container"
      }
    >
      <img src={themeBg} alt="dark-background" />
      <div className="to-do-header">
        <h1>TODO</h1>
        <img src={themeIcon} alt="moon icon" onClick={handleTheme} />
      </div>
      <div className="to-do-container">
        <ToDoForm
          themeIconChange={themeIconChange}
          setToDoContent={setToDoContent}
          toDoContent={toDoContent}
        />
        <div className={themeIconChange ? "to-dos-light to-dos" : "to-dos"}>
          <ToDosList
          setToDoContent={setToDoContent}
            toDoContent={toDoContent}
            toDoStatus={toDoStatus}
            setToDoStatus={setToDoStatus}
          />
          <ToDosFilter
            themeIconChange={themeIconChange}
            toDoContent={toDoContent}
            setToDoStatus={setToDoStatus}
            toDoStatus={toDoStatus}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
