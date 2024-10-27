import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const { 
    handleSubmit, 
    register, 
    formState: { errors, isSubmitting } 
  } = useForm();
  
 const navigate = useNavigate();
 
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if(responseData.message === "successful") {
        localStorage.setItem('token', responseData.token);
        navigate('/profile');
      } else {
        alert(responseData);
        navigate('/login');
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };
  
  return (
    <div className="signuploginpage">
    <div className="loginNav">
    <a className="loginA" href="/"><img className="loginImage" src="./defaultImage/Amazonloginlogo.png" /></a>
    <a className="loginA loginbtn" href="/signup">Sign up</a>
    </div>
    
    <div className="loginformdiv">
    {isSubmitting && <p>Loading...</p>}
    <form onSubmit={handleSubmit(onSubmit)} className="loginform">
    
    <div className="LoginFormName"><h1>Login</h1></div>
    
    {errors.email && <p className="error">{errors.email.message}</p>}
    {errors.password && <p className="error">{errors.password.message}</p>}
    <input className="loginInput" placeholder="Email" type="email" {...register("email", { required: {value: true, message: 'Email is required'}})} />
    <input className="loginInput" placeholder="Password" type="password" {...register("password", { required: {value: true, message: 'Password is required'}})} />
    
    <button disabled={isSubmitting} type="submit">Login</button>
    
    </form>
    </div>
    
    </div>
    );
};

export default Login;