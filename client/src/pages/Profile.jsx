import React from 'react'
import { useSelector } from 'react-redux'
import currentUser from "../components/PrivateRoute"
import img_1 from "../assets/img_1.png"


const Profile = () => {
  return (
    <div className='p-2 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7 '>Profile</h1>
      <form className='flex flex-col'>
        <img src={img_1} alt='Profile' className='rounded-full pt-2 pb-2 h-22 w-24 object-cover cursor-pointer self-center mt-1'></img>
        <input type='text' placeholder='username' className='border p-3 rounded-lg m-2' id='username'></input>
        <input type='email' placeholder='email' className='border p-3 rounded-lg m-2' id='email'></input>
        <input type='password' placeholder='password' className='border p-3 rounded-lg m-2' id='password'></input>
        <button className='bg-slate-700 text-white rounded-lg p-3 m-2 uppercase hover:opacity-95 disabled:opacity-80'>update</button>
        
      </form>
      <div className='flex justify-between mt-2'> 
        <span className='text-red-700 cursor-pointer'> Delete account ?</span>
        <span className='text-red-700 cursor-pointer'>Sign out ?</span>
      </div>
    </div>
  )
}

export default Profile