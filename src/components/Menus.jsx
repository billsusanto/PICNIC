import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { menus } from '../constants';

import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import view_cart from "../assets/view_cart.png";
import BackIcon from '@mui/icons-material/ArrowBack';

import "../index.css";

const MenusCard = ({ name, icon, price, description}) => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () => {
        setCounter(prevCounter => prevCounter + 1);
    };

    const handleDecrement = () => {
        if (counter > 0) {
            setCounter(prevCounter => prevCounter - 1);
        }
    };
    return (
    <div className="flex flex-row py-5 w-300px h-900px xs:w-[380px] xs:h-[150px] sm:w-[500px] sm:h-[150px] md:w-[750px] md:h-[180px] lg:w-[900px] lg:h-[300px] line">
        <div
        className='xs:w-[370px] xs:h-[150px] sm:w-[550px] sm:h-[180px] md:w-[650px] md:h-[250px] lg:w-[850px] lg:h-[250px] w-[330px] h-[230px] flex'
        >
        <div className='xs:px-2 sm:px-3 md:px-5 py-3 w-[180px] h-[230] xs:w-[290px] xs:h-[150px] sm:w-[420px] sm:h-[150px] md:w-[650px] md:h-[250px] md:block xl:block xs:text-[12px] sm:text-[15px] md:text-[20px] text-[15px] font-bold text-left'>
            <h2>{name}</h2>
            <h2 className="py-9 xs:py-8 sm:py-8 md:py-12 py-12 nunito-regular text-grey">
            Price: {price}
            </h2>
            <h2 className="nunito-regular text-grey">
            Description: {description}
            </h2>
        </div>
        <div className="w-[130px]">
            <img src={icon} alt={name} className='py-2 sm:py-1 md:py-5 xs:w-[80px] xs:h-[100px] sm:w-[75px] sm:h-[75px] md:w-[150px] md:h-[150px] xl:w-[150px] xl:h-[150px] w-[130px] h-[130px] object-contain rounded-[20px] justify-end' />
            <div className="flex justify-end items-center mt-3 space-x-2">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-[40px] h-[40px] flex justify-center items-center cursor-pointer'
                    onClick={handleIncrement}
                >
                    <img src={plus} alt="Add to cart" style={{ width: '35px', height: '35px' }}/>
                </motion.div>
                <div className="bg-gray rounded-[20px] w-[50px] h-[35px] flex justify-center items-center">
                    {counter}
                </div>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-[40px] h-[40px] flex justify-center items-center cursor-pointer'
                    onClick={handleDecrement}
                >
                    <img src={minus} alt="Remove from cart" style={{ width: '35px', height: '35px' }}/>
                </motion.div>
                </div>
            </div>
        </div>
    </div>
    );
  };

const Menus = () => {
    return (
        <div id="menus" className="mt-20 mx-auto w-4/5 min-h-screen bg-cover bg-no-repeat bg-center rounded-2xl space-y-5">
            <div className="w-100% h-[35px] flex justify-between items-center">
                <Link to="/restaurants">
                    <BackIcon />
                </Link>
                <Link to="/order">
                    <img src={view_cart} alt="View cart" style={{ width: '75px', height: '30px'}}/>
                </Link>
            </div>
            <div className="w-full flex flex-col justify-end">
                <h2 className="xs:text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] text-[30px] quicksand-bold">
                    <div className="quicksand-bold">BCD Tofu House</div>
                    <div className="nunito-regular text-[20px] line text-grey">Estimated delivery time: 30 mins</div>
                </h2>
                <h2 className="xs:text-[30px] sm:text-[40px] md:text-[50px] xl:text-[60px] text-[20px] quicksand-bold">
                    <div className="mt-10 ">Menu</div>
                </h2>
            </div>
    
            <div className="flex justify-left">
            <div className="mt-0 md:mt-10 xl:mt-25">
                <div className="flex-wrap gap-20 space-y-10 md:min-h-[400px] md:min-w-[400px] w-[330px] h-[800px]">
                {menus.map((menus, index) => (
                    <MenusCard key={menus.name} index={index} {...menus} />
                ))}
                </div>
            </div>
            </div>
        </div>
      );
};

export default Menus;