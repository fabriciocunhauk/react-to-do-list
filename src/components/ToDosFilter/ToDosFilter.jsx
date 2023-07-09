import React from 'react'
import './todos-filter.css';

function ToDosFilter({themeIconChange, toDoContent, setToDoType, toDoType}) {
  return (
    <div className={
                        themeIconChange ? "to-do-options-light" : ""}
                    >
                        <ul className=" to-do-options">
                            <li>
                               <p>{toDoContent.length} Items left</p>
                            </li>
                            <li
                                className={toDoType === "all" ? "filter-active" : ""}
                                onClick={() => setToDoType("all")}>
                                All
                            </li>
                            <li
                                className={toDoType === "active" ? "filter-active" : ""}
                                onClick={() => setToDoType("active")}>
                                Active
                            </li>
                            <li
                                className={toDoType === "completed" ? "filter-active" : ""}
                                onClick={() => setToDoType("completed")}>
                                Completed
                            </li>
                            <li>
                                <p className={
                                    themeIconChange
                                        ? "clear-completed-light"
                                        : "clear-completed"
                                }
                                    onClick={() => setToDoType("clear")}
                                >
                                    Clear Completed
                                </p>
                            </li>
                        </ul>
                    </div>
  )
}

export default ToDosFilter