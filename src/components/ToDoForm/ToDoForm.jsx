import React from 'react'

function ToDoForm({handleSubmit, themeIconChange, inputContent, handleChange}) {
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
                        onChange={handleChange}
                    />
                </form>
  )
}

export default ToDoForm