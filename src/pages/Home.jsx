import React from 'react';
import Carousel from '../components/Carousel';
import Category from '../components/Category';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-8 sm:mt-16">
      <div className="sm:container flex flex-col sm:flex-row justify-center items-start w-full sm:space-x-6">
        <div className="w-full sm:w-1/3">
          <Category />
        </div>
        <div className="w-full h-full sm:w-2/3">
          <Carousel />
        </div>
      </div>
    </main>
  );
};

export default Home;
