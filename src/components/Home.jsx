import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { picnic } from '../constants';

import "../index.css";

const PicnicCard = ({ title, icon, address, pickup, distance }) => {
  return (
    <Link to="/restaurants">
      <div className="flex flex-row xs:w-[380px] xs:h-[150px] sm:w-[500px] sm:h-[150px] md:w-[750px] md:h-[180px] lg:w-[900px] lg:h-[300px]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='bg-gray px-3 rounded-[20px] xs:w-[370px] xs:h-[150px] sm:w-[550px] sm:h-[180px] md:w-[650px] md:h-[250px] lg:w-[850px] lg:h-[250px] w-[850px] h-[250px] flex'
        >
          <h3 className='xs:px-2 sm:px-3 md:px-5 py-3 xs:w-[290px] xs:h-[150px] sm:w-[420px] sm:h-[150px] md:w-[650px] md:h-[250px] md:block xl:block text-black xs:text-[12px] sm:text-[15px] md:text-[20px] text-[20px] font-bold text-left'>
            {title}
            <h2 className="xs:py-8 sm:py-8 md:py-12 py-12">
              {address}
            </h2>
            <h2>
              {pickup}
            </h2>
          </h3>
          <div>
            <img src={icon} alt={title} className='sm:py-1 md:py-5 xs:w-[80px] xs:h-[100px] sm:w-[75px] sm:h-[75px] md:w-[150px] md:h-[150px] xl:w-[150px] xl:h-[150px] w-[50px] h-[50px] object-contain rounded-[20px] justify-end' />
            <h3 className="sm:px-5 text-black xs:text-[12px] sm:text-[15px] md:text-[20px] text-[20px] font-bold">{distance}</h3>
          </div>

        </motion.div>
      </div>
    </Link>
  );
};

const Home = () => {
  return (
    <div id="About" className="mt-20 mx-auto w-4/5 min-h-screen bg-cover bg-no-repeat bg-center rounded-2xl space-y-5">
      <div className="w-full flex flex-col justify-end">

          <h2 className="text-black font-bold text-6xl xs:text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] text-[40px]">
            <div className="mt-20">Join a Picnic</div>
          </h2>
      </div>

      <div className="flex justify-left">
        <div className="mt-0 md:mt-10 xl:mt-25">
          <div className="flex-wrap gap-20 space-y-10 min-h-[400px] min-w-[400px]">
            {picnic.map((picnic, index) => (
              <PicnicCard key={picnic.title} index={index} {...picnic} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;