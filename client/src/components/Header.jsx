import React,{useState,useEffect} from 'react'
import { FaSearch } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
import vedio5 from "../assets/vedio5.mp4";
import { useSelector } from 'react-redux';
import img_1 from "../assets/img_1.png";


const Header = () => {

  const {currentUser} = useSelector(state=>state.user)
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);


  return (
   
   
  

<header >
     <div className=' overflow-hidden'>
        <video className='w-100% h-100% object-cover overflow-y-hidden' src={vedio5} autoPlay loop muted></video>
        <div className='w-full absolute top-0 left-0 p-2'>
        <div className='flex justify-between items-center max-w-6xl mx-auto '>
    
        <Link to='/'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-white'>Ankith's </span><br/>
        <span className='text-white'>Estate</span>

    </h1>
    </Link>
<form onSubmit={handleSubmit} className='bg-slate-100 m-2 p-2 rounded-full flex items-center'>
    <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button>    <FaSearch className='text-slate-600'/>
            </button>
    </form>
    <ul className='flex gap-4'>
        <Link to='/'>
        <li className='hidden sm:inline text-white hover:underline text-lg'>Home</li></Link>
        <Link to='/about'>
        <li className='hidden sm:inline text-white hover:underline text-lg'>About</li></Link>

        <Link to='/profile'>
        {currentUser ?
        (<img className='rounded-full h-7 w-7 object-cover' src={img_1} alt='Profile'/>):
       <><Link to='/sign-in'><li className='sm:inline text-white hover:underline text-lg'>Sign in </li></Link>
        
       </> }</Link>

    </ul>
</div>
     <div className='m-10 p-10'>
        <h1 className="flex text-3xl sm:text-5xl text-center items-center justify-center mt-7 sm:mt-20  p-6 sm:p-20  text-white">Start now</h1>
     
     </div>
     </div>
     </div>
</header>

  )
}

export default Header