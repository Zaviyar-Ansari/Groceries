import React from 'react'
import bgimg from './Pic/fruit.jpeg';
import mainimg from './Pic/1.jfif';
import bgimg2 from './Pic/Downpic.jpg';
import juicebottel from './Pic/images.jpg';
import juice from './Pic/orangejuice.avif';
import coac from './Pic/14.png';
import first from './Pic/30.jfif';
import second from './Pic/23.jfif';
import third from './Pic/24.jfif';
import forth from './Pic/25.jfif';
import fifth from './Pic/45.jfif';
import milk from './Pic/2.jfif';
import feed from './Pic/3.jfif';
import jam from './Pic/4.jfif';
import leg from './Pic/5.jfif';
import carret from './Pic/6.jpeg';
import cucumber from './Pic/7.jpg';
import kale from './Pic/8.jfif';
import cabbage from './Pic/9.jpg';
import cocacola from './Pic/15.jfif';
import sprite from './Pic/16.jfif';
import fanta from './Pic/17.jfif';
import sting from './Pic/18.jfif';
import kivi from './Pic/28.jfif';
import banana from './Pic/29.jfif';
import peach from './Pic/31.jpg';
import mango from './Pic/32.jfif';
import orange from './Pic/33.jfif';
import oil from './Pic/43.jfif';
import pasta from './Pic/38.jpg';
import aata from './Pic/39.jpg';
import spegity from './Pic/42.jpg';
import milkbox from './Pic/45.jfif';
import pineapple  from './Pic/46.jfif';
import pineslice from './Pic/47.jfif';
import mix from './Pic/48.jfif';
import vegbag from './Pic/50.jfif';
import tomato from './Pic/51.jfif';
import cooking from './Pic/52.jfif';
import wine from './Pic/53.jfif';
const Home = () => {
  return (
    <div>
    <div className="relative">
    <img src={bgimg} alt="" className="object-cover w-full h-full" />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    <div className="absolute inset-10 left-20 right-20">
    <img src={mainimg} alt="" className="object-cover w-full h-auto max-h-[190vh] rounded-lg" />
    </div>
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
  
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="font-dancing-script text-9xl font-bold text-white">
          Millions of <br />Happy
        </h1>
      </div>
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
      <button className="mt-6 text-yellow-600 border-2 border-yellow-600 rounded-full text-2xl px-10 py-3 bg-transparent">
        Start Now
      </button>
    </div>
    </div>
    
    <div className='relative'>
  <img src={bgimg2} className="object-cover w-full h-auto" alt="background" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

  {/* Centering the product list */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md text-center">
      <h2 className="text-4xl font-extrabold text-black mb-16 text-left">Top Seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
      <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={milk} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Full Creame Milk</h3>
              <h4 class="text-xl text-white font-bold mt-3 text-left">1500ml</h4>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>

        {/* Repeat similar structure for other products */}
        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={feed}  alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Dog Feed</h3>
              <h4 class="text-xl text-white font-bold mt-3 text-left">1500g</h4>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>
        {/* More products here... */}
        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={jam}  alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">jam</h3>
              <h4 class="text-xl text-white font-bold mt-3 text-left">100ml</h4>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>

        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={leg}  alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Derm Sticks</h3>
              <h4 class="text-xl text-white font-bold mt-3 text-left">1000g</h4>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='relative'>
  {/* Background image */}
  <img src={bgimg2} className="object-cover w-full h-auto" alt="background" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

  <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center -mt-96'>
  <div className='relative w-full max-w-6xl px-8'>
    {/* Juice bottle image */}
    <div className="relative w-full h-[55vh]">
      <img src={juicebottel} alt="Juice Bottle" className='w-full h-full object-cover' />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 mix-blend-multiply"></div>
    </div>

    {/* Juice image on the left side */}
    <img src={juice} alt="Juice" className='absolute h-[55vh] top-1/2 left-0 transform -translate-y-1/2 p-9 ml-4' />

    {/* Text in the center of the juicebottel image */}
    <div className='absolute w-full h-[55vh] top-0 flex flex-col justify-center items-center'>
      <h1 className='text-5xl text-white font-bold mb-4'>Top Seller</h1>
      <p className='text-2xl text-white text-center max-w-2xl'>
        “On a recent test run of all three services, Text Free was the fastest, most reliable, and easiest to use."
      </p>
    </div>
  </div>
  
</div>
{/* Centering the product list */}
<div className="absolute mt-44 inset-0 flex justify-center items-center">
    <div className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md text-center">
      <h2 className="text-4xl font-extrabold text-black mb-16 text-left">Top Seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
      <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={carret} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Carret</h3>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>

        {/* Repeat similar structure for other products */}
        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={cucumber} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Calabash</h3>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>
        {/* More products here... */}
        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={kale} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Kale</h3>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>

        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={cabbage} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Cabbage</h3>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='relative w-full h-[120vh] flex justify-center items-center'>
  {/* Background image */}
  <img src={bgimg2} className="absolute object-cover w-full h-full" alt="background" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

  {/* Centered container with green background */}
  <div className="relative z-10 flex h-[120vh] w-[80%] max-w-4xl bg-green-950 rounded-lg p-8 items-center mt-5">

{/* Left side: coac image */}
<div className="w-1/2 flex justify-center p-4"> {/* Added padding here */}
    <img className="rounded-t-lg max-w-full max-h-[90vh] object-cover" src={coac} alt="Coca Cola" />
</div>

{/* Right side: text content */}
<div className="w-1/2 text-white flex flex-col pl-8">
    <h1 className="text-4xl font-bold mb-4">Coca Cola</h1>
    <span className="text-xl font-semibold mb-2">1 litre</span>
    <p className="text-lg mb-6">“On a recent test run of all three services."</p>
    <button className="bg-green-950 border-orange-500 border-2 border-separate text-white font-semibold py-2 px-4 rounded-lg">
        Add to Cart
    </button>
</div>
</div>

</div>


<div className='relative'>
  {/* Background image */}
  <img src={bgimg2} className="object-cover w-full h-auto" alt="background" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  <div className="absolute inset-0 flex justify-center items-center mt-10">
    <div className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md text-center">
      <h2 className="text-4xl font-extrabold text-black mb-16 text-left">Top Seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
      <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={cocacola} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Coca Cola Drink</h3>
              <h4 class="text-xl text-white font-bold mt-3 text-left">1.5liter</h4>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>

        {/* Repeat similar structure for other products */}
        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={sprite} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Sprite Drink</h3>
              <h4 class="text-xl text-white font-bold mt-3 text-left">1.5liter</h4>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>
        {/* More products here... */}
        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={fanta} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Fanta Drink</h3>
              <h4 class="text-xl text-white font-bold mt-3 text-left">1.5liter</h4>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>

        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={sting} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Sting Drink</h3>
              <h4 class="text-xl text-white font-bold mt-3 text-left">120ml</h4>
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="relative h-full">
  {/* Background image */}
  <img src={bgimg2} className="object-cover w-full h-full" alt="background" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

  <div className="absolute inset-0 flex justify-center items-center -mt-96">
    <div className="grid grid-cols-3 gap-4 w-3/4">
      
      {/* Left Side Images */}
      <div className="flex flex-col justify-between space-y-4">
        <img
          src={first}
          alt="Left Image 1"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src={second}
          alt="Left Image 2"
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>

      {/* Center Image */}
      <div className="flex justify-center items-center">
        <img
          src={third}
          alt="Center Image"
          className="w-full h-96 object-cover rounded-xl"
        />
      </div>

      {/* Right Side Images */}
      <div className="flex flex-col justify-between space-y-4 ">
        <img
          src={forth}
          alt="Right Image 1"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src={fifth}
          alt="Right Image 2"
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
</div>
<div className='relative'>
  {/* Background image */}
  <img src={bgimg2} className="object-cover w-full h-auto" alt="background" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

  <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center -mt-[100vh]'>
  <div className='relative w-full max-w-6xl px-8'>
    {/* Juice bottle image */}
    <div className="relative w-full h-[55vh]">
      <img src={bgimg} alt="Juice Bottle" className='w-full h-full object-cover' />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 mix-blend-multiply"></div>
    </div>

    {/* Juice image on the left side */}
    <img src={kivi} alt="Juice" className='absolute h-[55vh] top-1/2 left-0 transform -translate-y-1/2 p-9 ml-4 w-80 rounded-lg' />


    {/* Text in the center of the juicebottel image */}
    <div className='absolute w-full h-[55vh] top-0 flex flex-col justify-center items-center'>
      <h1 className='text-5xl text-white font-bold mb-4'>Top Seller</h1>
      <p className='text-2xl text-white text-center max-w-2xl'>
        “On a recent test run of all three services, Text Free was the fastest, most reliable, and easiest to use."
      </p>
    </div>
  </div>
  
</div>
{/* Centering the product list */}
<div className="absolute -mt-[20vh] inset-0 flex justify-center items-center">
    <div className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md text-center">
      <h2 className="text-4xl font-extrabold text-black mb-16 text-left">Top Seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        
      <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={banana} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Banana</h3>
              
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>

        {/* Repeat similar structure for other products */}
        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={peach} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Peach</h3>
              
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>
        {/* More products here... */}
        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={mango} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Mango</h3>
              
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>

        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={orange} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Orange</h3>
              
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="relative h-full">
  {/* Background image */}
  <img src={bgimg2} className="object-cover w-full h-full" alt="background" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center -mt-96'>
  <div className='relative w-full max-w-6xl px-8'>
    {/* Juice bottle image */}
    <div className="relative w-full h-[55vh]">
      <img src={bgimg} alt="Juice Bottle" className='w-full h-full object-cover' />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 mix-blend-multiply"></div>
    </div>

    {/* Juice image on the left side */}
    <img src={kivi} alt="Juice" className='absolute h-[55vh] top-1/2 left-0 transform -translate-y-1/2 p-9 ml-4 w-80 rounded-lg' />

    {/* Text in the center of the juicebottel image */}
    <div className='absolute w-full h-[55vh] top-0 flex flex-col justify-center items-center'>
      <h1 className='text-5xl text-white font-bold mb-4'>Top Seller</h1>
      <p className='text-2xl text-white text-center max-w-2xl'>
        “On a recent test run of all three services, Text Free was the fastest, most reliable, and easiest to use."
      </p>
    </div>
  </div>
</div>

  </div>
  <div className="relative h-full">
  {/* Background image */}
  <img src={bgimg2} className="object-cover w-full h-full" alt="background" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  <div className="absolute inset-0 flex justify-center items-center -mt-[270vh]">
    <div className="grid grid-cols-3 gap-4 w-3/4">
      
      {/* Left Side Images */}
      <div className="flex flex-col justify-between space-y-4">
        <img
          src={oil}
          alt="Left Image 1"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src={pasta}
          alt="Left Image 2"
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>

      {/* Center Image */}
      <div className="flex justify-center items-center">
        <img
          src={aata}
          alt="Center Image"
          className="w-full h-96 object-cover rounded-xl"
        />
      </div>

      {/* Right Side Images */}
      <div className="flex flex-col justify-between space-y-4 ">
        <img
          src={spegity}
          alt="Right Image 1"
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src={milkbox}
          alt="Right Image 2"
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
    </div>
  </div>
  </div>

  <div className="relative h-full">
  {/* Background image */}
  <img src={bgimg2} className="object-cover w-full h-full" alt="background" />
  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  <div className="absolute -mt-[366vh] inset-0 flex justify-center items-center">
    <div className="font-sans p-4 mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-md text-center">
      <h2 className="text-4xl font-extrabold text-black mb-16 text-left">Top Seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={oil} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Cooking Oil</h3>
            
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>

        {/* Repeat similar structure for other products */}
        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={pasta} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Pasta</h3>
              
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>
        {/* More products here... */}
        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={aata} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Aata</h3>
          
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>

        <div class="bg-green-950p-2 overflow-hidden cursor-pointer rounded-3xl">
          <div class="bg-green-950 flex flex-col h-full">
            <div class="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8">
              <img src={milkbox} alt="food3"
                class="h-full w-full object-cover p-6" />
            </div>
            <div class="p-6 text-center flex-1">
              <h3 class="text-lg font-bold text-white text-left">Milk Pack</h3>
          
              <p className='text-white text-left'>“On a recent test run of all three services</p>
              <button type="button" class="bg-green-950 border-orange-500 border-2 border-separate font-semibold rounded-3xl text-white text-sm px-2 py-2.5 w-full">Add to Cart</button>            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-green-950 py-10 m-20 absolute -mt-[200vh] rounded-3xl">
    <div class="grid gap-2 py-5 pl-5">
        <div>
            <img class="w-full h-full object-cover rounded-xl" src={pineapple} alt="Pineapple"/>
        </div>
        <div>
            <img class="w-full h-full object-cover rounded-xl" src={pineslice} alt="Pineapple Slice"/>
        </div>
    </div>
    <div class="grid gap-2 py-5">
        <div>
            <img class="w-full h-full object-cover rounded-xl" src={vegbag} alt="Vegetable Bag"/>
        </div>
        <div>
            <img class="w-full h-72 object-cover rounded-xl" src={mix} alt="Mixed Vegetables"/>
        </div>
    </div>
    <div class="grid gap-2 py-5">
        <div>
            <img class="w-full h-full object-cover rounded-xl" src={tomato} alt="Tomato"/>
        </div>
        <div>
            <img class="w-full h-full object-cover rounded-xl" src={cooking} alt="Cooking"/>
        </div>
    </div>
    <div class="grid gap-2 py-5 pr-5">
        <div>
            <img class="w-full h-42 object-cover rounded-xl" src={wine} alt="Wine"/>
        </div>
        <div>
            <img class="w-full h-64 object-cover rounded-xl" src={jam} alt="Jam"/>
        </div>
    </div>
</div>

<div className="absolute mt-[87vh] inset-0 flex items-center justify-center">
  {/* Centered background div */}
  <div className="bg-green-950 text-white w-auto py-6 px-12 mx-6 rounded-lg shadow-lg">
    <div className="text-left font-bold text-3xl mb-6">
      <h1>Your <br /> Logo</h1>
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
  
    </div>
  )
}

export default Home
