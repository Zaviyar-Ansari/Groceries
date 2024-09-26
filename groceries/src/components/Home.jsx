import React from 'react'
import bgimg from './Pic/fruit.jpeg';
import mainimg from './Pic/1.jfif';

const Home = () => {
  return (
    <div className="relative">
    {/* Background Image */}
    <img src={bgimg} alt="" className="object-cover w-full h-auto" />
  
    {/* Black Overlay */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  
    {/* Main Image */}
    <div className="absolute inset-10 left-20 right-20">
      <img src={mainimg} alt="" className="object-cover w-full h-[110vh] rounded-lg" />
    </div>
  
    {/* Navigation bar */}
    <div className="absolute text-white left-24 inset-16">
      <div className="flex flex-row gap-8 justify-evenly">
        <div>
          <h1>Your Logo</h1>
        </div>
        <div className="ml-44">
          <input type="search" placeholder="Search" className="border-white rounded-full" />
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
  
    {/* Content centered in main image */}
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="text-center">
        <h1 className="font-dancing-script text-9xl font-bold text-white">
          Millions of <br />Happy
        </h1>
      </div>
  
      {/* Paragraph */}
      <div className="mt-4 text-center">
        <p className="font-normal text-white text-2xl">
          Send unlimited free texts and make WiFi calls
          <br /> from a free phone number. Download
          <br />
          the free app or sign up online to
          <br />
          pick your free phone number.
        </p>
      </div>
  
      {/* Button */}
      <button className="mt-6 text-yellow-600 border-2 border-yellow-600 rounded-full text-2xl px-10 py-3 bg-transparent">
        Start Now
      </button>
    </div>
  </div>
  
  )
}

export default Home
