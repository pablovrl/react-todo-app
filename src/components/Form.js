import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function Form(props) {

    const [tarea, setTarea] = useState("")

    const handleChange = evt => {
        setTarea(evt.target.value)
    }

    return (
        <div>
            <input value={tarea} onChange={handleChange}/>
            <button onClick={() => {props.handleAddClick(tarea); setTarea("")}}>Crear</button>
        </div>
    )
}
