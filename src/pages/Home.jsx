import React from 'react';
import Carousel from '../components/Carousel';
import Category from '../components/Category';
import Deals from '../components/Deals';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-start mt-8 sm:mt-16 space-y-8">
      <div className="sm:container flex flex-col sm:flex-row justify-center items-start w-full sm:space-x-6 gb-gray-600 mb-48">
        <div className="w-full sm:w-1/3">
          <Category />
        </div>
        <div className="w-full h-full sm:w-2/3 m-auto">
          <Carousel />
        </div>       
      </div>   
      <div className=' h-full w-11/12 m-auto flex justify-center' >
          <Deals />
        </div>
    </main>
  );
};

export default Home;
