import React from 'react';

function Hero() {
  return (
    <div
    className="flex items-center justify-center h-screen text-white"
    style={{
      backgroundImage: "url('https://t3.ftcdn.net/jpg/05/89/70/46/360_F_589704609_b84XoVDaeopctL2Iz0lG4IQT86Dzm7xz.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <section className="text-gray-600 body-font bg-black bg-opacity-70 w-screen h-screen">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Before They Sold Out
            <br className="hidden lg:inline-block" />
            ReadyMade Gluten
          </h1>
          <h3 className="mb-8 leading-relaxed font-serif text-white">
            "FastFood: Aapkay Har Bite Mein Swad Aur Maza. Humari Khaas Recipes Se Bani Har Dish, Aapko Khushiyon Ka Ahsas Dilayegi. Jaldi Aayein Aur Apni Favorite Fast Food Ka Maza Lijiye!"
          </h3>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-xl w-full"
            alt="hero"
            src="https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg"
          />
        </div>
      </div>
    </section>
    </div>
  );
}

export default Hero;
