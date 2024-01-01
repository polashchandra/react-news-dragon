import React, { useContext } from 'react';
import Navbar from '../shard/Navbar';
import { Link } from 'react-router-dom';
import { Authcontext } from '../context/context';

const Login = () => {

    const { signin } = useContext(Authcontext)
    const handlerlogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        signin(email,password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
        console.log(form)
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlerlogin} className="card-body">
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
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Dont’t Have An Account ?<Link to="/register" className='text-red-600 text-bold'>Register</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;