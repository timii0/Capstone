import React from 'react'
import { BsArrowRightShort,BsFillArrowThroughHeartFill,BsEye,BsGearWideConnected,BsFillCheckCircleFill,BsRocketTakeoffFill,BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill, BsChevronBarDown, BsChevronDoubleDown } from "react-icons/bs";
import Image from 'next/image';
import main1 from './box/main1.png'
import main2 from './box/main2.png'
import main3 from './box/main3.png'
import Nav from './nav/page'

export default function page() {
  return (
    <>
    <Nav colour='blue'/>
    <section className={' bg-[#0a2640] text-white flex flex-row justify-center items-center h-[600px]'}>
      <div className={'w-[500px] '}>
        <h1 className={'text-4xl font-light '}>Save time by building <br /> fast with Boldo Template  </h1>
        <p className={'text-xs font-thin mt-5'}>Funding handshake buyer business-to-business metrics iPad partnership. <br /> First mover advantage innovator success deployment non-disclosure.</p>
        <button className={'bg-[#65e4a3] rounded-2xl w-[130px] text-xs h-8 text-[#0a2640] my-5 hover:bg-white '}>Buy template</button><button  className={' hover:bg-white  hover:text-black border-2 border-solid border-white rounded-2xl w-[100px] text-xs h-8 my-5 ml-3 '}>Explore</button>
      </div>
      <div className={'w-[500px] justify-center items-center flex flex-col '}>
        <section className=''>
      <Image src={main1} alt="stock" className={'w-[493.86px] h-[231.9px]'}/>
        </section>
        <section className={'flex items-start justify-between mt-4'}>
      <Image src={main2} alt="stock" className={'mr-8'} />
      <Image src={main3} alt="stock" />
        </section>
        
      </div>
    </section>
    <section className={'h-[1500px] flex flex-col items-center py-5 bg-white '}>
        <p className={'font-light text-xs mb-4'} id='services'>Our services</p>
        <h1 className={'text-3xl'}>Handshake infographic mass market <br /> <span className={'text-3xl ml-[85px]'}>crowdfunding iteration</span> </h1>
      <div className={'flex flex-row items-center justify-center my-8 '}>
      <section className={'flex flex-col items-start justify-center px-8 rounded-lg'}>
        <img src="https://media.istockphoto.com/id/862542392/vector/businessmen-shake-hands-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=u3IRMW5sZXc685-M5AhCKrpiCPxsmVjjjquJ4X-2dLY=" alt="stock" className={'h-[200px] w-48 rounded-lg my-5 outline outline-1 outline-black'} />
        <h1 className={'text-sm mb-3'}>Cool feature title</h1>
        <h2 className={'text-xs font-light'}>Learning curve network effects <br /> turn on investments.</h2>
        <p className={'border-b-2 border-b-[#0a2640] text-sm py-1 pr-4'}>Explore page  </p>
        <span className={'relative left-[90px] bottom-[23px] hover:translate-x-4 '}><BsArrowRightShort/></span>
      </section>

      <section className={'flex flex-col items-start justify-center px-5'}>
        <img src="https://media.istockphoto.com/id/963333864/vector/meeting-two-businessmen-and-business-handshake.jpg?s=612x612&w=0&k=20&c=Ls39LjlQBzEhamWQKFfSoAiSUFFSKd5h4244nOTfCZs=" alt="stock" className={'h-[200px] w-48 rounded-lg my-5'}  />
        <h1 className={'text-sm mb-3'}>Cool feature title</h1>
        <h2 className={'text-xs font-light'}>Learning curve network effects <br /> turn on investments.</h2>
        <p className={'border-b-2 border-b-[#0a2640] text-sm py-1 pr-4'}>Explore page </p>
        <span className={'relative left-[90px] bottom-[23px]  hover:translate-x-4 '}><BsArrowRightShort/></span>
      </section>

      <section className={'flex flex-col items-start justify-center px-5'}>
        <img src="https://media.istockphoto.com/id/1222602525/vector/handshake-of-business-partners.jpg?s=612x612&w=0&k=20&c=XE2Jy-JXgsqxs3pA_RNADnwIHnWeTdB4X5fX7znkIok=" alt="stock"  className={'h-[200px] w-48 rounded-lg my-5'} />
        <h1 className={'text-sm mb-3'}>Cool feature title</h1>
        <h2 className={'text-xs font-light'}>Learning curve network effects <br /> turn on investments.</h2>
        <p className={'border-b-2 border-b-[#0a2640] text-sm py-1 pr-4'}>Explore page </p>
        <span className={'relative left-[90px] bottom-[23px]  hover:translate-x-4 '}><BsArrowRightShort/></span>
      </section>

     
     
      </div>
      <div className={'flex flex-row items-center justify-center my-12 '}>
        <section>
          <img src="https://media.vanityfair.com/photos/626c5dd77a6295258c437a5a/1:1/w_1333,h_1333,c_limit/vf-422-better-call-saul.png" alt="stock" className={'h-[300px] w-[270px] rounded-lg mx-12'} />
        </section>
        <section>
          <p>We connect our customers <br /> with the best and help them <br /> keep-up and stay open.</p>
          <ul className={'my-8 text-[#0a2640]'}>
            <li className={'h-[35px] text-sm flex items-center'}> <span className={'text-lg mx-3 '}> <BsFillCheckCircleFill/> </span>We connect our customers with the best.</li>
            <li className={'h-[35px] text-sm flex items-center'}> <span className={'text-lg mx-3 '}> <BsFillCheckCircleFill/> </span>Advisor success customer launch party.</li>
            <li className={'h-[35px] text-sm flex items-center'}> <span className={'text-lg mx-3 '}> <BsFillCheckCircleFill/> </span>Business to continue long-term.</li>
            
          </ul>
          <button className={' bg-[#0a2640] rounded-2xl w-[130px] text-xs h-8 text-white'}>Start now</button>

        </section>
      </div>
      <div className={'flex flex-row items-center justify-center my-6 '}>
        <section className={'text-[#0a2640]'}>
          <p>We connect our customers <br /> with the best and help them <br /> keep-up and stay open.</p>
          <ul className={'w-[400px] my-5'}>
            <li className={'h-[40px] text-xs bg-[#0a2640] text-white flex items-center mt-3 rounded-md '}> <span className={'text-lg mx-3 '}> <BsFillArrowThroughHeartFill/> </span>  We connect our customers with the best.</li>
            <li className={'h-[40px] text-xs mt-3 flex items-center'}> <span className={'text-lg mx-3 '}> <BsEye/> </span> Advisor success customer launch party.</li>
            <li className={'h-[40px] text-xs mt-3 flex items-center'}> <span className={'text-lg mx-3 '}> <BsGearWideConnected/> </span> Business to continue long-term.</li>
            
          </ul>
          <button className={' bg-[#0a2640] rounded-2xl w-[130px] text-xs h-8 text-white mb-10'}>Start now</button>
              

        </section>
        
      <section>
          <img src="https://i.guim.co.uk/img/media/6178383d28a21b9822a838b7040f254049dcd385/0_300_4500_2700/master/4500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a774a784cab3860261fcf47914e573d9" alt="stock" className={'h-[300px] w-[260px] rounded-lg mx-12 mb-6'} />
        </section>
      </div>
      <button className={'rounded-3xl bg-white text-[#0a2640] w-[130px] h-8 border-solid border border-[#0a2640] my-5 text-xs'}>Load more</button>
    </section>
    <section className={'bg-[#0a2640] flex flex-col items-center justify-center h-[600px]'}>
      <main className={'text-3xl font-light text-white relative right-[100px] mb-8 flex items-start justify-center'}>An enterprise template to ramp <br /> up your company website <span className={'flex justify-center items-end relative top-10 left-48'}><BsFillArrowLeftCircleFill/> <BsFillArrowRightCircleFill/></span></main>
        <main className={'flex flex-row justify-between'}>
        <div className={'flex flex-col justify-center items-center bg-white mx-5 rounded-lg text-sm h-[200px] w-[200px]'}>
        <section>“Buyer buzz partner <br /> network disruptive non- <br /> disclosure agreement <br /> business”</section>
        <section className={' flex flex-row justify-center items-center my-4'}>
          <img className={'rounded-full h-8 w-8'} src="https://static.vecteezy.com/system/resources/previews/006/735/770/original/beautiful-woman-avatar-profile-icon-vector.jpg" alt="stock"  />
          <p className={'font-bold text-xs'}>Albus Dumbledore <br /><span className={'font-light'}>Manager @ Hogwarts</span></p>
        </section>
        </div>
        <div className={'flex flex-col justify-center items-center bg-white mx-5 rounded-lg text-sm h-[250px] w-[200px]'}>
        <section>“Learning curve <br /> infrastructure value <br /> proposition advisor <br /> strategy user <br /> experience hypotheses <br /> investor.”</section>      
          <section className={' flex flex-row justify-center items-center my-4'}>
          <img className={'rounded-full h-8 w-8'} src="https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png" alt="stock"  />
          <p className={'font-bold text-xs'}>Severus Snape <br /><span className={'font-light'}>Manager @ Slytherin</span></p>
        </section>
        </div>
        <div className={'flex flex-col justify-center items-center bg-white mx-5 rounded-lg text-sm h-[200px] w-[200px]'}>
        <section>“Release facebook <br /> responsive web design <br /> business model canvas <br /> seed money <br /> monetization.”</section>
        <section className={' flex flex-row justify-center items-center my-4'}>
        <img className={'rounded-full h-8 w-8'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU" alt="stock"  />
          <p className={'font-bold text-xs'}>Harry Potter <br /><span className={'font-light'}>Leader @ Gryffindor</span></p>
        </section>
        </div>
      </main>
    </section>
    <section>
      <main className={'flex flex-col justify-center items-center h-[600px] bg-white'}>
        <section >
          <img className={'h-[250px] w-[550px] rounded-lg'} src="https://i0.wp.com/psychodrivein.com/wp/wp-content/uploads/2015/03/better-call-saul-7-header.jpg?fit=1000%2C431&ssl=1" alt="stock" />
          </section>

        <section className={'flex flex-row justify-between items-center my-5 relative right-[50px]'}>
          <div>We connect our customers <br /> with the best, and help them <br /> keep up-and stay open.</div>
          <div className={'flex flex-col justify-around items-center text-xs relative left-[100px]'}>
            <p className={'mb-2 flex items-center border-b border-b-[#024] py-2'}>We connect our customers with the best? <span className={'mx-2 t'}><BsChevronDoubleDown/></span>  </p>
            <p className={' flex items-center border-b border-b-[#024] py-2'}>Android research & development rockstar?  <span className={'mx-2 t'}><BsChevronDoubleDown/></span> </p>
          </div>
        </section>
      </main>

      <main>
      <section className={'h-[600px] flex flex-col items-center py-5 bg-white '}>
        <p className={'font-light text-xs mb-4'}>Our blog</p>
        <h1 className={'text-3xl'}>Value proposition accelerator product  <br /> <span className={'text-3xl ml-[85px]'}>management venture</span> </h1>
      <div className={'flex flex-row items-center justify-center my-8 '}>
      <section className={'flex flex-col items-start justify-center px-8 rounded-lg'}>
        <img src="https://media.istockphoto.com/id/862542392/vector/businessmen-shake-hands-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=u3IRMW5sZXc685-M5AhCKrpiCPxsmVjjjquJ4X-2dLY=" alt="stock" className={'h-[140px] w-48 rounded-lg my-5'} />
        <h1 className={'text-sm mb-3'}>Category <span className={'ml-3 text-xs font-thin'}>November 22, 2021</span></h1>
        <h2 className={'text-xs font-light'}>Pitch termsheet backing <br /> validation focus release.</h2>
         <section className={' flex flex-row justify-center items-center my-4'}>
        <img className={'rounded-full h-6 w-6'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU" alt="stock"  />
          <p className={'font-bold text-xs ml-3'}>Harry Potter</p>
        </section>
      </section>

      <section className={'flex flex-col items-start justify-center px-5'}>
        <img src="https://media.istockphoto.com/id/963333864/vector/meeting-two-businessmen-and-business-handshake.jpg?s=612x612&w=0&k=20&c=Ls39LjlQBzEhamWQKFfSoAiSUFFSKd5h4244nOTfCZs=" alt="stock" className={'h-[140px] w-48 rounded-lg my-5'}  />
        <h1 className={'text-sm mb-3'}>Category <span className={'ml-3 text-xs font-thin'}>November 22, 2021</span></h1>
        <h2 className={'text-xs font-light'}>Seed round direct mailing non-<br />-disclosure agreement  <br /> graphical user interface rockstar.</h2>
         <section className={' flex flex-row justify-center items-center my-4'}>
        <img className={'rounded-full h-6 w-6'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU" alt="stock"  />
          <p className={'font-bold text-xs ml-3'}>Harry Potter </p>
        </section>
      </section>

      <section className={'flex flex-col items-start justify-center px-5'}>
        <img src="https://media.istockphoto.com/id/1222602525/vector/handshake-of-business-partners.jpg?s=612x612&w=0&k=20&c=XE2Jy-JXgsqxs3pA_RNADnwIHnWeTdB4X5fX7znkIok=" alt="stock"  className={'h-[140px] w-48 rounded-lg my-5'} />
        <h1 className={'text-sm mb-3'}>Category <span className={'ml-3 text-xs font-thin'}>November 22, 2021</span></h1>
        <h2 className={'text-xs font-light'}>Beta prototype sales iPad gen-z <br /> marketing network effects value <br /> proposition</h2>
         <section className={' flex flex-row justify-center items-center my-4'}>
        <img className={'rounded-full h-6 w-6'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8__Nzyv7MNSIA71YRqKt0rPoqEiSiZMZBOw&usqp=CAU" alt="stock"  />
          <p className={'font-bold text-xs ml-3'}>Harry Potter </p>
        </section>
      </section>
     
      </div>
     </section>
     
      
        
      </main>

    </section>
    
    </>
  )
}