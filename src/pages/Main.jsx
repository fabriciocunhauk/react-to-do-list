import React from 'react';
import ToDoList from '../components/ToDoList/ToDoList';
import darkBackground from '../assets/images/bg-desktop-dark.jpg';
import './main.css';

function Main() {
    return (
        <div className="main-container">
            <img src={darkBackground} alt="dark-background" />
            <ToDoList />
        </div>
    );
}

export default Main;
