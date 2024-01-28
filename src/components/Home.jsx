import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { picnic } from '../constants';

import "../index.css";

const PicnicCard = ({ title, icon, address, pickup, distance }) => {
  return (
    <Link to="/plazas">
      <div className="flex flex-row py-5 w-300px h-900px xs:w-[380px] xs:h-[150px] sm:w-[500px] sm:h-[150px] md:w-[750px] md:h-[180px] lg:w-[900px] lg:h-[300px]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='card-bg px-3 rounded-[20px] xs:w-[370px] xs:h-[150px] sm:w-[550px] sm:h-[180px] md:w-[650px] md:h-[250px] lg:w-[850px] lg:h-[250px] w-[330px] h-[230px] flex'
        >
          <div className='xs:px-2 sm:px-3 md:px-5 py-3 w-[180px] h-[230] xs:w-[290px] xs:h-[150px] sm:w-[420px] sm:h-[150px] md:w-[650px] md:h-[250px] md:block xl:block quicksand-bold xs:text-[12px] sm:text-[15px] md:text-[20px] nunito-regular text-left'>
            <h2 className="text-white text-[18px]">
              {title}
            </h2>
            <h2 className="py-12 xs:py-8 sm:py-8 md:py-12 py-12 text-[15px] nunito-regular">
              {address}
            </h2>
            <h2 className="nunito-regular text-[15px]">
              {pickup}
            </h2>
          </div>
        <div className="w-[130px]">
          <img src={icon} alt={title} className='py-2 sm:py-1 md:py-5 xs:w-[80px] xs:h-[100px] sm:w-[75px] sm:h-[75px] md:w-[150px] md:h-[150px] xl:w-[150px] xl:h-[150px] w-[130px] h-[130px] object-contain rounded-[20px] justify-end' />
          <h3 className="px-2 py-1 sm:px-5 text-black xs:text-[12px] sm:text-[15px] md:text-[20px] text-[15px] nunito-regular">{distance}</h3>
        </div>
        </motion.div>
      </div>
    </Link>
  );
};

const Home = () => {
  const [picnics, setPicnics] = useState([]); // State to hold picnic data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/picnics'); // Adjust this URL to your Flask endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPicnics(data); // Set the picnic data in state
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div id="Home" className="mt-20 mx-auto w-4/5 min-h-screen bg-cover bg-no-repeat bg-center rounded-2xl space-y-5">
      <div className="w-full flex flex-col justify-end">

          <h2 className="xs:text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] text-[30px] nunito-regular">
            <div className="mt-20">Join a Picnic</div>
          </h2>
      </div>

      <div className="flex justify-left w-[1200px]">
        <div className="mt-0 md:mt-10 xl:mt-25">
          <div className="flex-wrap gap-20 space-y-10 md:min-h-[400px] md:min-w-[400px] w-[450px] h-[900px]">
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