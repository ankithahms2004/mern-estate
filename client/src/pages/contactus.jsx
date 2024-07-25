import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset:800,
  once:true,
  duration:1200
});
import React from 'react'
import Dashboard from '../components/Dashboard';
import Swal from 'sweetalert2';

const contactus = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6c63021f-974b-4ac1-97f4-9dd3701938d4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Succes...!",
        text: "Message sent Successfully...!",
        icon: "success"
      });
    }
    else{
      Swal.fire({
        title:"Failed...!",
        text:"Mail Id not sent...!",
        icon:"warning"
      })
    }
  };



  return (
    <>
    <Dashboard/>
    <section data-aos="zoom-in-left" className='flex justify-center items-center min-h-screen '>
      <form className='max-w-2xl w-full p-7 bg-white rounded-2xl shadow m-6' onSubmit={onSubmit}>
        <h2 className='text-3xl text-center font-semibold'>Contact Form</h2>
    <div className='mt-5'><label>Full name</label>
    <input type='text' name='name' className='w-full h-12 bg-transparent bg-white border-2 border-gray-400 outline-none rounded-3xl p-3 text-slate-700 mt-2' placeholder='Enter your name' required/>
    </div>
    <div className='mt-5' ><label>Email Address</label>
    <input type='emial' name='email' className='w-full h-12 bg-transparent bg-white border-2 border-gray-400 outline-none rounded-3xl p-3 text-slate-700 mt-2' placeholder='Enter your mail Id' required/>
    </div> <div className='mt-5' ><label>Your Message</label>
    <textarea name='message' id='' className='w-full h-20 bg-transparent bg-white border-2 rounded-2xl border-gray-400 outline-none  p-3 text-slate-700 mt-1' placeholder='Enter your message' required></textarea>
    </div>
    <button className='w-full h-12 mt-4 bg-violet-600 border-none rounded-2xl shadow text-white font-semibold hover:bg-violet-700 cursor-pointer' type='submit'>Send Message</button>
    </form>
    </section>
    </>
  )
}

export default contactus;