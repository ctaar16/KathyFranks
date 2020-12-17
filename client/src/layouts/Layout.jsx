import React from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";

export default function Layout(props) {
    return(
        <div className="layout-main">
            <Header />
            <div className="layoutchildren">
                {props.children}
            </div>
            {/* <Footer/> */}
        </div>

    )
}