import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({recipe, handleAddToSidebar }) => {
    const { recipe_image, recipe_name, short_description, preparing_time, ingredients, calories } = recipe;
    return (
        <div className='mt-6 p-6 border-2 rounded-2xl'>
            <img className='max-w-[330px] rounded-2xl mb-6' src={recipe_image} alt={`Recipe for ${recipe_name}`} />
            <h3 className='text-xl text-[#282828] font-semibold mb-4'>{recipe_name}</h3>
            <p className='text-[#878787] text-[16px] mb-4'>{short_description}</p>
            <div className='border-y-[1px] border-[#423d3d33]'>
            <h4 className='mt-6 mb-4 text-[18px] text-[#282828] font-semibold'>Ingredients:{ingredients.length}</h4>
            <ul className='text-[#878787] list-disc mb-4'>
                {ingredients.map((ingredient, index) => (
                    <li className='ml-6' key={index}>{ingredient}</li>
                ))}
            </ul>
            </div>
            <div className='flex justify-start gap-4 my-6 text-[16px]'>
                <div className='flex gap-2 items-center justify-center'>
                <IoTimeOutline />
                <p>{preparing_time}</p>
                </div>
                <div className='flex gap-2 items-center justify-center'>
                <AiOutlineFire />
                <p>{calories}</p>
                </div>
            </div>
            <button onClick={()=>handleAddToSidebar(recipe)} className='bg-[#0BE58A] py-[13px] px-6 text-[18px] font-medium text-black rounded-full justify-start'>Want ot coock</button>
        </div>
    );
};

export default Recipe;