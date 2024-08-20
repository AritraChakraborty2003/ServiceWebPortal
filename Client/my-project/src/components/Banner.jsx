import React from 'react';
import { useNavigate } from 'react-router-dom';
import "/src/index.css";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center" style={{ backgroundColor: '#f0f2ff' }}>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-center text-[15vmin] md:text-[12.4vmin] mt-[-4vmin] lg:mt-[-1vmin] font-bold font-poppins pb-2">
          <span className="text-black">CodeMap </span>
          <span className="text-blue-500">Services</span>
        </h1>
        <p className="text-[4.25vmin] md:text-[3.75vmin] lg:text-[4vmin] font-poppins mt-[-2.5vmin]">
          ( Where Ideas Transform Into Innovation )
        </p>
        <p className="lg:ml-[0.45vmin] text-[4.1vmin] md:text-[3.85vmin] lg:text-[3.65vmin] font-poppins text-bannerGrey mt-[3vmin]">
          Learn - Participate - Innovate - Grow - Impact
        </p>
        <button
          className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          onClick={() => navigate('/campus-lead')}
        >
          Become Campus Lead
        </button>
      </div>
    </div>
  );
};

export default Banner;
