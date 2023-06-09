import React from "react";
import Navber from "./Navber/navber";
import Info from "./Information/info";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardInfo from "./CardInfo/cardInfo";
import Me from "./About me/me";
import Form from "./Form/form";
import Footer from "./Footer/footer";




const Ui =()=>{
    return(
        <div>
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



export default Ui;