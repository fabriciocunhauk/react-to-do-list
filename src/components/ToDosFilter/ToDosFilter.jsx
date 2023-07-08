import React from 'react'
import './todos-filter.css';

function ToDosFilter({themeIconChange, toDoContent, filterActiveClass,
handleFilters, handleClearCompleted}) {
  return (
    <div className={
                        themeIconChange
                            ? "to-do-options-light to-do-options"
                            : "to-do-options"}
                    >
                        <p>{toDoContent.length} Items left</p>
                        <ul>
                            <li
                                className={filterActiveClass === 0 ? "filter-active" : ""}
                                onClick={() => handleFilters(0)}>
                                All
                            </li>
                            <li
                                className={filterActiveClass === 1 ? "filter-active" : ""}
                                onClick={() => handleFilters(1)}>
                                Active
                            </li>
                            <li
                                className={filterActiveClass === 2 ? "filter-active" : ""}
                                onClick={() => handleFilters(2)}>
                                Completed
                            </li>
                        </ul>
                        <p className={
                            themeIconChange
                                ? "clear-completed-light"
                                : "clear-completed"
                        }
                            onClick={handleClearCompleted}
                        >
                            Clear Completed
                        </p>
                    </div>
  )
}

export default ToDosFilter