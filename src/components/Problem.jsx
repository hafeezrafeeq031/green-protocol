import React from 'react'


const Problem = () => {
  return (
    <>

      {/* navbar flex justify-between items-center w-screen flex-wrap gap-2 p-6 px-6 text-stone-50 */}

      <div>
        <div className='Heading-2'>
          <h1 className=' text-5xl  font-bold'> Problem</h1>
        </div>

        <div className='problem-cont flex justify-between items-center gap-40'>

          <div >
            <p className='pera-1 mt-5'>Major current environmental issues may include climate change, pollution, environmental
              degradation, and resource depletion. The conservation movement lobbies for protection of endangered
              species and protection of any ecologically valuable natural areas, genetically modified foods and
              global warming.</p>
          </div>

          <div>
            <img className='problem-img' src="https://greenprotocolbysami.netlify.app/assets/problem-Image-BhFvh71m.png" alt="img" />
          </div>
        </div>

      </div>
    </>
  )
}

export default Problem