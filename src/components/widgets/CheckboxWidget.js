import React from 'react';

const CheckboxWidget = ({ element }) => {
  return (
    <div>
      <fieldset>
        <legend className="block text-sm font-medium">{element.label}</legend>
        {element.options.map((option, idx) => (
          <div key={idx} className="flex items-center">
            <input
              id={`${element.id}-${idx}`}
              name={element.name}
              type="checkbox"
              value={option.value}
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
            />
            <label htmlFor={`${element.id}-${idx}`} className="ml-2 block text-sm">
              {option.label}
            </label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};

export default CheckboxWidget;
