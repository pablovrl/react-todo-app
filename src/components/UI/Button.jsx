import React from 'react'

export default function Button(props) {
    return (
        <button className={props.className} onClick={() => props.onClick()}>
            <i className={"fas fa-" + props.icon}></i>
            {props.text}
        </button>
    )
}
