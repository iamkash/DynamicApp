// DateTimeInput.js
import { IgrDateTimeInput } from 'igniteui-react';

const DateTimeInputWidget = ({ label, name, required, value, onChange = () => {}, width }) => (
  <div className={`flex flex-col ${width || 'w-full'} `}>
   
    <IgrDateTimeInput
      value={value}
      onValueChanged={(e) => onChange(e, name)}
      required={required}
      label={label}
    />
  </div>
);

export default DateTimeInputWidget;
