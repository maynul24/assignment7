import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const Recipes = () => {
    const [Recipes, setRecipes] = useState([]);
    useEffect( () =>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className='grid grid-cols-2 gap-6'>
            {
                Recipes.map(recipe => <Recipe
                key={recipe.recipe_id}
                recipe = {recipe}
                ></Recipe>)
            }
        </div>
    );
};

export default Recipes;