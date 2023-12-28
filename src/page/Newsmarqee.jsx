import React from 'react';
import Marquee from "react-fast-marquee";
const Newsmarqee = () => {
    return (
        <div className='flex border p-3'>
            <button className="btn btn-secondary">Secondary</button>
            <Marquee  className='text-2xl'>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default Newsmarqee;