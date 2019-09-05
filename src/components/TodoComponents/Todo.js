import React from 'react';
import "./Todo.css";

function Todo(props) {
    return(
        <div className = { `task ${ props.item.completed? 'Completed' : '' } `} 
        onClick={ () => props.toggleStatus(props.item.id) }
        >

            <h1> {props.item.task} </h1>

        </div>
    )
}

export default Todo;