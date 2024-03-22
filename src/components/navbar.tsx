import Image from 'next/image'
import React from 'react'
import Logo from '../../public/img/navbar/logo.png'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='bg-white shadow-sm shadow-gray-200 w-screen h-[90px] px-[5vw] flex items-center justify-between'>
      {/* lefy */}
      <div className='flex items-center justify-start space-x-2'>
            <Image priority quality={100} alt="image" src={Logo} width={800} height={500} className='w-[160px] h-[50px]' />
      </div>
      {/* right */}
      <div className='hidden flex-1 lg:flex lg:items-center lg:justify-end space-x-7 text-lg'>
            <Link href={"/"} className="hover:scale-105 hover:text-blue-500 transition-all ease-in duration-150">Home</Link>
            <Link href={"/"} className="hover:scale-105 hover:text-blue-500 transition-all ease-in duration-150">About us</Link>
            <Link href={"/"} className="hover:scale-105 hover:text-blue-500 transition-all ease-in duration-150">Services</Link>
            <Link href={"/"} className="hover:scale-105 hover:text-blue-500 transition-all ease-in duration-150">Portofolio</Link>
            <Link href={"/"} className='px-4 py-3 hover:bg-blue-500 transition-all duration-300 rounded-md bg-blue-700 text-sm text-white'>Contact Us</Link>
      </div>
      
    </div>
  )
}

export default Navbar