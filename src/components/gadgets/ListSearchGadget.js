import React, { useState, useEffect } from 'react';  // Import React, useState, and useEffect
import * as FaIcons from 'react-icons/fa';  // Import all FontAwesome icons

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

  // Helper function to get all values from an object, including nested objects and arrays
  const getAllValues = (obj) => {
    let values = [];
    if (Array.isArray(obj)) {
      obj.forEach((item) => {
        values = values.concat(getAllValues(item));
      });
    } else if (typeof obj === 'object' && obj !== null) {
      Object.values(obj).forEach((val) => {
        values = values.concat(getAllValues(val));
      });
    } else {
      values.push(obj);
    }
    return values;
  };

  useEffect(() => {
    const searchLower = search.toLowerCase();
    setFilteredItems(
      data.filter((item) => {
        const values = getAllValues(item).map((val) => String(val).toLowerCase());
        return values.some((val) => val.includes(searchLower));
      })
    );
  }, [search, data]);

  // Function to dynamically determine the correct key in data to map icons
  const determineIconKey = (item) => {
    const itemKeys = Object.keys(item);
    const iconKeys = iconDef.length > 0 ? Object.keys(iconDef[0]) : [];
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
    return <FaIcons.FaChartPie size={24} />; // Default icon
  };

  // Adjust the maxHeight based on whether in fullscreen
  const adjustedMaxHeight = isFullscreen ? window.innerHeight : maxHeight;

  return (
    <div className={`flex flex-col ${gadget.colSpan || ''}`}>
      {/* Search Input (fixed at top) */}
      <input
        type="text"
        placeholder={searchPlaceholder}
        className="text-xs w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          backgroundColor: 'var(--tertiaryBackground)',
          color: 'var(--primaryTextColor)',
          borderColor: 'var(--secondaryBackground)',
        }}
      />

      {/* List Items (scrollable) */}
      <ul
        className="overflow-y-auto"
        style={{
          maxHeight: `${adjustedMaxHeight}px`,
        }}
      >
        {filteredItems.map((item, index) => {
          // Determine the iconKey and iconInfo for the current item
          const iconKey = determineIconKey(item);
          const keyValue = iconKey ? item[iconKey] : null;
          const iconInfo = keyValue ? iconMap[keyValue] : null;

          // Determine the background color for the icon container
          const backgroundColor = iconInfo ? iconInfo.color : 'var(--tertiaryBackground)'; // Default color if no iconInfo

          // Separate the valueMembers into primitiveFields and objectFields
          const primitiveFields = [];
          const objectFields = [];

          valueMembers.forEach((field) => {
            const fieldValue = item[field];
            if (typeof fieldValue === 'object' && fieldValue !== null) {
              objectFields.push({ fieldName: field, value: fieldValue });
            } else {
              primitiveFields.push({ fieldName: field, value: fieldValue });
            }
          });

          return (
            <React.Fragment key={item[itemKey] || index}>
              <li className="flex items-start mb-2 text-xs">
                {/* Icon with Background Color */}
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center mr-2 mt-1"
                  style={{
                    backgroundColor: backgroundColor, // Background color applied here
                  }}
                >
                  {getIconForItem(iconInfo)}
                </div>
                {/* Text Fields */}
                <div className="flex flex-col">
                  {/* First Line: primitiveFields[0] */}
                  {primitiveFields.length > 0 && primitiveFields[0].value && (
                    <div className="font-semibold">{primitiveFields[0].value}</div>
                  )}
                  {/* Second Line: rest of primitive fields */}
                  {primitiveFields.length > 1 && (
                    <div className="text-gray-500">
                      {primitiveFields.slice(1).map((fieldObj, idx) => (
                        <span key={fieldObj.fieldName}>
                          {fieldObj.value}
                          {idx < primitiveFields.slice(1).length - 1 && ' | '}
                        </span>
                      ))}
                    </div>
                  )}
                  {/* Third Line: object fields */}
                  {objectFields.map((fieldObj) => (
                    <div key={fieldObj.fieldName} className="text-gray-500 text-xs flex flex-wrap">
                      {Object.entries(fieldObj.value).map(([key, value], i) => (
                        <span key={key} className="flex items-center mr-2">
                          {key}: {value}
                          {/* Add separator if not the last item */}
                          {i < Object.entries(fieldObj.value).length - 1 && (
                            <span className="mx-2">|</span>
                          )}
                        </span>
                      ))}
                    </div>
                  ))}
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
