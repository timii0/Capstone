import React from 'react'
import Link from 'next/link'
import { MdOutlineEscalatorWarning } from "react-icons/md";

export default function page() {
  return (
    <>
    <main className={' w-[80%] m-auto'}>
        <section className={'bg-[#0a2640] text-white flex flex-col h-[200px] items-center justify-center '}>
            <h1 className={'text-3xl font-light'}>An enterprise template to ramp <br /> up your company website</h1>
            <div>
            <input type="email" name="" id="" placeholder='  Your email address' className={'rounded-2xl h-8 text-xs text-[#0a2640] w-[260px]'} /> <button className={'bg-[#65e4a3] rounded-2xl w-[130px] text-xs h-8 text-[#0a2640] my-5 hover:bg-white '}>Start now</button>
            </div>
        </section>
        <section className={'flex flex-row items-center justify-around h-[350px] it text-[#0a2640] mb-2'}>
            <div className={'flex flex-col items-start justify-around text-xs h-[80%]'}>
                <section className={'text-3xl font-bold'}>
                <Link href='/'><p className={'flex justify-center items-center text-4xl '}><span className={'text-4xl text-[#65e4a3]'}><MdOutlineEscalatorWarning/></span>otd.</p></Link> 
                </section>
                <section><p>Social media validation business model <br /> canvas graphical user interface launch <br /> party creative facebook iPad twitter.</p>
                </section>
                <section className={'relative bottom-4'}>All rights reserved.</section>
            </div>
            <div className={'grid grid-cols-3 w-[50%] h-[80%] text-sm font-light'}>
                <section className={'font-black'}>Landing</section>
                <section className={'font-black'}>Company</section>
                <a href="#services"><section className={'font-black'}>Resources</section></a>
               <Link href='/'> <section>Home</section></Link>
               <Link href='/'> <section>Home</section></Link>
                  <Link href='/blog'><section>Blog</section> </Link>
                <section>Products</section>
                <a href="#careers"><section className={'relative bottom-4'}>Careers <button className={'bg-[#65e4a3] rounded-2xl w-[60px] text-xs h-5 text-[#0a2640] my-5 font-bold'}>Hiring!</button></section></a>
                <section>Products</section>
                <a href="#services"><section className={'relative bottom-8'}>Services</section></a>
                <a href="#services"><section className={'relative bottom-8'}>Services</section></a>
                <a href="#services"><section className={'relative bottom-8'}>Services</section></a>
                
            </div>
        </section>
    </main>
    </>
  )
}
