import React, { useEffect, useRef } from 'react';
import { IgrDataGridModule, IgrDataGrid } from 'igniteui-react-grids';

// Register Ignite UI Data Grid module
IgrDataGridModule.register();

const GridGadget = () => {
  const gridRef = useRef(null);

  // Very simple, hardcoded data with no nulls or complex logic
  const data = [
    { name: 'John Doe', age: 30, email: 'john@example.com' },
    { name: 'Jane Smith', age: 25, email: 'jane@example.com' }
  ];

  useEffect(() => {
    const grid = gridRef.current;
    if (grid) {
      grid.dataSource = data; // Set data source
    }
  }, [data]);

  return (
    <div className="grid-container">
      {/* Basic data grid with auto-generated columns */}
      <IgrDataGrid
        ref={gridRef}
        height="300px"
        width="100%"
        autoGenerateColumns={true} // Auto-generate columns based on data fields
        style={{
            backgroundColor: 'var(--primaryColor)',
            color: 'var(--textColor)',
          }}
      />
    </div>
  );
};

export default GridGadget;
