import InputWidget from './InputWidget';
import RadioWidget from './RadioWidget';
import CheckboxWidget from './CheckboxWidget';

// This registry maps element types to their corresponding widget components
const WidgetRegistry = {
  input: InputWidget,
  radio: RadioWidget,
  checkbox: CheckboxWidget,
};

// Utility function to get the widget component by type
export const getWidgetComponent = (type) => {
  return WidgetRegistry[type] || null;
};
