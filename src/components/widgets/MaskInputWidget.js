// MaskInput.js
import { IgrMaskInput } from 'igniteui-react';

const MaskInputWidget = ({ label, name, mask, required, value, onChange, width }) => (
  <div className={`flex flex-col ${width || 'w-full'}`}>
   
    <IgrMaskInput
      mask={mask}
      value={value}
      onValueChanged={(e) => onChange(e, name)}
      required={required}
      label={label}
      
    />
  </div>
);

export default MaskInputWidget;
