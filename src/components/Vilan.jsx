import React from 'react';

export default function Vilan() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center w-full h-full"
            src="https://images.deliveryhero.io/image/fd-pk/LH/g66p-listing.jpg"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 lg:w-1/2 lg:pl-12 text-left">
          {/** Repeatable Content Block **/}
          {['Pizza Bites',].map((title, index) => (
            <div className="flex flex-col mb-10" key={index}>
              <div>
        
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-4xl font-bold mb-3 mt-36">
                  {title}
                </h2>
                <p className="leading-relaxed text-xl">
                Pizza Har Pal Ko Khaas Banata Hai, Chahe Dosti Ho Ya Family Gathering. Iski Har Slice Mein Swad 
                Aur Pyaar Chhupa Hota Hai!
                </p>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
