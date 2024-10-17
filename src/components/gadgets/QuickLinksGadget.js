import React from 'react';
import * as FaIcons from 'react-icons/fa'; // Dynamically load FontAwesome icons

const QuickLinksGadget = ({ gadget = {} }) => {
  const { title, value, icon, link, uom } = gadget;

  // Dynamically load the icon component based on the string name in the JSON
  const IconComponent = FaIcons[icon] || FaIcons.FaQuestionCircle;  // Default to FaQuestionCircle if icon is not found

  // Use an anchor tag wrapping the entire tile if a link is provided
  const Wrapper = link ? 'a' : 'div';

  return (
    <div className="w-full">
     
    </div>
  );
};

export default QuickLinksGadget;
