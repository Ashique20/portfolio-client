import React from "react";

const Card = ({ link, img, info, name,client,server }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full mt-[30%]">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">{name}</h2>
        <p className="text-white">{info}</p>
        <div className="flex ">
        <div className="card-actions ">
          <a href={client}><button className="btn btn-square btn-outline hover:bg-white ">
            <img className="w-8 " src="https://cdn.onlinewebfonts.com/svg/img_2426.png" alt="" />
          </button></a>
        </div>
        <div className="card-actions lg:ml-10">
         <a href={server}> <button className="btn btn-square btn-outline hover:bg-white ">
            <img className="w-8 " src="https://cdn.onlinewebfonts.com/svg/img_2426.png" alt="" />
          </button></a>
        </div>
        <div className="card-actions ml-36">
          <a href={link}><button className="btn btn-active btn-ghost hover:bg-white">Show</button></a>
        </div>
        </div>
        

      </div>
    </div>
  )
}


export default Card;