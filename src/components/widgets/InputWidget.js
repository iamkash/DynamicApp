import React from 'react';

const InputWidget = ({ element }) => {
  return (
    <div>
      <label htmlFor={element.id} className="block mb-2 text-sm font-medium">
        {element.label}
      </label>
      <input
        type={element.inputType || 'text'}
        id={element.id}
        name={element.name}
        class="peer w-full border-b border-gray-400 bg-inherit text-gray-800 placeholder-transparent focus:border-blue-500 focus:outline-none"
  />
    </div>
  );
};

export default InputWidget;
