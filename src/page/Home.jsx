import React from 'react';
import Header from '../shard/header/Header';
import Navbar from '../shard/Navbar';
import Leftnav from '../shard/Leftnav';
import Rightnav from '../shard/Rightnav';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                    <Leftnav></Leftnav>
                </div>
                <div className="md:col-span-2 border">
                    <h2 className='text-2xl'>news dragon home</h2>
                </div>
                <div className='border'>
                    <Rightnav></Rightnav>
                </div>
            </div>
        </div>
    );
};

export default Home;