import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="home-main">
            <div className="container">
                <p className="name">Kathy Franks</p>
                <p className="slash">_____________________</p>
                <p className="title">Registered Petroleum Landman</p>
                <Link to ="/Portfolio" className="callaction">View My Achievements</Link>
            </div>
            
        </div>
    )
}