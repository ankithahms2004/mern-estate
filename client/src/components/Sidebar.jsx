import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {signOutUserStart,deleteUserFailure,deleteUserSuccess} from '../redux/user/userSlice';



const Sidebar = ({sidebarToggle}) => {

    const dispatch = useDispatch();


    const handleSignout = async () => {
        try {
          dispatch(signOutUserStart());
          const res = await fetch('/api/auth/signout');
          const data = await res.json();
          if (data.success === false) {
            dispatch(deleteUserFailure(data.message));
            return;
          }
          dispatch(deleteUserSuccess(data));
        } catch (error) {
          dispatch(deleteUserFailure(data.message));
        }
      };
  return (
    <>
    <div className={` ${sidebarToggle ? "hidden" : "block"} w-64 fixed z-50 transform  transition-transform duration-300 ease-in-out bg-white shadow rounded  h-full `}>
        <div className='my-2 mb-0'>
        
            <h1 className='text-2xl text-black  text-center font-semibold'>EliteEstate</h1>
        </div><br/>
        <hr/>
        <ul className='p-2 text-1xl mt-3'>
            <li className='p-2 hover:underline'>
                <Link to='/'>Home</Link>
            </li>
            <li className='p-2 hover:underline'>
                <Link to='/profile'>Profile</Link>
            </li>
            <li className='p-2 hover:underline'>
                <Link to='/about'>About</Link>
            </li>
            <li className='p-2 hover:underline'>
                <Link to='/search'>Listings</Link>
            </li>
            <li className='p-2 hover:underline'>
                <Link to='/contact-us'>Contact us</Link>
            </li>
            <li className='p-2 hover:underline'>
                <Link to='/create-listing'>Create Listing</Link>
            </li>
            <li className='p-2 hover:underline'>
                <Link to='/privacy'>Privacy Policy</Link>
            </li>
            <li className='p-2 hover:underline'>
                <Link to='/sign-in'>Switch Account</Link>
            </li>
            <li className='p-2 hover:underline'>
                <Link onClick={handleSignout} >Log-out</Link>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Sidebar