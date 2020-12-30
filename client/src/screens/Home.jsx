import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="home-main">
            <div className="space"><h1></h1></div>
            <div className="container">
                <p className="name">Kathryn Franks</p>
                <p className="slash">_____________________</p>
                <p className="title">Registered Professional Landman(RPL)</p>
                <p className="title">Right of Way Senior Title Agent</p>
                <Link to ="/Portfolio" className="callaction"><button>View My Experience</button></Link>
            </div>
            
        </div>
    )
}