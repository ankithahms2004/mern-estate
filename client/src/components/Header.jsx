import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset:800,
  once:true,
  duration:1000
});
import React,{useState,useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img_1 from "../assets/img_1.png";
import img_4 from "../assets/img_4.jpg";
import img_6 from "../assets/img_6.jpeg";
import img_8 from "../assets/img_8.jpeg";
import img_9 from "../assets/img_9.jpg";
import img_11 from "../assets/img_11.jpeg";
import img_14 from "../assets/img_14.jpeg";
import img_16 from "../assets/img_16.jpeg";
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Header = () => {

const [text] = useTypewriter({
  words:['Get some space in 2024',"Discover a place you'll love to live"],
  loop:{},
})

  const {currentUser} = useSelector(state=>state.user)
  const [searchTerm, setSearchTerm] = useState('');
  const [year,setyear] = useState(2024)
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  ()=>{
    date= new Date();
    date.getFullYear();
    setyear(date)
    
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);


  return (
   
   
  

<header>

     <div className=' overflow-hidden'  data-aos="zoom-in-left">
      <Carousel autoPlay infiniteLoop className='text-center'><div>
        <img alt='' src={img_4}/></div>
        <div><img alt='' src={img_6}/></div>
        <div><img alt='' src={img_9}/></div>
        <div><img alt='' src={img_8}/></div>
        <div><img alt='' src={img_11}/></div>
        <div><img alt='' src={img_14}/></div>
        <div><img alt='' src={img_16}/></div>


        </Carousel>
        <div className='w-full absolute top-0 left-0 p-2'>
        <div className='flex justify-between items-center max-w-6xl mx-auto mt-0 sm:mt-2 '>
    
        <Link to='/'>
    <h1 className='font-bold text-sm sm:text-2xl flex flex-wrap'>
        <span className='text-white'>Elite Estate</span><br/>
      

    </h1>
    </Link>
<form onSubmit={handleSubmit} className='bg-slate-100 m-2 p-2 rounded-full flex items-center'>
    <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button>    <FaSearch className='text-slate-600'/>
            </button>
    </form>
    <ul className='flex gap-3'>
        <Link to='/about'>
        <li className='hidden sm:inline text-white hover:underline text-lg'>About</li></Link>
        <Link to='/profile'>
        <li className=' inline text-white hover:underline text-lg'>Profile</li></Link>

        <Link to='/profile'>
        {currentUser ?
        (<img className='rounded-full h-7 w-7 object-cover' src={img_1} alt='Profile'/>):
       <><Link to='/sign-in'><li className='sm:inline text-white hover:underline text-lg'>Sign in </li></Link>
        
       </> }</Link>

    </ul>
</div>
     <div className='m-3 sm:m-10 p-3 sm:p-10'>
        <h1 className="  sm:relative text-3xl sm:text-5xl text-left items-start justify-start mt-4 sm:mt-20   sm:p-20 sm:pt-5 text-white"><div className='sm:flex top-20 sm:top-0 absolute sm:relative sm:pt-8 sm:flex-col gap-6  max-w-1xl sm:max-w-6xl '>
        <h1 className=' sm:pt-3   text-sm font-bold   sm:text-3xl md:text-3xl lg:text-6xl'>
       <span className='text-white-300 '>{text}</span><Cursor />
          <br />
          <p className='text-gray-200'> with ease...!</p>
       
        </h1>
        <div className='text-white pt-1 sm:pt-3 pb-1 sm:pb-3  text-xs sm:text-sm '>
          <h1 className='text-xs sm:text-sm font-semibold sm:font-bold  sm:max-w-1xl'>
         Elite Estate is the best place to find your next perfect place to
          live.
          <br /> 
          We have a wide range of properties for you to choose from.</h1>
        </div>
      
        <Link
          to={'/search'}
          className='text-xs sm:text-sm  text-white font-bold hover:underline'>
             <button className='bg-orange-500 p-2 rounded-lg  font-semibold sm:font-bold text-sm sm:text-md'>
          Start now
          </button>
        </Link>
       
      </div></h1>
     
     </div>
     </div>
     </div>
</header>

  )
}

export default Header