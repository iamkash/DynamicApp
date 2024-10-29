// ComboBoxWidget.js
import React, { useEffect } from 'react';
import { IgrCombo, IgrComboModule } from 'igniteui-react';

// Ensure the module is registered
IgrComboModule.register();

const ComboBoxWidget = ({
  label,
  name,
  options = [],             // Use 'data' for the items
  value,
  onChange = () => {},    // Default to an empty function
  required,
  width,
  placeholder = "",
  singleSelect = true
}) => {

  useEffect(() => {
    console.log("Data loaded:", options); // Debugging to verify data structure
  }, [options]);

  return (
    <div className={`flex flex-col ${width || 'w-full'}`}>
      <IgrCombo
        data={options}                           // Use 'data' as specified
        displayKey="label"                    // Use 'displayKey' for display text
        valueKey="value"                      // Use 'valueKey' for the value
        selectedItems={[value]}               // Set the initial selected item
        onSelectionChanging={(e) => {
          const selectedValue = e.newSelection[0]?.value || null;
          onChange(selectedValue, name);      // Trigger onChange with selected value
        }}
        placeholder={placeholder}
        label={label}
        required={required}
        singleSelect ={singleSelect}
        
      />
    </div>
  );
};

export default ComboBoxWidget;
