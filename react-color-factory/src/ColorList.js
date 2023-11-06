import "./ColorList.css";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ColorList({colors}) {
    const colorLinks = Object.keys(colors).map(colorName => (
        <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
        </li>
    ))
    return (
        <div className="ColorList">
            <header className="ColorList-header">
                <h1 className="ColorList-title">Welcome to the color factory.</h1>
                <h1>
                    <Link to="/colors/new">Add A Color</Link>
                </h1>
            </header>
            <div className="ColorList-intro">
                <p>Please Select A Color.</p>
                <ul>{colorLinks}</ul>
            </div>
        </div>
    )
}

export default ColorList