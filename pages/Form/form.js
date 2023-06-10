import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";



const Form = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();


  

    const onSubmit = data => {
      console.log(data)
      const result ={
        email:data?.email,
        password:data?.password,
        message:data?.message
      }

      fetch(`https://portfolio-server-gules.vercel.app/message`,{
        method:'POST',

        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(result)
      })
      .then(res =>res.json())
      .then(data=>{
        if(data?.acknowledged
          === true){
            toast.success('Message Sent')
          }
        console.log(data)
      })
   
    };


  
    return (
        <div className="justify-center items-center h-screen flex text-black">
      <div className="card lg:w-[30%] bg-[#1F2833] shadow-xl">
        <div className="card-body">
         
          <div className="flex flex-col w-full border-opacity-50 ">
            <form className="text-black" onSubmit={handleSubmit(onSubmit)}>



              <div className="form-control lg:ml-20 w-full  max-w-xs">
                <label className="label">
                  <span className="label-text text-info">Email</span>

                </label>
                <input
                className="input input-bordered input-info w-[100%] max-w-xs "
                  {...register("email", {
                  
                  })}
                  type="email" placeholder="Your Email"   />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">{errors.email.message}</span>
                  }
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email.message}</span>
                  }

                </label>
              </div>
              <div className="form-control w-full max-w-xs lg:ml-20">
                <label className="label">
                  <span className="label-text text-info">Name</span>

                </label>
                <input
                 className="input input-bordered input-info w-full max-w-xs"
                  {...register("Name", {
                   

                  })}
                  type="text" placeholder="Your name" required />
              

                <input
                className="input input-bordered input-info w-full max-w-xs h-40 " required
                  {...register("message", {
                   

                  })}
                  type="text" placeholder="Your Email"   />
                <label className="label">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">{errors.email.message}</span>
                  }
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email.message}</span>
                  }

                </label>
              </div>
             


             

              <input type="submit" value="Send
              " className="btn btn-outline btn-info ml-28 w-[50%] max-w-xs" required />
            </form>
            
           
          </div>

        </div>
      </div>
    </div>
    );
  };

export default Form;