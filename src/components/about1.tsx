import Image from 'next/image'
import React from 'react'
import Logo from "../../public/img/profile/image1.png"
import Link from 'next/link'

function About1() {
  return (
      <div id="profile" className="w-full flex pt-[60px] flex-col bg-white text-gray-600">
      <div className=" w-full min-h-[90vh] lg:h-[70vh] flex flex-col space-y-8 lg:space-y-0 items-center justify-center">
        <div
        className="flex w-full flex-col items-center justify-between">
          {/* about */}
          <div className='w-[90%] mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 items-center justify-between my-[48px]'>
            {/* left */}
            <div className='flex-1 flex items-start justify-start flex-col space-y-9'>
              <h1 className="w-full text-start text-[42px] font-extrabold "><span className="">TeKaPe Coworking Space</span></h1>
              <p className=" w-full lg:w-[65%] text-start">Lorem ipsum dolor sit amet consectetur. Tellus morbi metus amet phasellus integer. Magna aliquam aliquam ut ultrices et nibh. Urna scelerisque dignissim pellentesque vitae duis aenean. Amet convallis vestibulum pellentesque aliquet. Sed ornare magna elementum tempor consequat facilisis. Lectus amet dolor laoreet non quis sem consectetur et. 
<br />
<br />
Ac sed bibendum semper et elit. Lectus ipsum amet elementum libero. Et in dolor diam quam aliquam elit sagittis cursus odio. Integer pulvinar lacus leo nullam imperdiet lorem ut non. Justo pulvinar ultrices consequat risus et imperdiet in metus. Eu turpis urna nisi iaculis amet. Facilisis ullamcorper a nulla nulla massa tincidunt. Ut tristique pellentesque bibendum rhoncus risus.
              </p>
              <Link href={"/"} className='text-white bg-blue-500 rounded-xl px-5 py-2'>Read More</Link>
            </div>
            {/* right */}
            <div className='w-[500px] h-full rounded-2xl bg-gray-200'>
              <Image src={Logo} alt="logo" width={1000} height={1000} quality={90} className="w-full h-full rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About1