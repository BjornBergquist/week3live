import React from 'react'
import './GreetUser.css'

export const GreetUser = (props) => {
    const showAlert = () => {
        alert("You have clicked me!")
    }
    return (
        <div className="greetuser">
            <h1 className="greetuser__header" onClick={() => showAlert()}>
                Welcome to my page, {props.name}!
            </h1>
            <p> I am {props.age} years old. </p>
        </div>
    )
}