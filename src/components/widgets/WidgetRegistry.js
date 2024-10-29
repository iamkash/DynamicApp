// WidgetRegistry.js

import CheckboxWidget from './CheckboxWidget';
import ChipWidget from './ChipWidget';
import ComboboxWidget from './ComboboxWidget';
import DropdownWidget from './DropdownWidget';
import InputWidget from './InputWidget';
import MaskInputWidget from './MaskInputWidget';
import DateTimeInputWidget from './DateTimeInputWidget';
import RadioGroupWidget from './RadioGroupWidget';
import RatingWidget from './RatingWidget';
import SwitchWidget from './SwitchWidget';
import TextAreaWidget from './TextAreaWidget';
import SelectWidget from './SelectWidget';
import NumericInputWidget from './NumericInputWidget';
import TextInputWidget from './TextInputWidget';

// This registry maps element types to their corresponding widget components
const WidgetRegistry = {
  checkbox: CheckboxWidget,
  chip: ChipWidget,
  comboBox: ComboboxWidget,
  dropdown: DropdownWidget,
  input: InputWidget,
  maskInput: MaskInputWidget,
  dateTimeInput: DateTimeInputWidget,
  radioGroup: RadioGroupWidget,
  rating: RatingWidget,
  switch: SwitchWidget,
  textArea: TextAreaWidget,
  numeric: NumericInputWidget,
  textInput: TextInputWidget,
};

// Utility function to get the widget component by type
export const getWidgetComponent = (type) => {
  return WidgetRegistry[type] || null;
};

export default WidgetRegistry;
