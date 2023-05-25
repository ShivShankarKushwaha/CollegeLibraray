import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='w-full  border-2 border-black  flex justify-center  py-20 '>
            <div className='w-1/3 h-full flex flex-col text-center items-center border-2  hover:shadow-xl'>
                <h1 className='text-3xl font-bold text-blue-700 my-10'>SignUp</h1>
                <input className='w-2/3 text-2xl p-2 border-gray-400 border-2 my-5' type="text" name="name" placeholder='Enter Name' />
                <input className='w-2/3 text-2xl p-2 border-gray-400 border-2 my-5' type="email" name="email" placeholder='Enter Email' />
                <input className='w-2/3 text-2xl p-2 border-gray-400 border-2 my-5' type="password" name="password" placeholder='Enter password' />
                <input className='w-2/3 text-2xl p-2 border-gray-400 border-2 my-5' type="password" name="cnfrm_password" placeholder='Confirm Password' />
                <button className='text-2xl text-white font-bold bg-slate-700 p-3 my-5 hover:bg-slate-800'>Sign Up</button>
            </div>
            <div className='w-1/3 h-full flex flex-col text-center items-center border-2 border-l-0  hover:shadow-inner'>
                <h1 className='text-3xl font-bold text-blue-700 my-10'>Login</h1>
                <input className='w-2/3 text-2xl p-2 border-gray-400 border-2 my-5' type="email" name="email" placeholder='Enter Email' />
                <input className='w-2/3 text-2xl p-2 border-gray-400 border-2 my-5' type="password" name="password" placeholder='Enter Password' />
                <button className='text-2xl text-white font-bold bg-slate-700 p-3 my-5 hover:bg-slate-800'>Log In</button>
                <Link className='underline my-2 hover:text-blue-800 text-lg' to="/forgetpass">Forget Password?</Link>
                <Link className='underline mb-28 hover:text-blue-800 text-lg' to="/resetpass">Reset Password?</Link>

            </div>
        </div>
    )
}

export default Login;