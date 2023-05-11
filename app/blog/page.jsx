import React from 'react'
import Box from '../box/page'
import blogm from '../blog/blogm.png'
import Image from 'next/image'
import Nav from '../nav/page'

export default function page() {
  return (
    <>
    <Nav colour='white'/>
    <main className={'bg-white max-w-[1400px] overflow-x-hidden '}>
      <section className={'border-b border-b-[#0a2640] bg-white  relative w-[1000px] left-[100px] '}>
        <div className={'flex flex-col items-center justify-center bg-white py-5'}>
        <p className={'font-light text-xs mb-4'}>Blog</p>
         <h1 className={'text-3xl font-light'}>Thoughts and words</h1>
        </div>
    
        
            <div className={'flex flex-row items-start justify-center px-8 rounded-lg bg-white'}>
        <Image src={blogm}   alt="stock" className={'h-[200px] w-[280px] rounded-lg my-5'} />

       <main className={'mx-10 relative top-5'}>
        <h1 className={'text-sm mb-3 '}>Category <span className={'font-thin text-xs'}>November 22, 2021</span></h1>
        <h2 className={'text-xl font-light'}>Pitch termsheet backing <br /> validation focus release.</h2>
         <section className={' flex flex-row justify-center items-start my-4 relative right-12 '}>
        <img className={'rounded-full h-6 w-6'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU" alt="stock"  />
          <p className={'font-bold text-xs ml-5 '}>Harry Potter</p>
        </section>
       </main>
      </div>
      </section>
        



      <section>
        <h1 className={'text-2xl text-[#0a2640] relative top-[20px] left-[270px] my-10'}>Latest news</h1>
        <Box/>
      </section>
    </main>
    </>
  )
}
