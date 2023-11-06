import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

import Color from "./Color";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";

function Routes() {
    // ================================================================================
    const initialColors = JSON.parse(localStorage.getItem("colors")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    }
    const [colors, updateColors] = useState(initialColors)
    useEffect(
        () => localStorage.setItem("colors", JSON.stringify(colors)),
        [colors]
    )
    // ================================================================================
    function handleAdd({newColor}) {
        updateColors(oldColors => ({...oldColors, newColor}))
    }
    // ================================================================================
    function renderCurrentColor(props) {
        const {color} = props.match.params
        const hex = colors[color]
        console.log("Color: " + color)
        console.log("Hex: " + hex)
        return <Color {...props} hex={hex} color={color}/>
    }
    // ================================================================================
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/colors">
                    <ColorList colors={colors}/>
                </Route>
                <Route exact path="/colors/new">
                    <NewColorForm addColor={handleAdd}/>
                </Route>
                <Route path="/colors/:color" render={renderCurrentColor} />
                <Redirect to="/colors"/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes