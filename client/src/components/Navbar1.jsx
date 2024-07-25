import { useContext, createContext, useState,useEffect } from "react"
import { FaBars } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";



const Navbar1 = ({sidebarToggle,setSidebarToggle}) => {
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
   
    <nav className="bg-white px-4  mr-0 py-3 flex shadow justify-between ">
        <div className="flex items-center">
            <FaBars className="me-4 text-2xl cursor-pointer" onClick={()=>setSidebarToggle(!sidebarToggle)}/><br/>
            <p className='font-bold  text-sm  sm:text-2xl flex flex-wrap pl-3 text-slate-600'>
    EliteEstate
        </p>
        </div>
        <div className="flex items-center gap-x-5">
            <div className="relative pr-4 md:w-65">
        <form onSubmit={handleSubmit} className='bg-slate-100 m-2 p-2 rounded-full flex items-center'>
    <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
            <button>    <FaSearch className='text-slate-600'/>
            </button>
    </form>
    </div>
    <div className="px-3">
    <ul className='flex gap-4 text-right justify-end'>
        <Link to='/'>
        <li className='hidden sm:inline text-slate-600 hover:underline text-lg'>Home</li></Link>
        <Link to='/about'>
        <li className=' inline text-slate-600 hover:underline text-lg'>About</li></Link>
        </ul>
        </div>
        </div>







    </nav>


        
    

  )
}

export default Navbar1;