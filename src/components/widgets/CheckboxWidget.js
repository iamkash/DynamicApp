// Checkbox.js
import { IgrCheckbox } from 'igniteui-react';

const Checkbox = ({ label, name, required, checked, onChange, width }) => (
  <div className={`flex items-center ${width || 'w-full'} p-2`}>
    <IgrCheckbox
      checked={checked}
      label={label}
      onChange={(e) => onChange(e, name)}
      required={required}
    />
  </div>
);

export default Checkbox;
