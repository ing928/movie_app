import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return(
    <div className="nav">
        <div className="nav__h">
            <Link to="/">Home</Link>
        </div>
        <div className="nav__a">
            <Link to="/about">About</Link>
        </div>
    </div>
    );
}

export default Navigation;