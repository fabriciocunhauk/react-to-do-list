import React from 'react';

import './to-do.css';

const ToDo = ({ toDoText }) => {
    return (
        <li>{toDoText}</li>
    );
}

export default ToDo;