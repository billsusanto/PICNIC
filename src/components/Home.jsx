import React, { useState } from "react";
import { motion } from 'framer-motion';

import { picnic } from '../constants';
import { fadeIn } from '../utils/motion';


import "../index.css";

const PicnicCard = ({ index, title, icon }) => {
  return (
    <div className="flex flex-row xs:w-[100px] xs:h-[100px] sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[200px] lg:w-[250px] lg:h-[300px]">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='min-w-[100px] w-full h-full p-[1px] rounded-[20px] picnic-card'>
        <div>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='front-content bg-teal rounded-[30px] py-5 px-10 xs:w-[120px] xs:h-[120px] sm:w-[180px] sm:h-[180px] md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px] w-[120px] h-[120px] flex justify-evenly items-center flex-col'
              >
                <img src={icon} alt={title} className='xs:w-[50px] xs:h-[50px] sm:w-[54px] sm:h-[54px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[300px] w-[50px] h-[50px] object-contain' />
                <h3 className='hidden md:block xl:block text-white text-[12px] font-bold text-center'>{title}</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Home = () => {
  return (
    <div id="About" className="mt-20 mx-auto w-4/5 min-h-screen bg-cover bg-no-repeat bg-center rounded-2xl">
      <div className="w-full flex flex-col justify-end">

          <h2 className="text-black font-bold text-6xl xs:text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] text-[40px]">
            <div className="mt-20">Picnics near you</div>
          </h2>
      </div>

      {/* <div className="w-full mx-auto">
        <motion.p variants={fadeIn('', '', 0.1, 1)} className="text-black xs:text-[20px] sm:text-[25px] md:text-[30px] xl:text-[30px] max-w-3xl leading-[30px]">
          <div className="ml-8 mt-10">Each card represents a picnic</div>
        </motion.p>
      </div> */}

      <div className="flex justify-left">
        <div className="mt-0 md:mt-10 xl:mt-25">
          <div className="flex flex-wrap justify-center gap-20 min-h-[400px] min-w-[200px]">
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