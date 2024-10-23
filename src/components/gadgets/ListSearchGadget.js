import React, { useState, useEffect } from 'react';  // Import React, useState, and useEffect
import * as FaIcons from 'react-icons/fa';  // Import all FontAwesome icons
import { FaSearch, FaChartPie } from 'react-icons/fa';  // Import specific icons

const ListSearchGadget = ({ gadget, isFullscreen }) => {
  const {
    data = [],
    searchPlaceholder = 'Search...',
    itemKey = 'id',
    valueMembers = [],
    iconDef = [], 
    maxHeight = 300, 
  } = gadget.gadgetOptions || gadget;

  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState(data);

  useEffect(() => {
    setFilteredItems(
      data.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(search.toLowerCase())
        )
      )
    );
  }, [search, data]);

  // Function to dynamically determine the correct key in data to map icons
  const determineIconKey = (item) => {
    const itemKeys = Object.keys(item);
    const iconKeys = Object.keys(iconDef[0]); // Assuming the structure of iconDef is consistent
    // Find the first matching key between the data and iconDef
    return itemKeys.find((key) => iconKeys.includes(key));
  };

  // Create an icon map based on the dynamically determined key
  const iconMap = {};
  iconDef.forEach((icon) => {
    const iconKey = determineIconKey(icon); // Determine the icon key from iconDef
    if (iconKey) {
      iconMap[icon[iconKey]] = {
        iconName: icon.icon,
        color: icon.color,
      };
    }
  });

  // Function to get the icon component
  const getIconForItem = (iconInfo) => {
    if (iconInfo) {
      const IconComponent = FaIcons[iconInfo.iconName];
      if (IconComponent) {
        return <IconComponent size={24} color="#FFFFFF" />; // Icon color set to white
      }
    }
    return <FaChartPie size={24}  />; // Default icon with white color
  };

  // Adjust the maxHeight based on whether in fullscreen
  const adjustedMaxHeight = isFullscreen ? window.innerHeight : maxHeight;

  return (
    <div className={`flex flex-col ${gadget.colSpan || ''}`}>
      {/* Search Input (fixed at top) */}
     

      <input
        type="text"
        placeholder={searchPlaceholder}
        className=" text-xs w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
        value={search}// Bind the input's value to the searchText state
        onChange={(e) => setSearch(e.target.value)} // Handle changes to update the searchText state
        style={{ backgroundColor: 'var(--tertiaryBackground)', color: 'var(--primaryTextColor)', borderColor: 'var(--secondaryBackground)' }}
      />

      {/* List Items (scrollable) */}
      <ul
        className="overflow-y-auto"
        style={{
          maxHeight: `${adjustedMaxHeight}px`, // Adjust max height dynamically
        }}
      >
        {filteredItems.map((item, index) => {
          // Determine the iconKey and iconInfo for the current item
          const iconKey = determineIconKey(item);
          const keyValue = iconKey ? item[iconKey] : null;
          const iconInfo = keyValue ? iconMap[keyValue] : null;

          // Determine the background color for the icon container
          const backgroundColor = iconInfo ? iconInfo.color : 'var(--tertiaryBackground)'; // Default color if no iconInfo

          return (
            <React.Fragment key={item[itemKey]}>
              <li className="flex items-center mb-2 text-xs">
                {/* Icon with Background Color */}
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mr-2"
                  style={{
                    backgroundColor: backgroundColor, // Background color applied here
                  }}
                >
                  {getIconForItem(iconInfo)}
                </div>
                {/* Text Fields */}
                <div className="flex flex-col">
                  <div className="font-semibold">{item[valueMembers[0]]}</div>
                  <div className="text-gray-500">
                    {valueMembers.slice(1).map((field, idx) => (
                      <span key={idx}>
                        {item[field]}
                        {idx < valueMembers.slice(1).length - 1 && ' | '}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
              {/* Divider */}
              {index < filteredItems.length - 1 && (
                <hr className="border-t border-tertiaryBackground my-2" />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default ListSearchGadget;
