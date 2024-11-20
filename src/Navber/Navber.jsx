import React from 'react';
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navber = () => {
    return (
        <div className='my-[50px] flex justify-center items-center gap-44 font-[lexend]'>
            <h4 className='text-3xl text-black font-bold'>Recipe Calories</h4>
            <ul className='flex items-center gap-12 text-[16px] text-[#150B2BB3]'>
                    <a href=''><li>Home</li></a>
                    <a href=''><li>Recipes</li></a>
                    <a href=''><li>About</li></a>
                    <a href=''><li>Search</li></a>
            </ul>
            <div className='flex gap-4 items-center'>
                <div className='flex items-center justify-center'>
                <CiSearch className='h-6 w-6' />
                <input type="text" placeholder='Serach'/>
                </div>
                
            <MdOutlineAccountCircle className='bg-green-500 w-12 h-12 p-2 rounded-full'/>
            </div>

        </div>
    );
};

export default Navber;