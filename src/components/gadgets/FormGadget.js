import React from 'react';
import { getWidgetComponent } from '../widgets/WidgetRegistry';  // Import the widget registry

const FormGadget = ({ elements }) => {
  return (
    <form className="space-y-4">
      {elements.map((element, index) => {
        const WidgetComponent = getWidgetComponent(element.type);
        return WidgetComponent ? (
          <div key={index}>
            <WidgetComponent element={element} />
          </div>
        ) : null;
      })}
    </form>
  );
};

export default FormGadget;
