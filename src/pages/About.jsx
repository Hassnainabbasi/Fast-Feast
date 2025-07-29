import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Vilan from '../components/Vilan';
import Footer from '../components/Footer';
import { LoadingOutlined } from '@ant-design/icons';

export default function About() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setLoader(false);
    }, 500); // 500 ms ke baad loading false ho jayega

    return () => clearTimeout(time); // Cleanup function
  }, []);

  if (loader) {
    return <h1><LoadingOutlined className='text-9xl flex justify-center items-center p-36' /></h1>; // Loading state
  }

  return (
      <div>
        <Hero />
        <div className='mb-16'> {/* Add margin here for spacing */}
          <Vilan />
        </div>
        <div className='mb-16'> {/* Add margin here for spacing */}
          <Footer />
        </div>
      </div>
  );
}

  