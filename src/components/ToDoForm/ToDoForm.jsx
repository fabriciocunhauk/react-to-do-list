import React, { useState } from 'react'
import './todos-form.css'

function ToDoForm({ toDoContent, themeIconChange, setToDoContent }) {
    const [inputContent, setInputContent] = useState("");

     function handleSubmit(event) {
        event.preventDefault();
         localStorage.setItem('todo', JSON.stringify([...toDoContent, { text: inputContent, active: "active" }]));

         const getToDos = localStorage.getItem('todo');
        const toDos = getToDos ? JSON.parse(getToDos) : [];

        setToDoContent(toDos)
        setInputContent("");
    }

  return (
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
                        placeholder="Create todo"
                        value={inputContent}
                        required
                        onChange={(event) => setInputContent(event.target.value)}
                    />
                </form>
  )
}

export default ToDoForm