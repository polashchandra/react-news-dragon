import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Leftnav = () => {
    const[categoris,setcategoris]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setcategoris(data))
    },[]);
    return (
        <div>
            <h1>All Caterogy</h1>
            {
                categoris.map(categori=><NavLink  className='block p-4 btn mb-1 btn-outline' key={categori.id}>{categori.name}</NavLink>)
            }
        </div>
    );
};

export default Leftnav;