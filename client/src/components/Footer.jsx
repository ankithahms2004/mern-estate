import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset:800,
  once:true,
  duration:1000
});
import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import Swal from 'sweetalert2';





const Footer = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "781db2ce-70d1-4f5e-b8f4-b6a5e45b0ee1");

    const object = Object.fromEntries(formData);
    console.log(object);
    const json = JSON.stringify(object);
    console.log(json);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());
    console.log(res);

    if (res.success) {
      Swal.fire({
        title: "Succes...!",
        text: "Your mail-Id sent Successfully...!",
        icon: "success"
      });
    }
    else{
      Swal.fire({
        title:"Failed...!",
        text:"Mail-Id not sent...!",
        icon:"warning"
      })
    }
  };

  
  return (
    <footer className='bg-gray-900 text-white' data-aos="zoom-in-left">
    <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
    <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-orange-400'>Subscribe </span>to get latest updates</h1>
    <div>
      <form onSubmit={onSubmit}>
      <input type='email' name='email' placeholder='Enter your e-mail' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 md-4 py-2.5 rounded px-2 focus:outline-none'></input>
      <button  type='submit' className='bg-orange-400 hover:bg-orange-500 duration-300 px-5 py-2.5 font-[poppins] rounded-md text-white md:w-auto w-full mt-3 sm:mt-0'>Send</button></form>
    </div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-14'>
     <Link to='/about' className='font-bold hover:text-orange-400 hover:underline'>About</Link>
     <Link to='/sign-in' className='font-bold hover:text-orange-400 hover:underline'>Sign in</Link>
     <Link to='/contact-us' className='font-bold hover:text-orange-400 hover:underline'>Contact us</Link>
    <Link to='sign-in' className='font-bold hover:text-orange-400 hover:underline'>Switch Account</Link>
     <Link to='/profile' className='font-bold hover:text-orange-400 hover:underline'>Profile</Link>
     <Link to='/search' className='font-bold hover:text-orange-400 hover:underline'>Listings</Link>
     <Link to='/create-listing' className='font-bold hover:text-orange-400 hover:underline'>Add Listing</Link>
      <Link to='/privacy' className='font-bold hover:text-orange-400 hover:underline'>Privacy-Policy</Link>
      <Link to='/privacy' className='font-bold hover:text-orange-400 hover:underline'>Terms & Conditions</Link>
      <div className='font-bold '>Email us on : <br/>
     <Link to={'mailto:customerservice@gamil.com'} className='font-bold underline hover:text-blue-400'>customerservice@gamil.com</Link>
      </div>

      <div className='font-bold underline'>
        Follow us on :
        <div className='flex gap-3 mt-2 '>
        <Link className='hover:text-orange-400' to='https://www.facebook.com'><FaFacebookSquare /></Link> 
        <Link className='hover:text-orange-400' to='https://www.instagram.com'><GrInstagram /></Link>
        <Link className='hover:text-orange-400' to='https://www.twitter.com'><FaTwitter /></Link>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
    Copyright © 2024 EliteEstate.Com | All Rights Reserved
    </div>

    </footer>
  )
}

export default Footer