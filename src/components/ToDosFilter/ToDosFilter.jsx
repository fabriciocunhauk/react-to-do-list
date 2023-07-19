import React from "react";
import "./todos-filter.css";

function ToDosFilter({ themeIconChange, toDoContent, setToDoStatus, toDoStatus }) {
  return (
    <div className={themeIconChange ? "to-do-options-light" : ""}>
      <ul className=" to-do-options">
        <li>
          <p>{toDoContent.length} Items left</p>
        </li>
        <li
          className={toDoStatus === "all" ? "filter-active" : ""}
          onClick={() => setToDoStatus("all")}
        >
          All
        </li>
        <li
          className={toDoStatus === "active" ? "filter-active" : ""}
          onClick={() => setToDoStatus("active")}
        >
          Active
        </li>
        <li
          className={toDoStatus === "completed" ? "filter-active" : ""}
          onClick={() => setToDoStatus("completed")}
        >
          Completed
        </li>
        <li
          className={
            themeIconChange ? "clear-completed-light" : "clear-completed"
          }
          onClick={() => setToDoStatus("clear-completed")}
        >
          Clear Completed
        </li>
      </ul>
    </div>
  );
}

export default ToDosFilter;
