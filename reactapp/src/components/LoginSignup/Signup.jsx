import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Signup() {
  
  const { 
    handleSubmit, 
    register, 
    formState: { errors, isSubmitting } 
  } = useForm();
  
 const navigate = useNavigate();
 
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
  
      if(responseData === 'success') {
        navigate('/login');
      } else {
        alert(responseData);
        navigate('/signup');
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("Error during form submission")
    }
  };
  
  return (
    <div className="signuploginpage">
    <div className="loginNav">
    <a className="loginA" href="/"><img className="loginImage" src="./defaultImage/Amazonloginlogo.png" /></a>
    <a className="loginA loginbtn" href="/login">Sign In</a>
    </div>
    
    <div className="loginformdiv">
    {isSubmitting && <div>Loading...</div>}
    <form onSubmit={handleSubmit(onSubmit)} className="loginform">
    
    <div className="LoginFormName"><h1>Sign up</h1></div>    
    
    {errors.email && <p className="error">{errors.email.message}</p>}
    {errors.fullname && <p className="error">{errors.fullname.message}</p>}
    {errors.password && <p className="error">{errors.password.message}</p>}
    
    <input className="loginInput" placeholder="Full Name" type="text" {...register("fullname", { required: {value: true, message: 'FullName is required'}})} />
    <input className="loginInput" placeholder="Email" type="email" {...register("email", { required: {value: true, message: 'Email is required'}})} />
    <input className="loginInput" placeholder="password" type="password" {...register("password", { required: {value: true, message: 'Password is required'}, minLength: {value: 8, message: 'Password is short'}})} />
    
    <button disabled={isSubmitting} type="submit">Sign up</button>
    
    </form>
    </div>
    </div>
    )
}

export default Signup