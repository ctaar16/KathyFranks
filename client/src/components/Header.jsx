import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";



export default function Header() {
    return (
        <div className="header-main">

            <div className="header-left">
                <img className="headshot" src ="/assets/kathy.jpg"/>
            </div>

            <div className="header-center">
                <Link to = "/" className="header-center"><h2>Home</h2></Link>
                <Link to = "/Portfolio" className="header-center"><h2>Portfolio</h2></Link>
                <Link to = "/About" className="header-center"><h2>About</h2></Link>
                <Link to = "/Contact" className="header-center"><h2>Contact</h2></Link>
            </div>

            <div className="header-right">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kathryn-haar-franks-rpl-84178640/">
                    <img className="linked" src="/assets/linkedin-1.png" />
                </a> 
            </div>

        </div>
    )
}