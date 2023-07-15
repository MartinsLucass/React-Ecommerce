import React from 'react';
import Carousel from '../components/Carousel';
import Category from '../components/Category';


const Home = () => {

  return (
    <main className="flex flex-col w-screen items-center justify-center mt-8">
      <div className='flex flex-col sm:flex-row justify-center container items-center w-full space-x-4'>
      <div className='h-full'>
        <Category />
      </div>
      <div className='sm:w-2/3 w-full'> 
      <Carousel />
      </div>
      </div>
      
    
    </main>
  );
};

export default Home;
