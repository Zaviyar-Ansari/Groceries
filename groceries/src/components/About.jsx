import React from 'react'
import bg1 from './Pic/bg1.jpg';
import bg2 from './Pic/bg2.jfif';
import main1 from './Pic/main1.jfif';
import main2 from './Pic/main2.jfif';
import main3 from './Pic/main3.jfif';
import basket from './Pic/basket.jfif';
import vegi from './Pic/vegi.jfif';
import grapes from './Pic/grapes.jfif';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
  return (
    <div>
    <div className="relative h-screen w-full">
    {/* First Image Section */}
    <div
  className="absolute top-0 left-0 w-1/2 h-full bg-cover bg-center"
  style={{
    backgroundImage: `url(${bg1})`,
    clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)', // Diagonal cut
  }}
>
  {/* Blackish overlay for opacity effect */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  {/* Content section */}
  <div className="relative flex flex-col justify-center items-start h-full pl-16 text-white">
    <h1 className="text-6xl font-dancing-script text-center ml-28 text-yellow-500 font-bold mb-4">About Us</h1>
    <p className="text-lg text-center">
    TextFree is a mobile application and web service <br />
that allows users to send and receive text <br />
messages, as well as make and receive <br />
VoIP phone calls, for free over .
    </p>
  </div>
</div>


    {/* Second Image Section */}
    <div
      className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg2})`,
        clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)', // Inverse diagonal cut
      }}
    >
      {/* Blackish overlay for opacity effect */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex justify-center items-center h-full">
        {/* Content can go here if needed */}
      </div>
    </div>

    {/* Navbar or other content */}
    <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center">
      <h1 className="text-white font-bold">Your Logo</h1>
      <input type="text" placeholder="Search" className="rounded-full px-4 mr-8 py-1" />
      <ul className="flex space-x-8 text-white">
        <li className='active hover:underline underline-offset-2 hover:text-yellow-200 capitalize hover:uppercase'><Link to="/">Home</Link></li>
        <li className='active hover:underline underline-offset-2 hover:text-yellow-200 capitalize hover:uppercase'><Link to="/contact">Contact</Link></li>
        <li className='active hover:underline underline-offset-2 hover:text-yellow-200 capitalize hover:uppercase'><Link to="/about">About</Link></li>
        <li className='active hover:underline underline-offset-2 hover:text-yellow-200 capitalize hover:uppercase'><Link to="/login">Login</Link></li>
        <Link to="/product"><span className='active hover:underline underline-offset-2 hover:text-yellow-200 capitalize hover:uppercase '>Product</span></Link>
      </ul>
    </div>
  </div>
  <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      {/* Grid of 3 Images */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        {/* First Image */}
        <div className="w-full h-[450px]">
          <img src={main1} alt="Image 1" className="w-full h-full object-cover" />
          <div className='text-center'>
          <h1 className='text-xl pt-5 font-bold '>Free text online </h1>
          <p className='text-sm '>TextFree is a mobile application
and web service</p>
<p className='text-md text-gray-400 underline'>See More...</p>
          </div>
        </div>

        {/* Second Image */}
        <div className=" w-full h-[450px]">
          <img src={main2} alt="Image 2" className="w-full h-full object-cover" />
          <div className='text-center'>
          <h1 className='text-xl pt-5 font-bold '>Free text online </h1>
          <p className='text-sm '>TextFree is a mobile application
and web service</p>
<p className='text-md text-gray-400 underline'>See More...</p>
          </div>
        </div>

        {/* Third Image */}
        <div className="w-full h-[450px]">
          <img src={main3} alt="Image 3" className="w-full h-full object-cover" />
          <div className='text-center'>
          <h1 className='text-xl pt-5 font-bold '>Free text online </h1>
          <p className='text-sm '>TextFree is a mobile application
and web service</p>
<p className='text-md text-gray-400 underline'>See More...</p>
          </div>
        </div>
         {/* Text Section Below Images */}
      <div className="mt-48 text-center">
        <h2 className="text-3xl font-semibold">Free text online</h2>
        <p className="text-gray-600 mt-2">
        TextFree is a mobile applicaion and
web service that allows users to send
and receive text messages, as well as
make and receive VoIP phone calls, for
free over .
        </p>
        <p className='text-gray-400 underline'>See More...</p>
      </div>
      </div>
    </div>


  <div className='mt-20 flex w-full h-full'>
  {/* Image Section */}
  <div className='w-1/2'>
  <img src={basket} alt="Basket" className='w-full h-full object-cover' />
  </div>

  {/* Text Section */}
  <div className='w-1/2 flex flex-col bg-gray-100 justify-center p-20'>
    <h1 className='text-2xl font-semibold mb-4'>Free text online.</h1>
    <p className='text-lg'>
      TextFree is a mobile application and web service
      that allows users to send and receive text
      messages, as well as make and receive
      VoIP phone calls, for free over.
      TextFree is a mobile application and web service
      that allows users to send and receive text
      messages, as well as make and receive
      VoIP phone calls, for free over.
    </p>
    <p className='text-black underline'>See More...</p>
  </div>
</div>

<div className='mt-20 flex w-full h-full'>
  {/* Text Section */}
  <div className='w-1/2 flex flex-col justify-center p-20'>
    <h1 className='text-2xl font-semibold mb-4'>Free text online.</h1>
    <p className='text-lg'>
      TextFree is a mobile application and web service
      that allows users to send and receive text
      messages, as well as make and receive
      VoIP phone calls, for free over.
      TextFree is a mobile application and web service
      that allows users to send and receive text
      messages, as well as make and receive
      VoIP phone calls, for free over.
    </p>
    <p className='text-black underline'>See More...</p>
  </div>
  {/* Image Section */}
  <div className='w-1/2'>
  <img src={vegi} alt="Basket" className='w-full h-full object-cover' />
  </div>
</div>
<div className='bg-slate-200 w-full min-h-screen mt-20'>
  <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
    <div className='text-center'>
      <h1 className="text-4xl font-semibold">About Services</h1>
      <p className='text-md'>
        TextFree is a mobile application and web service <br />
        that allows users to send and receive text.
      </p>
    </div>
    {/* Grid of 3 Images */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10">
      {/* First Image */}
      <div className="w-full h-[300px] flex flex-col items-center">
        <img src={main1} alt="Image 1" className="w-full h-full object-cover" />
        <div className='text-center'>
          <h1 className='text-xl pt-5 font-bold'>Free text online</h1>
          <p className='text-sm'>TextFree is a mobile application and web service</p>
          <p className='text-md text-gray-400 underline'>See More...</p>
        </div>
      </div>

      {/* Second Image */}
      <div className="w-full h-[300px] flex flex-col items-center">
        <img src={main2} alt="Image 2" className="w-full h-full object-cover" />
        <div className='text-center'>
          <h1 className='text-xl pt-5 font-bold'>Free text online</h1>
          <p className='text-sm'>TextFree is a mobile application and web service</p>
          <p className='text-md text-gray-400 underline'>See More...</p>
        </div>
      </div>

      {/* Third Image */}
      <div className="w-full h-[394px] flex flex-col items-center">
        <img src={main3} alt="Image 3" className="w-full h-full object-cover" />
        <div className='text-center'>
          <h1 className='text-xl pt-5 font-bold'>Free text online</h1>
          <p className='text-sm'>TextFree is a mobile application and web service</p>
          <p className='text-md text-gray-400 underline'>See More...</p>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='mt-20 flex w-full h-full'>
  {/* Image Section */}
  <div className='w-1/2'>
  <img src={grapes} alt="Basket" className='w-full h-full object-cover' />
  </div>

  {/* Text Section */}
  <div className='w-1/2 flex flex-col justify-center p-20'>
    <h1 className='text-2xl font-semibold mb-4'>Free text online.</h1>
    <p className='text-lg'>
      TextFree is a mobile application and web service
      that allows users to send and receive text
      messages, as well as make and receive
      VoIP phone calls, for free over.
      TextFree is a mobile application and web service
      that allows users to send and receive text
      messages, as well as make and receive
      VoIP phone calls, for free over.
    </p>
    <p className='text-black underline'>See More...</p>
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

export default About