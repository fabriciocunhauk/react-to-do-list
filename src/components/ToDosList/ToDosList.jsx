import React, { useEffect, useState } from "react";
import closeSvg from "../../assets/images/icon-cross.svg";
import checkedIcon from "../../assets/images/icon-check.svg";

import "./todos-list.css";

function ToDosListFilteredContent({ setToDoContent, toDoContent, setToDoStatus, toDoStatus }) {
  const [toDosListFilteredContent, setToDosListFilteredContent] = useState(toDoContent);

  function handleDelete(todoIndex) {
    toDoContent.forEach((_todo, index) => {
      if (todoIndex === index) {
        toDoContent.splice(todoIndex, 1);
       return setToDoContent([...toDoContent]);
      }
    });
  }

  function markToDoAsComplete(todoIndex) {
    toDoContent.forEach((todo, index) => {
      if (todoIndex === index) {
        if (todo.status !== "completed") {
          toDoContent.splice(todoIndex, 1);
          return setToDoContent([...toDoContent, { text: todo.text, status: "completed" }]);
        } else {
          toDoContent.splice(todoIndex, 1);
          return setToDoContent([...toDoContent, { text: todo.text, status: "active" }]);
        }
      }
    });
  }

  useEffect(() => {
    if (toDoStatus === "all") {
      setToDosListFilteredContent(toDoContent);
    }
    if (toDoStatus === "active") {
      const activeTodo = toDoContent.filter((todo) => todo.status === "active");
      setToDosListFilteredContent(activeTodo);
    }
    if (toDoStatus === "completed") {
      const completedTodo = toDoContent.filter((todo) => todo.status === "completed");
      setToDosListFilteredContent(completedTodo);
    }
    if (toDoStatus === "clear-completed") {
      const getActiveToDos = toDoContent.filter((todo) => todo.status === "active");
      setToDoContent([...getActiveToDos]);
      setToDoStatus("all");
    }
  }, [setToDoContent, setToDoStatus, toDoContent, toDoStatus]);

  return (
    <ul className="to-dos-lists">
      {toDosListFilteredContent.map((todo, todoIndex) => {
        return (
          <li className="todo" key={todoIndex}>
            <span>
              <div
                className={
                  todo.status === "completed"
                    ? "completed-todo completed-todo-active"
                    : "completed-todo"
                }
                onClick={() => markToDoAsComplete(todoIndex)}
              >
                {todo.status === "completed" && (
                  <img src={checkedIcon} alt="checked" />
                )}
              </div>
            </span>
            <span className="to-do-text">{todo.text.toUpperCase()}</span>
            <span onClick={() => handleDelete(todoIndex)}>
              <img className="delete-todo" src={closeSvg} alt="delete todo" />
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default ToDosListFilteredContent;
