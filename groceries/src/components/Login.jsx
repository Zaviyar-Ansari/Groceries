import React from 'react'
import login from './Pic/login.jfif';
import google from './Pic/google.webp';
import facebook from './Pic/facebook1.png';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Login = () => {
  return (
    <div>
        <div className='flex w-full h-full relative'>
        <div className="absolute top-0 left-0 w-full p-8">
  <div className="flex flex-row gap-8 justify-between">
    <div>
      <h1 className='text-black font-bold text-3xl'>Your Logo</h1>
    </div>
    
  </div>
</div>


  {/* Text Section */}
  <div className='w-1/2 flex flex-col justify-center items-center p-20 bg-slate-300'>
  <h1 className='text-4xl text-center font-bold'>User Login</h1>

  {/* Social Media Icons */}
  <div className='flex flex-row justify-center space-x-4 mt-6'>
    <img src={google} alt="Google" className='w-8 h-8 mt-4' />
    <h1 className='mt-7'>or</h1>
    <img src={facebook} alt="Facebook" className='w-16 h-16' />
  </div>

  {/* Form */}
  <div className='flex flex-col mt-8 w-full'>
    <label htmlFor="email">E-mail</label>
    <input type="email" id="email" placeholder='Enter your Email' className='rounded-2xl p-2 bg-white' />
    
    <label htmlFor="password" className='mt-4'>Password</label>
    <input type="password" id="password" placeholder='Enter your Password' className='rounded-2xl p-2 bg-white' />
    
    <button className="mt-6 text-black bg-slate-300 border-2 border-yellow-200 text-2xl px-1 py-1 bg-transparent">
      Login Now
    </button>
  </div>

  {/* Help Text */}
  <div className='text-gray-500 text-sm text-center mt-6'>
    <p>Help!</p>
    <p>Forgot Password?</p>
  </div>
</div>

  {/* Image Section */}
  <div className='w-1/2 relative  bg-slate-300 '>
  <img src={login} alt="Basket" className='w-full h-full object-cover rounded-tl-[60vh]' />
  
  {/* Overlay */}
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-tl-[60vh]"></div>
  
  {/* Navigation List */}
  
  
  {/* Centered Text */}
  <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
    <h1 className='text-white text-center p-5 text-3xl '>
      Welcome to Website
    </h1>
    <p className='text-white text-center p-5'>
      TextFree is a mobile application and web service <br />
      that allows users to send and receive text messages, <br />
      as well as make and receive VoIP phone calls, <br />
      for free over the internet.
    </p>
  </div>
</div>
<div className="absolute top-0 right-0 flex flex-row gap-10 text-white p-9">
  <ul className="flex space-x-8 text-white">
        <li className='active hover:underline underline-offset-2 hover:text-yellow-200 capitalize hover:uppercase'><Link to="/">Home</Link></li>
        <li className='active hover:underline underline-offset-2 hover:text-yellow-200 capitalize hover:uppercase'><Link to="/contact">Contact</Link></li>
        <li className='active hover:underline underline-offset-2 hover:text-yellow-200 capitalize hover:uppercase'><Link to="/about">About</Link></li>
        <li className='active hover:underline underline-offset-2 hover:text-yellow-200 capitalize hover:uppercase'><Link to="/login">Login</Link></li>
        <Link to="/product"><span className='active hover:underline underline-offset-2 hover:text-yellow-200 capitalize hover:uppercase '>Product</span></Link>
      </ul>
  </div>

</div>

<div className="w-full">
  {/* Centered background div */}
  <div className="bg-black text-white w-auto py-6 px-12   shadow-lg">
    <div className="text-left font-bold text-3xl mb-6">
      <h1 className='ml-16'>Your <br /> Logo</h1>
    </div>
    <div className="flex flex-row justify-evenly space-x-52">
      {/* First Column */}
      <div className="text-left">
        <h1 className="text-2xl">PRODUCT</h1>
        <p>Product overview</p>
        <p>Omni-Channel</p>
        <p>Sourcing</p>
        <p>Compliance & Contracting</p>
        <p>Payments</p>
        <p>Data & Reporting</p>
      </div>
      {/* Second Column */}
      <div className="text-left">
        <h1 className="text-2xl">PRODUCT</h1>
        <p>Product overview</p>
        <p>Omni-Channel</p>
        <p>Sourcing</p>
        <p>Compliance & Contracting</p>
        <p>Payments</p>
        <p>Data & Reporting</p>
      </div>
      {/* Third Column */}
      <div className="text-left">
        <h1 className="text-2xl">PRODUCT</h1>
        <p>Product overview</p>
        <p>Omni-Channel</p>
        <p>Sourcing</p>
        <p>Compliance & Contracting</p>
        <p>Payments</p>
        <p>Data & Reporting</p>
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="flex justify-end space-x-16 mt-6">
      <a href="#" className="text-white">
        <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
      </a>
      <a href="#" className="text-white">
        <i className="fab fa-twitter"></i> {/* Twitter Icon */}
      </a>
      <a href="#" className="text-white">
        <i className="fab fa-instagram"></i> {/* Instagram Icon */}
      </a>
      <a href="#" className="text-white">
        <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
      </a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login