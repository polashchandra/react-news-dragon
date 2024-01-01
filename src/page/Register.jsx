import React, { useContext } from 'react';
import Navbar from '../shard/Navbar';
import { Link } from 'react-router-dom';
import { Authcontext } from '../context/context';

const Register = () => {
    const {createuser}=useContext(Authcontext)
    const handlerregister = e =>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const photo=form.get('photo');
        const email=form.get('email');
        const password=form.get('password')

        //create user
        createuser(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(eror=>{
            console.log(eror);
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen  bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-4xl shadow-2xl bg-base-100">
                        <form onSubmit={handlerregister} className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photo' placeholder="url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            <p>Dont’t Have An Account ?<Link to="/register" className='text-red-600 text-bold'>login</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;