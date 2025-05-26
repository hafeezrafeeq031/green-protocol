
const Distribution = () => {
    return (
        <>
            <div>
                <div className='Heading-2'>
                    <h1 className=' text-5xl  font-bold'>Profit Distribution</h1>
                </div>
            </div>


                <div className='Solution-cont flex flex-wrap justify-center  '>

                    <div className='w-86 h-90 bg-green-500 flex flex-col gap-3 items-center'>

                        <div ><img className='Solution-imag' src="https://greenprotocolbysami.netlify.app/assets/man-img-jgJ34NPB.png" alt="" /></div>
                        <div className='text-2xl font-bold text-stone-50'>Owner</div>
                        <div className='text-3xl font-bold text-stone-50'>70%</div>

                    </div>

                    <div className='w-86 h-90 bg-green-600 flex flex-col gap-3 items-center'>

                        <div ><img className='Solution-imag' src="https://greenprotocolbysami.netlify.app/assets/building-DF-56K0I.png" alt="" /></div>
                        <div className='text-2xl font-bold text-stone-50'>Company</div>
                        <div className='text-3xl font-bold text-stone-50'>25%</div>

                    </div>

                    <div className='w-86 h-90 bg-green-500 flex flex-col gap-3 items-center'>

                        <div ><img className='Solution-imag' src="https://greenprotocolbysami.netlify.app/assets/heart-coin-D398khHm.png" alt="" /></div>
                        <div className='text-2xl font-bold text-stone-50'>Charity</div>
                        <div className='text-3xl font-bold text-stone-50'>5%</div>

                    </div>
                  
                    
                </div >
        </>
    );
};

export default Distribution;