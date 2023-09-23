import React  from "react";
import Card from "../Card/card";



const CardInfo =()=>{
    return(
     
       <div>
        <h1 className="mt-[10%] ml-[48%] text-white  text-5xl">My Projects</h1>
         <div className=" grid grid-cols-1 lg:grid-cols-3  justfy-center  lg:ml-28 " >
          <Card client='https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-Ashique20' server='https://github.com/Ashique20/manufacture-server' name='Warehouse' info='This Webside is about A warehouse where consumers can Buy goods according to their need' link='https://assignment11-72007.web.app/' img="https://cdn3.vectorstock.com/i/1000x1000/39/82/3d-isometric-site-template-warehouse-vector-22653982.jpg"></Card>
                <Card client='https://github.com/Ashique20/manufacture-client/tree/main/src/Pages/DashBoard' server='https://github.com/Ashique20/manufacture-server' name='Manufacture' info='This One is about Manufacturing tools. Where consumers can but tools for their use' link='https://assignment-0-8-isov.vercel.app/' img="https://img.freepik.com/free-vector/box-wrench_53876-20246.jpg?w=900&t=st=1684311064~exp=1684311664~hmac=22df0e121266b3114b1a8040536b785d7f151544405b999d63ad4ca72199a55b"></Card>
                <Card client='https://github.com/Ashique20/assignment--0.8' name='Cars' info='This one of the old but favourate of mine projects made by me where user can choose cars' link='https://assignment-0-8-isov.vercel.app/' img="https://img.freepik.com/free-photo/white-coupe-sport-car-standing-road-front-view_114579-4005.jpg?w=900&t=st=1666548537~exp=1666549137~hmac=e65d0ea7f5d8b8224cf0aa19aba1a4abf1af630f32590640b24655f521e352ee"></Card>
        </div>
       </div>
    )
}


export default CardInfo;