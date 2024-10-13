import React from 'react';

const InputWidget = ({ element }) => {
  return (
    <div>
      <label htmlFor={element.id} className="block text-sm font-medium">
        {element.label}
      </label>
      <input
        type={element.inputType || 'text'}
        id={element.id}
        name={element.name}
        className="mt-1 block w-full p-2 border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default InputWidget;
