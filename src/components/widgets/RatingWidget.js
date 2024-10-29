// Rating.js
import { IgrRating } from 'igniteui-react';

const RatingWidget = ({ label, name, value, max, onChange, width }) => (
  <div className={`flex flex-col ${width || 'w-full'} p-2`}>
    <label className="text-sm text-gray-600 mb-1">{label}</label>
    <IgrRating
      value={value}
      max={max || 5}
      onValueChanged={(e) => onChange(e, name)}
    />
  </div>
);

export default RatingWidget;
