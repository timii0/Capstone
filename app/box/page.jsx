import React from 'react'
import blog1 from '../box/blog1.png'
import blog2 from '../box/blog2.png'
import blog3 from '../box/blog3.png'
import blog4 from '../box/blog4.png'
import blog5 from '../box/blog5.png'
import blog6 from '../box/blog6.png'
import Image from 'next/image'

export default function page() {
    

    const blogDescription = [
        {
            id: 0,
            image: blog1,
            title: 'Category',
            date: 'November 22, 2021',
            page: 'Pitch termsheet backing validation focus release.',
            img:{
                id: 0,
                name: 'Chandler Bing'
            }
        },

        {
            id: 1,
            image: blog2,
            title: 'Category',
            date: 'November 22, 2021',
            page: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            img:{
                id: 1,
                name: 'Rachel Green'
            }
        },

        {
            id: 2,
            image: blog3,
            title: 'Category',
            date: 'November 22, 2021',
            page: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            img:{
                id: 2,
                name: 'Monica Geller'
            }
        },

        {
            id: 3,
            image: blog4,
            title: 'Category',
            date: 'November 22, 2021',
            page: 'Pitch termsheet backing validation focus release.',
            img:{
                id: 3,
                name: 'Chandler Bing'
            }
        },

        {
            id: 4,
            image: blog5,
            title: 'Category',
            date: 'November 22, 2021',
            page: 'Seed round direct mailing non-disclosure agreement graphical user interface rockstar.',
            img:{
                id: 1,
                name: 'Rachel Green'
            }
        },

        {
            id: 5,
            image: blog6,
            title: 'Category',
            date: 'November 22, 2021',
            page: 'Beta prototype sales iPad gen-z marketing network effects value proposition',
            img:{
                id: 2,
                name: 'Monica Geller'
            }
        }
    ]

const blogs = blogDescription.map( blog => (
    <section className={'flex flex-col items-start justify-center px-5'} key={blog.id}>
    <Image src={blog.image} alt="stock" className={'h-[140px] w-48 rounded-lg my-5'}  />
    <h1 className={'text-sm mb-3'}>{blog.title} <span className={'font-thin text-xs'}>{blog.date}</span></h1>
    <h2 className={'text-xs font-light'}>{blog.page}</h2>
     <section className={' flex flex-row justify-center items-center my-4'}>
    <img className={'rounded-full h-6 w-6'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU" alt="stock"  />
      <p className={'font-bold text-xs ml-3'}>{blog.img.name} </p>
    </section>
  </section>


))
  return (
    <>
    <main className={'bg-white flex justify-center items-center flex-col'}>

    <section className={'grid grid-cols-3 bg-white w-[60%] items-center justify-center'}>
        {blogs}
    </section>
    <section>
        <button className={'rounded-3xl bg-white text-[#0a2640] w-[130px] h-8 border-solid border border-[#0a2640] my-5 text-xs'}>Load more</button>
    </section>
    </main>
    </>
  )
}
