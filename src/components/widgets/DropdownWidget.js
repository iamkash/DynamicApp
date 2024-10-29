// Dropdown.js
import { IgrDropdown } from 'igniteui-react';

const DropdownWidget = ({ label, name, required, options, value, onChange, width }) => (
  <div className={`flex flex-col ${width || 'w-full'} p-2`}>
    <label className="text-sm text-gray-600 mb-1">{label}</label>
    <IgrDropdown
      value={value}
      onSelectionChanged={(e) => onChange(e, name)}
      dataSource={options}
      required={required}
    />
    {required && !value && <span className="text-red-500 mt-1">Required</span>}
  </div>
);

export default DropdownWidget;
