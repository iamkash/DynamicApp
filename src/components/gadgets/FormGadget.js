import React from 'react';
import { getWidgetComponent } from '../widgets/WidgetRegistry';  // Import the widget registry

const FormGadget = ({ gadget }) => {
  return (
    <form className="space-y-4">
      {gadget.fields.map((element, index) => {
        const WidgetComponent = getWidgetComponent(element.type);
        return WidgetComponent ? (
          <div key={index}>
            <WidgetComponent {...element} />  {/* Spread the properties of element */}
          </div>
        ) : null;
      })}
    </form>
  );
};

export default FormGadget;
