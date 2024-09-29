import React from 'react'
import kivibg from './Pic/Pic.jfif';

const Contact = () => {
  return (
    <div>
    <div className="relative w-full h-full">
      {/* Background Image */}
      <img src={kivibg} alt="" className="object-cover w-full h-full" />
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Navigation Section */}
      <div className="absolute top-0 left-0 w-full p-8 text-white">
        <div className="flex flex-row gap-8 justify-evenly">
          <div>
            <h1>Your Logo</h1>
          </div>
          <div className="ml-44">
            <input type="search" placeholder="Search" className="border-white rounded-full px-4 py-1" />
          </div>
          <div>
            <ul className="flex flex-row gap-10">
              <li>Home</li>
              <li>Store</li>
              <li>Contact</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Centered Contact Form */}
      <div className="absolute inset-0 flex items-center justify-center mt-5">
        <div className="flex flex-col text-white text-left rounded-lg text-xl w-full p-80">
          <h1 className="text-4xl mb-6 text-center">Contact Us</h1>
         <div className='text-sm'>
         <p className="mb-6 text-center">TextFree is a mobile application and <br /> web service that allows users to send</p>
         </div>
        
        <label htmlFor="name" className="mb-2 ">Name</label>
          <input type="text" id="name" placeholder="Enter Your Name" className="mb-4 p-2 text-black rounded-md bg-white opacity-25" />
          
          <label htmlFor="email" className="mb-2">E-mail</label>
          <input type="email" id="email" placeholder="Enter Your E-mail" className="mb-4 p-2 text-black rounded-md bg-white opacity-25" />
          
          <label htmlFor="password" className="mb-2">Password</label>
          <input type="password" id="password" placeholder="Enter Your Password" className="mb-4 p-2 text-black rounded-md bg-white opacity-25" />
          
          <label htmlFor="message" className="mb-2">Message</label>
          <textarea id="message" placeholder="Enter Your Message" className="mb-6 p-2 text-black rounded-md bg-white opacity-25" />

          <button className="text-yellow-600 border-2 border-yellow-600 rounded-full text-2xl px-10 py-3 bg-transparent hover:bg-yellow-600 hover:text-black">
            Submit
          </button>
        
        </div>
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
  );
}

export default Contact;
