import React, { useEffect, useState } from "react";
import "./todos-form.css";

function ToDoForm({ toDoContent, themeIconChange, setToDoContent }) {
  const [inputContent, setInputContent] = useState("");

   useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(toDoContent));
    }, [toDoContent]);

     function handleSubmit(event) {
        event.preventDefault();

        setToDoContent([...toDoContent, { text: inputContent, status: "active" }]);
        setInputContent("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={
          themeIconChange ? "input-theme-light input-theme" : "input-theme"
        }
        type="text"
        name="to-do"
        id="to-do"
        placeholder="Add todo"
        value={inputContent}
        required
        onChange={(event) => setInputContent(event.target.value)}
      />
    </form>
  );
}

export default ToDoForm;
