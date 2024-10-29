// Chip.js
import { IgrChip } from 'igniteui-react';

const ChipWidget = ({ label, color, onClick }) => (
  <IgrChip
    text={label}
    style={{ backgroundColor: color || 'gray' }}
    onClick={onClick}
  />
);

export default ChipWidget; 
