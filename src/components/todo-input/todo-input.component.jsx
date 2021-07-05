import React from 'react'
import './todo-input.styles.css';

export const TodoInput = ({inputText, handleChange, handleSubmit, editItem}) => {
    return (
        
            <form onSubmit={handleSubmit} className="input__container mb-40">
                <input
                type="text" 
                value={inputText}
                placeholder="What needs to be done?" 
                className="todo__input" 
                required 
                onChange={handleChange}
                />
    
                <button disabled ={inputText?false:true } type="submit" className={editItem? "btn btn--edit mlr-5 ": "btn btn--add mlr-5 "}>{editItem? "Edit Todo" : "SAVE"}
                </button>
            </form> 
        
    )
}
