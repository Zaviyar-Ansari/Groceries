import React from 'react'

const Navbar = () => {
  return (
    <div>
       <div class="flex p-2 mx-16 justify-between items-center border-b flex-wrap">
    <div class="flex items-center text-lg font-bold">
       <h1>Your Logo</h1> 
    </div>
    <div class="relative flex items-center ml-24">
    <svg class="absolute  left-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input type="text" placeholder="Search" class="border border-gray-200 rounded-full py-1 pl-10 pr-2"/>
</div>


    <div class="flex items-center">
       <ul className='flex flex-row gap-9'>
        <li>Home</li>
        <li>Store</li>
        <li>Contact</li>
        <li>Help</li>
       </ul>
    </div>
</div>
    </div>
  )
}

export default Navbar
