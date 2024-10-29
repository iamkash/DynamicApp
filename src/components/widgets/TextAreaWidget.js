// TextareaWidget.js
import React from 'react';
import { IgrTextarea, IgrTextareaModule } from 'igniteui-react';

// Ensure the Textarea module is registered
IgrTextareaModule.register();

const TextAreaWidget = ({ label,
  name,
  
  required = false,
  minLength = 0,
  maxLength = Infinity,
  value = "",
  onChange = () => {},  // Set a default function for onChange
  width,
rows = "3" }) => {
  return (
    <IgrTextarea
      name={name}
      value={value}
      required={required}
      rows={rows}
      onInput={(e) => onChange(e.target.value)}
      label={label}
    />
  );
};

export default TextAreaWidget;
