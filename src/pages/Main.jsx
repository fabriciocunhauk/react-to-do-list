import React, { useState } from 'react';
import ToDoList from '../components/ToDoList/ToDoList';
import darkBackground from '../assets/images/bg-desktop-dark.jpg';
import lightBackground from '../assets/images/bg-desktop-light.jpg';
import moonIcon from '../assets/images/icon-moon.svg';
import sunIcon from '../assets/images/icon-sun.svg';

import './main.css';

function Main() {
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
        <div className={themeIconChange ? "main-container-light main-container" : "main-container"}>
            <img src={themeBg} alt="dark-background" />
            <div className="to-do-header">
                <h1>TODO</h1>
                <img src={themeIcon} alt="moon icon" onClick={handleTheme} />
            </div>
            <ToDoList
                themeIconChange={themeIconChange}
            />
        </div>
    );
}

export default Main;
