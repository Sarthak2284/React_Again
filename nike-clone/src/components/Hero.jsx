import React from 'react';
import shoe_image from '../assets/shoe_image.png';
import amazon from '../assets/amazon.png';
import flipkart from '../assets/flipkart.png';

function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10'>
      {/* Left Section */}
      <div className='w-full md:w-1/2 text-center md:text-left'>
        <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-tight'>
          Your feet <br />Deserve <br />The Best
        </h1>

        <p className='text-gray-600 mt-4 font-medium'>
          Your Feet Deserve the Best and We're here to help you with our shoes. <br className='hidden md:block' />
          Quality and Comfort—All in one step.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start'>
          <button className='bg-black text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-red-700 transition'>
            Shop Now
          </button>
          <button className='border border-gray-600 cursor-pointer text-gray-700 px-6 py-3 rounded-lg hover:bg-green-700 hover:text-white transition'>
            Category
          </button>
        </div>

        <p className='mt-6 text-gray-500 font-medium'>Also Available On</p>
        <div className='flex gap-4 justify-center md:justify-start mt-2'>
          <img src={amazon} alt="Amazon" className='h-8' />
          <img src={flipkart} alt="Flipkart" className='h-8' />
        </div>
      </div>

      {/* Right Section */}
      <div className='w-full md:w-1/2 mt-10 md:mt-0 flex justify-center'>
        <img src={shoe_image} alt="Shoe" className='max-w-xs md:max-w-md lg:max-w-lg drop-shadow-2xl' />
      </div>
    </div>
  );
}

export default Hero;
