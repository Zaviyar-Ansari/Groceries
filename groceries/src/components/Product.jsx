import React from 'react'
import { Link } from 'react-router-dom';
import mangp from './Pic/mangp.jfif';
import slice from './Pic/kivislice.jfif';
import strawberry from './Pic/strawberry.png';
import sec from './Pics/2.webp';
import third  from './Pics/3.jpg';
import forth from './Pics/4.jfif';
import fifth from './Pics/5.jpg';
import six from './Pics/6.jpg';
import seven from './Pics/7.webp';
import eight from './Pics/8.jfif';
import nine from './Pics/9.jpg';
import ten from './Pics/12.jfif';
import eleven  from './Pics/13.jpg';
import twelve from './Pics/15.jfif';
import thirteen from './Pics/16.webp';
import fourteen from './Pics/17.jpg';
import fifteen from './Pics/18.jfif';
import sixteen from './Pics/19.jfif';
import eighteen from './Pics/20.jfif';
import nineteen from './Pics/28.jfif';
import twenty  from './Pics/22.jfif';
import twenty1 from './Pics/29.jfif';
import twenty2 from './Pics/24.jfif';
import twenty3 from './Pics/25.jfif';
import twenty4 from './Pics/26.jfif';
import twenty5 from './Pics/27.jfif';
import twenty6 from './Pics/28.jfif';
import new21 from './Pics/21new.jfif';
import new22 from './Pics/22new.jpg';
import new23 from './Pics/23new.jfif';
import new24 from './Pics/31new.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Product = () => {
    return (
    <div className='bg-slate-200 h-full w-full'>
        <div className=" text-gray-500 left-24 inset-16 ">
        <div className="flex flex-row gap-8 justify-evenly py-4">
        <div>
        <h1 className='text-2xl font-semibold'>Your Logo</h1>
        </div>
        <div className="ml-44">
        <input type="search" placeholder="Search" className="border-white rounded-full pl-2" />
        </div>
        <div className="flex flex-row gap-10">
            <Link to="/"><span className='active hover:underline underline-offset-2 hover:text-yellow-500 capitalize hover:uppercase'>Home</span></Link>
            <Link to="/contact"><span className='active hover:underline underline-offset-2 hover:text-yellow-500 capitalize hover:uppercase'>Contact</span></Link>
            <Link to="/about"><span className='active hover:underline underline-offset-2 hover:text-yellow-500 capitalize hover:uppercase'>About</span></Link>
            <Link to="/login"><span className='active hover:underline underline-offset-2 hover:text-yellow-500 capitalize hover:uppercase '>Login</span></Link>
            <Link to="/product"><span className='active hover:underline underline-offset-2 hover:text-yellow-500 capitalize hover:uppercase '>Product</span></Link>
        </div>
    </div>
    </div>

    <div className='mt-10 flex w-full h-full'>
        {/* Text Section */}
    <div className='w-1/2 flex flex-col justify-center p-20'>
    <h1 className='text-4xl mb-4 text-gray-400 font-bold '>Testy and<span className='text-yellow-500 font-dancing-script text-9xl'> <br /> Fresh</span></h1>
    <p className='text-lg text-black'>
    A mango is an edible stone fruit <br />
produced by the tropical tree <br />
<span className='underline underline-offset-2'>Mangifera indica.</span>
    </p>
    

<div className="flex items-center">
    <svg className="w-10 h-10 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg class="w-10 h-10 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-10 h-10 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-10 h-10 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-10 h-10 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
</div>

    <button className="mt-6 text-black font-bold  border-2 border-yellow-600 rounded-xl text-3xl px-10 py-3 bg-transparent">
        Buy Now
    </button>
    </div>
  {/* Image Section */}
    <div className='w-1/2'>
    <img src={mangp} alt="Basket" className='w-full h-full object-cover rounded-l-[20vh]' />
</div>
</div>

<section class="text-gray-600 body-font bg-white mt-20">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={sec}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={third}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={forth}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={fifth}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={six}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={seven}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={eight}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={nine}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      
    </div>
  </div>
</section>


<div className='relative w-full max-w-full mt-20'>
    {/* Juice bottle image */}
    <div className="relative w-full h-[55vh]">
        <img src={slice} alt="Juice Bottle" className='w-full h-full object-cover' />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 mix-blend-multiply"></div>
    </div>

    {/* Container for text and image */}
    <div className='absolute w-full h-[55vh] top-0 flex items-center justify-evenly'>
        {/* Text in the center */}
        <div className='flex flex-col'>
            <h1 className='text-4xl mb-4 text-left text-gray-400 font-bold'>Tasty and
                <span className='text-yellow-500 font-dancing-script text-6xl'><br /> Fresh</span>
            </h1>
            <p className='text-2xl text-white text-center'>
                A mango is an edible stone fruit <br />
                produced by the tropical tree <br />
                <span className='underline underline-offset-2'>Mangifera indica.</span>
            </p>
        </div>

        {/* Strawberry image */}
        <div>
            <img src={strawberry} alt="Juice" className='h-[55vh] object-contain' />
        </div>
    </div>
</div>

<section class="text-gray-600 body-font bg-white mt-20">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={ten}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={eleven}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={twelve}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={thirteen}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={fourteen}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={fifteen}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={sixteen}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={eighteen}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      
    </div>
  </div>
</section>

<div className='flex flex-row justify-evenly mt-20'>
  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a class="block relative h-[120vh] w-[70vh] rounded-3xl overflow-hidden"> {/* Updated height and width */}
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={new21} />
    </a>
    <div class="mt-4">
      <div className='flex flex-row justify-between'>
        <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
        <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
        </div>
      </div>
      <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
      <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
    </div>
  </div>

  <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
    <a class="block relative h-[120vh] w-[70vh] rounded-3xl overflow-hidden"> {/* Updated height and width */}
      <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={new22} />
    </a>
    <div class="mt-4">
      <div className='flex flex-row justify-between'>
        <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
        <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
        </div>
      </div>
      <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
      <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
    </div>
  </div>
</div>


<div className='relative w-full max-w-full mt-20'>
    {/* Juice bottle image */}
    <div className="relative w-full h-[55vh]">
        <img src={new23} alt="Juice Bottle" className='w-full h-full object-cover' />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 mix-blend-multiply"></div>
    </div>

    {/* Container for text and image */}
    <div className='absolute w-full h-[55vh] top-0 flex items-center justify-evenly'>
        {/* Text in the center */}
        <div className='flex flex-col'>
            <h1 className='text-4xl mb-4 text-left text-gray-400 font-bold'>Tasty and
                <span className='text-yellow-500 font-dancing-script text-6xl'><br /> Fresh</span>
            </h1>
            <p className='text-2xl text-white text-center'>
                A mango is an edible stone fruit <br />
                produced by the tropical tree <br />
                <span className='underline underline-offset-2'>Mangifera indica.</span>
            </p>
        </div>

    </div>
</div>

<section class="text-gray-600 body-font bg-white mt-20">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={nineteen}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={twenty}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={twenty1}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={twenty2}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={twenty3}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={twenty4}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={twenty5}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={twenty6}/>
        </a>
        <div class="mt-4">
          <div className='flex flex-row justify-between'>
          <h3 class="text-yellow-500 text-xl font-dancing-script tracking-widest title-font mb-1">Fresh</h3>
          <div className='flex flex-row'>
          <p>4.3</p>
          <svg className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
          </div>
          </div>
          <h2 class="text-gray-900 title-font text-lg">A mango is an edible stone fruit.</h2>
          <button className='text-center px-5 border-yellow-200 border-collapse font-bold text-xl text-black border-2 rounded-full'>Add to Cart</button>
        </div>
      </div>
      
    </div>
  </div>
</section>





<div className='relative w-full max-w-full mt-20'>
    {/* Juice bottle image */}
    <div className="relative w-full h-[55vh]">
        <img src={new24} alt="Juice Bottle" className='w-full h-full object-cover' />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 mix-blend-multiply"></div>
    </div>

    {/* Container for text and image */}
    <div className='absolute w-full h-[55vh] top-0 flex items-center justify-end px-20'>
        {/* Text in the center */}
        <div className='flex flex-col'>
            <h1 className='text-4xl mb-4 text-left text-gray-400 font-bold'>Tasty and
                <span className='text-yellow-500 font-dancing-script text-6xl'><br /> Fresh</span>
            </h1>
            <p className='text-2xl text-white text-center'>
                A mango is an edible stone fruit <br />
                produced by the tropical tree <br />
                <span className='underline underline-offset-2'>Mangifera indica.</span>
            </p>
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
)
}

export default Product