import React from 'react';

const Recipe = ({recipe, handleAddToSidebar }) => {
    const { recipe_image, recipe_name, short_description, preparing_time, ingredients, calories } = recipe;
    return (
        <div className='mt-6 p-6 border-2 rounded-2xl justify-center flex flex-col'>
            <img className='max-w-[330px] rounded-2xl mb-6' src={recipe_image} alt={`Recipe for ${recipe_name}`} />
            <h3>{recipe_name}</h3>
            <p>{short_description}</p>
            <h4>Ingredients:{ingredients.length}</h4>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <div className='flex gap-4'>
                <p>Times: {preparing_time}</p>
                <p>Calories: {calories}</p>
            </div>
            <button onClick={()=>handleAddToSidebar(recipe)} className='bg-[#0BE58A] py-5 px-[30px] text-[20px] font-semibold text-black rounded-full'>Want ot coock</button>
        </div>
    );
};

export default Recipe;