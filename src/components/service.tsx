import React from 'react'
import { MdOutlineHandshake, MdOutlineStars } from "react-icons/md";
import { FiUserCheck } from "react-icons/fi";
import { BsStar } from "react-icons/bs";
import Card from './card';
function Service() {
  return (
    <div className='w-[90%] mx-auto min-h-screen flex flex-col space-y-8 justify-center items-center'>
      <h1 className="text-start text-[42px] font-extrabold "><span className="">Our Services</span></h1>
      <div className='flex-[0.65] w-full flex items-center justify-center space-x-5'>
            <Card />
            <Card />
            <Card />
      </div>   
    </div>
  )
}

export default Service