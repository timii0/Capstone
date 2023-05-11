import React from 'react'
import Link from 'next/link'
import { MdOutlineEscalatorWarning } from "react-icons/md";

export default function page(props) {
  return (
    <>

    <div className={`flex flex-row justify-end  h-24 ${props.colour === 'blue' ? 'bg-[#0a2640] text-white' : 'bg-white text-[#0a2640]'}`}>

        <ul className={'flex flex-row items-center justify-between w-[40%] relative right-28 my-8 text-xs'}>
       <Link href='/'><p className={'flex justify-center items-center relative right-[510px] text-4xl '}><span className={'text-4xl text-[#65e4a3]'}><MdOutlineEscalatorWarning/></span>otd.</p></Link> 
           <Link href=''><li>Product</li></Link>
           <a href="#services"><li>Services</li></a>
           <Link href='/about'><li >About</li></Link>
            <li><button className={`rounded-xl bg-white text-[#0a2640] w-[90px] h-6  hover:bg-[#0a2640]  hover:text-white hover:border-white hover:border ${props.colour === 'white' ? 'border-[#0a2640] border' : '' }`}>Log in</button></li>
        </ul>
    </div>
    </>
  )
}