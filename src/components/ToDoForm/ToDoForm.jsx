import React, { useEffect, useState } from 'react'
import './todos-form.css'

function ToDoForm({ handleFilters, setToDoContent, toDoContent, themeIconChange}) {
    const [inputContent, setInputContent] = useState("");

      useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(toDoContent));
    }, [toDoContent]);

     function handleSubmit(event) {
        event.preventDefault();

        setToDoContent([...toDoContent, { toDoText: inputContent }]);
        handleFilters(0);
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
                        value={inputContent}
                        required
                        onChange={(event) => setInputContent(event.target.value)}
                    />
                </form>
  )
}

export default ToDoForm