import React from 'react';
import { Link } from 'react-router-dom';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';

const getIconComponent = (iconName) => {
  if (GiIcons[iconName]) return GiIcons[iconName];
  if (FaIcons[iconName]) return FaIcons[iconName];
  if (MdIcons[iconName]) return MdIcons[iconName];
  return null;
};

const QuickLinksGadget = ({ gadget = {} }) => {
  const { buttons = [] } = gadget;

  return (
    <div className="flex flex-wrap justify-start">
      {buttons.map((button, index) => {
        const IconComponent = getIconComponent(button.icon);

        return (
          <Link
            
            to="/project-new/" // Link to the workspace path
            className="w-[100px] h-[100px] bg-tertiaryBackground text-primaryTextColor text-sm flex flex-col justify-center items-center rounded shadow-lg hover:bg-highlightBackgroundColor hover:text-accentTextColor m-2"
          >
            {IconComponent ? (
              <IconComponent size={32} />
            ) : (
              <div className="w-8 h-8" /> // Placeholder if icon not found
            )}
            <span className="mt-2 text-xs text-center">{button.text}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickLinksGadget;
