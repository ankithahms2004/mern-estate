import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'


const Signin = () => {
  const [formData,setFormData] = useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const navigate=useNavigate();


  const handleChange = (e)=>{
    setFormData(
      {
        ...formData,
        [e.target.id]:e.target.value,
      }
    )

  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      setLoading(true);
    const res = await fetch('/api/auth/signin',{
      method:"POST",
      headers:{
        "content-Type":"application/json",
      },
      body:JSON.stringify(formData),
    }
  )
const data = await res.json();
if(data.success === false){
  setLoading(false);
  setError(data.message);
  return
}
setLoading(false);
setError(null);
navigate('/');

    }catch(error){
setLoading(false);
setError(error.message);
    }
    
};

  return (
   
    <div className='p-3 max-w-lg mx-auto '>
      <h1 className='text-3xl text-center font-bold my-7 p-3'>Sign in</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} ></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} ></input>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading' : 'Sign in'}</button>
      </form>
      <div className='flex gap-2 mt-3'>
        <p>Dont have an account ?</p>
        <Link to={"/sign-up"}>
        <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {
        error && <p className='text-red-500 mt-5'>{error}</p>
      }
      </div>
      
  )
}

export default Signin