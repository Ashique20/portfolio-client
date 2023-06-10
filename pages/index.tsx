import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from "react";
import Navber from "./Navber/navber";
import Info from "./Information/info";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardInfo from "./CardInfo/cardInfo";
import Me from "./About me/me";
import Form from "./Form/form";
import Footer from "./Footer/footer";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='lg:max-w-8xl mx-auto px-12 bg-[#0B0C10]'>
            <Navber></Navber>
            <Info></Info>
        <CardInfo></CardInfo>
        <Me></Me>
        <Form></Form>
        <Footer></Footer>
        <ToastContainer />
         
        </div>
  )
}
