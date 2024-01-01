import React from 'react';
import Header from '../shard/header/Header';
import Navbar from '../shard/Navbar';
import Leftnav from '../shard/Leftnav';
import Rightnav from '../shard/Rightnav';
import Newsmarqee from './Newsmarqee';
import { useLoaderData } from 'react-router-dom';
import Media from './Media';

const Home = () => {
    const news=useLoaderData();
    console.log(news)
    return (
        <div>
            <Header></Header>
            <Newsmarqee></Newsmarqee>
            <Navbar></Navbar>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                    <Leftnav></Leftnav>
                </div>
                <div className="md:col-span-2 border">
                    {
                        news?.map(medianews => <Media 
                            key={medianews._id} 
                            newse={medianews}></Media>)
                    }
                </div>
                <div className='border'>
                    <Rightnav></Rightnav>
                </div>
            </div>
        </div>
    );
};

export default Home;