// src/components/Header.jsx
import React from "react";
import png1 from "./download (1).png";
import png2 from "./download (2).png";
import png3 from "./download (3).png";
import png4 from "./download (4).png";
import png5 from "./download (5).png";
import png6 from "./download (6).png";
import png7 from "./download (7).png";
import png8 from "./download (8).png";
import png9 from "./download (9).png";

const Example = () => {
    return (
        <>
            <div>
                <div className='Heading-2'>
                    <h1 className=' text-5xl  font-bold'> Problem</h1>
                </div>

                <h1 className="text-2xl font-bold text-center text-green-600">Buy (as NFT) and get the profit</h1>

                <div className="flex flex-col items-center">
                    <div className="inline-flex items-center problem-cont">
                        <img className="Example-img" src={png1} alt="img" />
                        <img className="Example-img" src={png2} alt="img" />
                        <img className="Example-img" src={png7} alt="img" />
                        <img className="Example-img" src={png2} alt="img" />
                        <img className="Example-img-soler" src={png3} alt="img" />
                    </div>
                    <div className="inline-flex items-center ">
                        <img className="Example-img" src={png4} alt="img" />
                        <img className="Example-img" src={png5} alt="img" />
                        <img className="Example-img" src={png6} alt="img" />
                    </div>
                </div>


                <div className="problem-cont mt-20 flex-wrap flex justify-center ">
                    <div className="bg-stone-300 w-140 flex flex-col items-center gap-8">
                        <div> <img className="w-24 p-img-8" src={png8} alt="img" /></div>
                        <div> <p className="p-pera-8 w-64 text-center text-3xl text-green-600">Buy NFT to Help the environment and get passive income</p> </div>
                    </div>

                    <div className="bg-green-600 w-140 flex flex-col items-center gap-8">
                        <div> <img className="w-24 p-img-8" src={png9} alt="img" /></div>
                        <div> <p className="p-pera-8 w-64 text-center text-3xl text-stone-50">Advantage:Resale the ownership Borrow Generate profit</p> </div>
                    </div>
                    
                </div>

            </div>
        </>

    );
};

export default Example;
