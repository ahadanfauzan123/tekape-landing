import React from 'react'
import { MdOutlineHandshake, MdOutlineStars } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
function About2() {
  return (
    <div id='plus' className='w-[90%] mx-auto min-h-screen flex flex-col space-y-8 justify-center items-center'>
      <h1 className="text-start text-[42px] font-extrabold "><span className="">Mengapa Memilih Kami?</span></h1>
      <div className='flex-1 lg:flex-[0.65] w-full flex flex-col lg:flex-row space-y-5 lg:space-y-0 items-center justify-center space-x-0 lg:space-x-5'>
            <div className="max-w-sm px-4 py-12 h-full bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-start space-y-4 ">
                  <div className='w-[100px] h-[100px] bg-gray-200 rounded-[50%] flex items-center justify-center'>
                  <MdOutlineHandshake className='w-[68px] h-[68px] text-blue-300' />

                  </div>
            <a href="#">
                  <h5 className="mb-2 text-3xl font-bold tracking-tight">Terpercaya</h5>
            </a>
            <p className="mb-3 font-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo voluptate at id vel? Quasi, ipsum at? Ipsa suscipit nam ex deleniti nulla odit, eum, expedita laborum optio illum porro.</p>
            </div>
            <div className="max-w-sm px-4 py-12 h-full bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-start space-y-4 ">
                  <div className='w-[100px] h-[100px] bg-gray-200 rounded-[50%] flex items-center justify-center'>
                  <FiUserCheck className='w-[52px] h-[52px] text-blue-300' />
                  </div>
            <a href="#">
                  <h5 className="mb-2 text-3xl font-bold tracking-tight">Profesional</h5>
            </a>
            <p className="mb-3 font-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo voluptate at id vel? Quasi, ipsum at? Ipsa suscipit nam ex deleniti nulla odit, eum, expedita laborum optio illum porro.</p>
            </div>
            <div className="max-w-sm px-4 py-12 h-full bg-white border border-gray-200 rounded-lg shadow flex flex-col items-center justify-start space-y-4 ">
                  <div className='w-[100px] h-[100px] bg-gray-200 rounded-[50%] flex items-center justify-center'>
                  <BsStar className='w-[68px] h-[68px] text-blue-300' />

                  </div>
            <a href="#">
                  <h5 className="mb-2 text-3xl font-bold tracking-tight">Berpengalaman</h5>
            </a>
            <p className="mb-3 font-normal text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo voluptate at id vel? Quasi, ipsum at? Ipsa suscipit nam ex deleniti nulla odit, eum, expedita laborum optio illum porro.</p>
            </div>

      </div>   
    </div>
  )
}

export default About2