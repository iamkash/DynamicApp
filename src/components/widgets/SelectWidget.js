// Select.js
import { IgrSelect, IgrSelectItem } from 'igniteui-react';

const SelectWidget = ({ label, name, options, required, value, onChange, width }) => (
  <div className={`flex flex-col ${width || 'w-full'} p-2`}>
    <label className="text-sm text-gray-600 mb-1">{label}</label>
    <IgrSelect selectedValue={value} onSelectionChanged={(e) => onChange(e, name)}>
      {options.map((option) => (
        <IgrSelectItem key={option.value} value={option.value} text={option.label} />
      ))}
    </IgrSelect>
    {required && !value && <span className="text-red-500 mt-1">Required</span>}
  </div>
);

export default SelectWidget;
