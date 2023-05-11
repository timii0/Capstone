import React from 'react'
import Profile from '../profile/page'
import img1 from '../about/avatar1.jpg'
import img2 from '../about/avatar2.png'
import img3 from '../about/avatar3.jpg'
import Image from 'next/image'
import blog1 from '../box/blog1.png'
import blog2 from '../box/blog2.png'
import blog3 from '../box/blog3.png'
import blog4 from '../box/blog4.png'
import center from '../about/center1.jpg'
import Nav from '../nav/page'

export default function page() {
  return (
    <>
    <Nav colour='blue'/>
     <section className={' bg-[#0a2640] text-white flex flex-col justify-start items-center h-[300px] '}> 
         <p className={'font-light text-xs mb-4 mt-6'}>About</p>
        <h1 className={'text-4xl font-light ml-5'}>We love to make great <br /> <span className={'mt-5 relative right-7'}>things, things that matter. </span> </h1>
         <p className={'text-xs font-light'}>Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage <br /> <span className={'mt-4 relative left-[130px]'} > innovator success deployment non-disclosure.</span></p>

     
     
      
      </section>
     <section className={'flex flex-col justify-center items-center bg-white h-[550px]'}>
        <div className={'grid grid-cols-3 relative bottom-[55px]'}>
            <section>
      <Image  className={'h-[150px] w-[170px] rounded-lg my-3 mx-5'} src={blog1} alt="stock" />
      <Image  className={'h-[150px] w-[170px] rounded-lg my-3 mx-5'} src={blog2} alt="stock" />
           </section>
            <section>
      <Image  className={'h-[313px] w-[180px] rounded-lg my-3 mx-3 '} src={center} alt="stock" />
            </section>
            <section>
      <Image  className={'h-[150px] w-[170px] rounded-lg my-3 mx-3'} src={blog3} alt="stock" />
      <Image  className={'h-[150px] w-[170px] rounded-lg my-3 mx-3'} src={blog4} alt="stock" />
            </section>

        </div>
        <div className={'flex flex-col justify-center items-start'}>
        <p className={'font-light text-xs mb-4'}>Our Story</p>
            <h1 className={'text-3xl font-light'}>Handshake infographic mass market <br /> crowdfunding iteration.</h1>
            <p className={'font-light text-xs my-4 mb-10'}>Conversion angel investor entrepreneur first mover advantage. Handshake <br /> infographic mass market crowdfunding iteration. Traction stock user experience <br /> deployment beta innovator incubator focus. Sales user experience branding growth <br /> hacking holy grail monetization conversion prototype stock network effects. Learning <br /> curve network effects return on investment bootstrapping business-to-consumer. </p>
        </div>

     </section>
     <section>
     <section className={' bg-[#0a2640] text-white flex flex-col justify-center items-center h-[300px]'}> 
         <p className={'font-light text-xs mb-4'}>Our numbers</p>
         <h1 className={'text-3xl font-light'}>Handshake infographic mass market <br /> crowdfunding iteration.</h1>
        <div className={'flex flex-row items-center justify-between w-[50%] mt-5'}>
            <section >
                <h1 className={'text-5xl text-[#65e4a3] font-light'}>120m</h1>
                <p>Cool feature title</p>
            </section>
            <section>
                <h1 className={'text-5xl text-[#65e4a3] font-light'}>10.000</h1>
                <p>Cool feature title</p>
            </section>
            <section>
                <h1 className={'text-5xl text-[#65e4a3] font-light'}>240</h1>
                <p>Cool feature title</p>
            </section>
        </div>
     
     
     
      
      </section>
     </section>
     <section>
     <div className={'flex flex-col justify-center items-start ml-[350px] mt-10 '}>
        <p className={'font-light text-xs mb-4'} id='careers'>Our team</p>
            <h1 className={'text-3xl font-light'}>The Leadership team</h1>
            <p className={'font-light text-xs my-4'}>Conversion angel investor entrepreneur first mover advantage. Handshake <br /> infographic mass market crowdfunding iteration. Traction stock user experience <br /> deployment beta innovator incubator focus. Sales user experience branding growth <br /> hacking holy grail monetization conversion prototype stock network effects. Learning <br /> curve network effects return on investment bootstrapping business-to-consumer. </p>
        </div>
        <div className={'flex flex-row items-start justify-center mb-10'}>
        <Profile title='Michael Scott' info='General Managaer' imageUsed={img1}/>
        <Profile title='Dwight Schrute' info='General Managaer' imageUsed={img2}/>
        <Profile title='Pam Beetsley' info='General Managaer' imageUsed={img3}/>
        </div>
     </section>
     <section className={'text-white bg-[#0a2640] flex flex-col justify-center items-start mb-10'}>
     <div className={'flex flex-col justify-center items-start  mt-10 ml-[350px]  '}>
        <p className={'font-light text-xs mb-4'}>Our value</p>
            <h1 className={'text-3xl font-light'}>Things in we believe</h1>
            <p className={'font-light text-xs my-4'}>Conversion angel investor entrepreneur first mover advantage. Handshake <br /> infographic mass market crowdfunding iteration. Traction stock user experience <br /> deployment beta innovator incubator focus. Sales user experience branding growth <br /> hacking holy grail monetization conversion prototype stock network effects. Learning <br /> curve network effects return on investment bootstrapping business-to-consumer. </p>
        </div>
        <div>
            <section className={'flex flex-row items-start justify-center mt-5 ml-[350px]'}>
                <img className={'h-[110px] w-[120px] rounded-lg mr-5 mt-1 '} src="https://i.pinimg.com/550x/1a/5c/72/1a5c7291d646a8669b7ca6e0b3efd211.jpg" alt="stock" />
                <div className={'flex flex-col items-start justify-center'}>
                    <h1 className={'text-sm font-light'}>We are committed.</h1>
                    <p className={'font-light text-xs my-4'}>Conversion angel investor entrepreneur first mover advantage. Handshake <br /> infographic mass market crowdfunding iteration. Traction stock user experience <br /> deployment beta innovator incubator focus. Sales user experience branding growth <br /> hacking holy grail monetization conversion prototype stock network effects. Learning <br /> curve network effects return on investment bootstrapping business-to-consumer. </p>
                </div>
            </section>
            <section className={'flex flex-row items-start justify-center mt-5 ml-[350px]'}>
                <img className={'h-[110px] w-[120px] rounded-lg mr-5 mt-1 '} src="data:image/jpeg;base64,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" alt="stock" />
                <div className={'flex flex-col items-start justify-center'}>
                    <h1 className={'text-sm font-light'}>We are responsible.</h1>
                    <p className={'font-light text-xs my-4'}>Conversion angel investor entrepreneur first mover advantage. Handshake <br /> infographic mass market crowdfunding iteration. Traction stock user experience <br /> deployment beta innovator incubator focus. Sales user experience branding growth <br /> hacking holy grail monetization conversion prototype stock network effects. Learning <br /> curve network effects return on investment bootstrapping business-to-consumer. </p>
                </div>
            </section>
            <section className={'flex flex-row items-start justify-center mt-5 ml-[350px] mb-10'}>
                <img className={'h-[110px] w-[120px] rounded-lg mr-5 mt-1 '} src="https://cdn.quotesgram.com/img/14/7/1884072406-breakingbad-heisenberg-shirt-1.gif" alt="stock" />
                <div className={'flex flex-col items-start justify-center'}>
                    <h1 className={'text-sm font-light'}>We aim for progress.</h1>
                    <p className={'font-light text-xs my-4'}>Conversion angel investor entrepreneur first mover advantage. Handshake <br /> infographic mass market crowdfunding iteration. Traction stock user experience <br /> deployment beta innovator incubator focus. Sales user experience branding growth <br /> hacking holy grail monetization conversion prototype stock network effects. Learning <br /> curve network effects return on investment bootstrapping business-to-consumer. </p>
                </div>
            </section>
        </div>
     </section>
     

    </>
  )
}
