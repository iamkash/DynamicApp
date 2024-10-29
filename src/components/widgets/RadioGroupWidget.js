// RadioWidget.js
import React from 'react';
import { IgrRadioGroup, IgrRadio, IgrRadioModule, IgrRadioGroupModule } from 'igniteui-react';

// Ensure Ignite UI modules are registered
IgrRadioModule.register();
IgrRadioGroupModule.register();

const RadioWidget = ({ name, options = [], selectedValue, alignment = "horizontal", onChange }) => {
  return (
    <IgrRadioGroup alignment={alignment}>
      {options.map((option, index) => (
        <IgrRadio
          key={index}
          name={name}
          value={option.value}
          checked={selectedValue === option.value}
          onChange={(e) => onChange(e.target.value)}
        >
          <span>{option.label}</span>
        </IgrRadio>
      ))}
    </IgrRadioGroup>
  );
};

export default RadioWidget;
