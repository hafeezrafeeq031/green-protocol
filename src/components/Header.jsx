// src/components/Header.jsx
import React from "react";
import line from "./download.png";


const Header = () => {
    return (
        <header>
            <nav className="navbar flex justify-between items-center w-100% flex-wrap gap-2  text-stone-50">
                <div className=" text-2xl  font-bold">
                    Green Protocol
                </div>

                <div className="flex gap-5 items-center text-stone-50 font-normul">
                    <a href="./Problem">Problem</a>
                    <a href="./Solution">Solution</a>
                    <a href="./Besniss Model">Besniss Model</a>
                    <a href="./Profit Distribution">Profit Distribution</a>
                </div>
            </nav>

            <div className="container1 flex flex flex-col gap-20 items-center p-4 ">

                <div className="text-5xl font-bold text-stone-50 text-center heading ">
                    <h1 >Green Protocol</h1>
                </div>

                <div className="flex justify-center items-center ">
                    <div><img className="image1" src="https://greenprotocol.netlify.app/static/media/4.a3945fe8a5d2e0f9a9c2.png" alt="" /></div>
                    <div><img className="lineing" src={line} alt="img" /></div>
                    <div><img className="image1" src="https://greenprotocol.netlify.app/static/media/3.f68aef71096dfba35833.png" alt="" /></div>
                    <div><img className="lineing" src={line}/></div>
                    <div><img className="image1" src="https://greenprotocol.netlify.app/static/media/1.18666672bd1b15ad77d4.png" alt="" /></div>
                </div>

            </div>

        </header>
    );
};

export default Header;
