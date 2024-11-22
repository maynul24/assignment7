import React from 'react';

const Cooking = ({cooking,index}) => {
    const {recipe_name,calories,preparing_time}= cooking;
    return (
        <tr>
          <td className="px-4 py-2">{index + 1}</td>
          <td className="px-4 py-2">{recipe_name}</td>
          <td className="px-4 py-2">{preparing_time}</td>
          <td className="px-4 py-2">{calories}</td>
      </tr>
    )
};

export default Cooking;