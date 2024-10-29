// Switch.js
import { IgrSwitch } from 'igniteui-react';

const SwitchWidget = ({ label, name, checked, onChange, width }) => (
  <div className={`flex items-center ${width || 'w-full'} p-2`}>
    <label className="text-sm  mr-4">{label}</label>
    <IgrSwitch checked={checked} onCheckedChanged={(e) => onChange(e, name)} />
  </div>
);

export default SwitchWidget;
