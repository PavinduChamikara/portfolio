import React from 'react'
import heroImage from "../assets/heroImage.png"
import {MdKeyboardArrowRight} from "react-icons/md"

const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Web Developer</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            bla blah bal bla bla bla
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-300'>
              <MdKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="my profile" className='rounded-2xl mx-auto mt-5 w-2/3' /> 
          {/* md:w-auto set the image with with this if not alinged */}
        </div>
      </div>
    </div>
  )
}

export default Home