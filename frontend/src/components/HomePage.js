import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function HomePage(){
    return(
        <>
            <div className="home-page">
                <Header/>
                {/* Another content here */}
                <Footer/>
            </div>
        </>
    )
}

export default HomePage;