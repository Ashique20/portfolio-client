import React from "react";
import Skill from "../Skill/Skill";


const Info =()=>{
    return(
       <div>
         <div className="hero min-h-screen bg-base-200 ml-[15%] w-[70%]" style={{ backgroundImage: 'url(https://i.ibb.co/862Hj4T/ashq.jpg)' }}>
        <div className="hero-content text-center">
          <div className="max-w-md">
          <h1 className="mb-5 text-[#0B0C10] text-5xl font-bold">Welcome To <span className="text-white">Ashiqur Rahman,s </span> Portfolio</h1>
      <p className="mb-5 text-4xl text-black">I'm a MERN Stack Developer._.</p>
           
          </div>
        </div>
      </div>
      <div>
<h1 className="mt-40 text-white ml-[40%] text-8xl"> My Skills</h1>
<div className="grid grid-cols-3 lg:ml-[30%] lg:grid-cols-4  justfy-center mt-40   lg:w-2/5" style={{ backgroundImage: `url("https://www.pixelstalk.net/wp-content/uploads/2016/05/Black-Wallpapers-Image-Free-Download.jpg")`  }}>
  <Skill name='React JS'  img='https://i.ibb.co/LCRyWnQ/download-removebg-preview-1.png'></Skill>
  <Skill name='HTML'  img='https://i.ibb.co/Nrvhs0S/download-removebg-preview-4.png'></Skill>
  <Skill name='CSS'  img='https://i.ibb.co/H72qdd2/download-removebg-preview-5.png'></Skill>
  <Skill name='Java Script'  img='https://i.ibb.co/8mmMm5G/download.png'></Skill>
  <Skill name='Node Js'  img='https://i.ibb.co/LrGs14Q/download-removebg-preview-3.png' className='w-10'></Skill>
  <Skill name='Tailwind' img='https://i.ibb.co/YfspX3r/download-removebg-preview-6.png'></Skill>
  <Skill name='Bootstrap' img='https://i.ibb.co/7XBKFB2/download-removebg-preview-7.png' className='w-10'></Skill>
  <Skill name='Netlify' img='https://i.ibb.co/r2ZGVs3/download-removebg-preview-10.png' className='w-10'></Skill>
  <Skill name='Json Web Token' img='https://jwt.io/img/pic_logo.svg' className='w-10'></Skill>
  <Skill name='GitHub' img='https://i.ibb.co/YWwx5M3/download-removebg-preview-9.png' className='w-10'></Skill>
  <Skill name='Vercel' img='https://i.ibb.co/gmCFkbZ/download-removebg-preview-11.png' className='w-10'></Skill>
  <Skill name='Express JS' img='https://i.ibb.co/hs0VQ1p/download-removebg-preview-2.png' className='w-10'></Skill>
  <Skill name='Firebase' img='https://i.ibb.co/T8pDnLf/download-removebg-preview-8.png' className='w-10'></Skill>
  <Skill name='Figma' img='https://i.ibb.co/VSPVTyk/download-removebg-preview-12.png' className='w-10'></Skill>
  <Skill name='Mongo DB' img='https://i.ibb.co/mHktBCK/erkxwhl1gd48xfhe2yld.png' className='w-10'></Skill>
 
  
</div>
</div>

       </div>
    )
}

export default Info;