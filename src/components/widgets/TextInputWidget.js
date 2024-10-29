// TextInputWidget.js
import { IgrInput, IgrInputModule } from 'igniteui-react';


IgrInputModule.register();

const TextInputWidget = ({
  label,
  name,
  inputType = "text",
  required = false,
  minLength = 0,
  maxLength = Infinity,
  value = "",
  placeholder = "",
  onChange = () => {},  // Set a default function for onChange
  width,
}) => (
  <div className={`flex flex-col ${width || 'w-full'}`}>
    <IgrInput
      type={inputType}
      label={label}
      value={value}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeholder}
      onInput={(e) => onChange(e.target.value, name)}  // Ensure onChange is defined
      style={{ border: 'none' }}
    />
  </div>
);

export default TextInputWidget;
