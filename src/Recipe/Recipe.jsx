import React from 'react';

const Recipe = ({recipe}) => {
    const { recipe_image, recipe_name, short_description, cooking_time, ingredients } = recipe;
    return (
        <div className='mt-6 p-6 border-2 rounded-2xl justify-center flex flex-col'>
            <img className='max-w-[330px] rounded-2xl mb-6' src={recipe_image} alt={`Recipe for ${recipe_name}`} />
            <h3>{recipe_name}</h3>
            <p>{short_description}</p>
            <h4>Cooking Time: {cooking_time} mins</h4>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <div>
                <p>Calories: {/* Add calories data if available */}</p>
                <p>Servings: {/* Add servings data if available */}</p>
            </div>
            <button className='bg-[#0BE58A] py-5 px-[30px] text-[20px] font-semibold text-black rounded-full'>Want ot coock</button>
        </div>
    );
};

export default Recipe;