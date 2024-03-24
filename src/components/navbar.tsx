"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Logo from '../../public/img/navbar/logo.png'
import Logo1 from '../../public/img/navbar/logo1.png'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CgMenuLeft } from "react-icons/cg";



function Navbar() {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);
      useEffect(() => {
        const scrollHeader = () => {
          if(window.scrollY >= 20) {
            setShowNavbar(true)
          } else {
            setShowNavbar(false)
          }
        }
        window.addEventListener('scroll', scrollHeader);
        return () => {
          window.removeEventListener('scroll', scrollHeader);
        }
    
      }, []);
  return (
    <div className={`${showNavbar===false? "bg-transparent" : "bg-white shadow-sm shadow-gray-200 transition-all ease-in duration-300"} fixed z-50 top-0 left-0 w-screen h-[90px] px-[5vw] flex items-center justify-between`}>
      {/* left */}
      <a href='#home' className='scale-[0.8] lg:scale-100 flex items-center justify-start space-x-2 cursor-pointer'>
            <Image priority quality={100} alt="image" src={Logo1} width={800} height={500} className='w-[160px] h-[60px]' />
            <h1 className='font-semibold text-lg hover:rotate-[360deg] duration-200'>by</h1>
            <Image priority quality={100} alt="image" src={Logo} width={800} height={500} className='w-[160px] h-[50px]' />
      </a>
      {/* right lg */}
      <div className='hidden flex-1 lg:flex lg:items-center lg:justify-end space-x-7 text-lg'>
            <a href={"#home"} className="hover:scale-105 hover:text-blue-500 transition-all ease-in duration-150">Home</a>
            <a href={"#about"} className="hover:scale-105 hover:text-blue-500 transition-all ease-in duration-150">About us</a>
            <a href={"#service"} className="hover:scale-105 hover:text-blue-500 transition-all ease-in duration-150">Services</a>
            <a href={"#portofolio"} className="hover:scale-105 hover:text-blue-500 transition-all ease-in duration-150">Portofolio</a>
            <a href={"#contact"} className='px-4 py-3 hover:bg-blue-500 transition-all duration-300 rounded-md bg-blue-700 text-white'>Contact Us</a>
      </div>
      {/* deskripsi sm */}
      <div className='inline-flex lg:hidden'>
                  <Sheet>
                          <SheetTrigger>
                            <CgMenuLeft className='h-6 w-6 hover:rotate-[360deg] hover:scale-105 duration-300' />
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetDescription>
                              <div className='flex text-lg flex-col text-md font-semi-bold items-start justify-start space-y-8 mt-[100px]'>
                                  <a href={"/#home"} className='flex items-center justify-start space-x-2'>
                                    <h1>home</h1>  
                                  </a> 
                                  <a href={"/#about"} className='flex items-center justify-start space-x-2'>
                                    <h1>profile</h1>  
                                  </a> 
                                  <a href={"/#service"} className='flex items-center justify-start space-x-2'>
                                    <h1>projects</h1>  
                                  </a> 
                                  <a href={"/#portofolio"} className='flex items-center justify-start space-x-2'>
                                    <h1>contact</h1>  
                                  </a> 
                              </div>
                              </SheetDescription>
                            </SheetHeader>
                          </SheetContent>
                  </Sheet>
                </div>

      
    </div>
  )
}

export default Navbar