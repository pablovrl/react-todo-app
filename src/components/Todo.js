import React from 'react'

export default function Todo(props) {
    return (
        <div>
            <input type="checkbox"/>
            <span>ID: {props.id} {props.tarea}</span>
            <button onClick={() => props.handleDelClick(props.id)}>DEL</button>
        </div>
    )
}
