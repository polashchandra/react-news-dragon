import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import rnavpic1 from '../assets/1.png'
import rnavpic2 from '../assets/2.png'
import rnavpic3 from '../assets/3.png'
const Leftnav = () => {
    const [categoris, setcategoris] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setcategoris(data))
    }, []);
    return (
        <div>
            
            {
                categoris.map(categori => <NavLink className='block p-4 btn mb-1 btn-outline border-none ' key={categori.id}>{categori.name}</NavLink>)
            }
            <div>
                <div className="card bg-base-100 rounded-none shadow-sm">
                    <figure><img src={rnavpic1} alt="Shoes" /></figure>
                    <div className="card-body text-wrap p-3">
                        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <p className='text-2xl text-cyan-400 border-b'>sports</p>
                        <p>{moment().format("MMM D, YYYY")}</p>
                    </div>
                </div>
                <div className="card bg-base-100 rounded-none shadow-sm">
                    <figure><img src={rnavpic2} alt="Shoes" /></figure>
                    <div className="card-body text-wrap p-3">
                        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <p className='text-2xl text-cyan-400 border-b'>sports</p>
                        <p>{moment().format("MMM D, YYYY")}</p>
                    </div>
                </div>
                <div className="card bg-base-100 rounded-none shadow-sm">
                    <figure><img src={rnavpic3} alt="Shoes" /></figure>
                    <div className="card-body text-wrap p-3">
                        <p>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <p className='text-2xl text-cyan-400 border-b'>sports</p>
                        <p>{moment().format("MMM D, YYYY")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leftnav;