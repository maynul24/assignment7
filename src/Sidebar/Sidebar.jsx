import React from 'react';

const Sidebar = ({sidebar,index,handleAddToCooking }) => {
    const {recipe_name,calories,preparing_time,} = sidebar;
    return (
      <tr>
          <td className="px-4 py-2">{index + 1}</td>
          <td className="px-4 py-2">{recipe_name}</td>
          <td className="px-4 py-2">{preparing_time}</td>
          <td className="px-4 py-2">{calories}</td>
          <td className="px-4 py-2">
              <button onClick={()=>handleAddToCooking(sidebar)} className="bg-[#0BE58A] text-[#150B2B] text-[16px] py-[9px] px-[18px] rounded-[50px]">
                  Preparing
              </button>
          </td>
      </tr>
  );
};

export default Sidebar;