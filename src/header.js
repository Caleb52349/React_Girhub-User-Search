import React from "react"
import './Styles/header.css'
import DarkMode from "./components/DarkMode"

function Header() {

    return (
        <div className="header">
            <h1>devfinder</h1>
            <div className="Theme-Switcher">
                <DarkMode/>
            </div>
        </div>
    )
}

export default Header