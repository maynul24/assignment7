import React from 'react';
import Cooking from '../cooking/cooking';

const Cookings = ({cookings}) => {
    return (
        <div className='flex-col items-center justify-center border-2 rounded-2xl mt-6 px-6'>
            <h2 className='text-[24px] font-semibold text-center mt-8'>Currently Coocking: {cookings.length}</h2>
            <span className='block w-[350px] mx-auto border-b-2 border-[#423d3d33] mt-4 mb-6'></span>
            {cookings.length > 0 ? (
                <table className="table-auto w-full text-center text-[#878787] mb-4">
                    <thead>
                        <tr className=''>
                            <th className="px-4 py-2 "></th>
                            <th className="px-4 py-2 ">Name</th>
                            <th className="px-4 py-2 ">Time</th>
                            <th className="px-4 py-2 ">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cookings.map((cooking, index) => (
                            <Cooking key={index} cooking={cooking} index={index} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className='text-xl text-center mb-4 text-[#878787]'>No items available for cooking.</p>
            )}
        </div>
    );
};

export default Cookings;