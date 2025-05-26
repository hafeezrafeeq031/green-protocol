import line from "./download.png";


const Footer = () => {
    return (
        <footer>

            <div className="container2 flex flex flex-col  items-center">                

                <div className="flex justify-center items-center pt-20 ">
                    <div><img className="image1" src="https://greenprotocol.netlify.app/static/media/4.a3945fe8a5d2e0f9a9c2.png" alt="" /></div>
                    <div><img className="lineing" src={line} alt="img" /></div>
                    <div><img className="image1" src="https://greenprotocol.netlify.app/static/media/3.f68aef71096dfba35833.png" alt="" /></div>
                    <div><img className="lineing" src={line}/></div>
                    <div><img className="image1" src="https://greenprotocol.netlify.app/static/media/1.18666672bd1b15ad77d4.png" alt="" /></div>
                </div>

                <div className="text-5xl font-bold text-stone-50 text-center heading ">
                    <h1 >Thank You</h1>
                </div>

            </div>

        </footer>
    );
};

export default Footer;