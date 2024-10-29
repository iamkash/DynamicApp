import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'; // Dynamically load FontAwesome icons

const TileGadget = ({ gadget = {} }) => {
  const { title, value, icon, link, uom } = gadget;

  // Dynamically load the icon component based on the string name in the JSON
  const IconComponent = FaIcons[icon] || FaIcons.FaQuestionCircle;  // Default to FaQuestionCircle if icon is not found

  // Use an anchor tag wrapping the entire tile if a link is provided
  const Wrapper = link ? 'a' : 'div';

  return (
    <div className="w-full">
      <Link
        to={link || '#'}
        className="text-white relative block hover:bg-opacity-90 transition-all"
        style={{
          transition: 'background 0.3s ease, transform 0.3s ease',  // Smooth transition for hover and background effects
        }}
      >
        <div className="inner">
          <h3 className="text-4xl font-bold">
            {value}
            {uom && <span className="text-sm font-normal ml-1">{uom}</span>}  {/* Display the unit of measurement next to the value */}
          </h3>
          <p className='text-sm mt-3'>{title}</p>
        </div>

        {/* Icon container with hover grow effect when the entire gadget is hovered */}
        <div className="icon absolute top-4 right-4 text-white opacity-25 transform transition-transform duration-300 group-hover:scale-125">
          {IconComponent && <IconComponent className="text-4xl" />}
        </div>
      </Link>

    

          
    </div>
  );
};

export default TileGadget;
