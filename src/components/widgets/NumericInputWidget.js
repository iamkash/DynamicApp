// NumericInputWidget.js
import { IgrInput } from 'igniteui-react';

const NumericInputWidget = ({ label, name, value, min, max, suffix, required, onChange = () => {}, width }) => (
  <div className={`flex flex-col ${width || 'w-full'}`}>
      <IgrInput
        type="number"
        value={value}
        min={min}
        max={max}
        required={required}
        onInput={(e) => onChange(e.target.value, name)}
        label={label}
        suffix={suffix}>
          <span slot="suffix">{suffix}</span>
        </IgrInput>
       

      
   
    
  </div>
);

export default NumericInputWidget;
