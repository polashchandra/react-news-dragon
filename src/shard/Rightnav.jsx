import React from 'react';
import navphoto1 from '../assets/qZone1.png'
import navphoto2 from '../assets/qZone2.png'
import navphoto3 from '../assets/qZone3.png'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
const Rightnav = () => {
    return (
        <div>
            <div className='p-4 space-y-4 '>
                <h1 className='text-4xl'>Login With</h1>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Login with Google
                </button>
            </div>
            {/* Find Us On */}
            <div className='p-4 mb-6'>
                <h1 className='text-4xl mb-4'>Login With</h1>
                <a className=" flex p-4  text-lg items-center w-full border rounded-t-lg">
                    <FaFacebook className='mr-3'></FaFacebook>
                    Facebook
                </a>
                <a className=" flex p-4  text-lg items-center w-full border-x">
                    <FaInstagram className='mr-3'></FaInstagram>
                    Instragram
                </a>
                <a className=" flex p-4  text-lg items-center w-full border rounded-b-lg">
                    <FaTwitter className='mr-3'></FaTwitter>
                        Twiters
                </a>
            </div>
            {/* picture navright */}
            <div className='p-4 mb-6'>
                <h1 className='text-4xl mb-4'>Q-Zone</h1>
                <img src={navphoto1} alt="" />
                <img src={navphoto2} alt="" />
                <img src={navphoto3} alt="" />
            </div>
        </div>
    );
};

export default Rightnav;