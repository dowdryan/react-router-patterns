import "./Color.css";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Color({hex, color, history}) {
    if (!hex) {
        history.push("/colors")
    }
    // console.log("History: " + history)
    return (
        <div className="Color" style={{backgroundColor: hex}}>
            <p>This is {color}.</p>
            <p>
                <Link to="/">Go Back</Link>
            </p>
        </div>
    )
}

export default Color