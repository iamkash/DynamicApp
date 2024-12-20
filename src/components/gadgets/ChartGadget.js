import React, { useEffect, useState } from 'react';
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';

// Register the Category Chart module
IgrCategoryChartModule.register();

const ChartGadget = ({ gadget }) => {
    const {
      chartType = 'Column',  // Default to 'Column' chart if not provided
      data = [],
      xAxisTitle = 'X Axis',
      yAxisTitle = 'Y Axis',
      xAxisField = '',
      yAxisField = ''
    } = gadget;



  return (
    

<div style={{ height: '300px', width: '100%' }}>
<IgrCategoryChart
  dataSource={data}
  chartType={chartType}  // Chart type from JSON
  xAxisTitle={xAxisTitle}  // X Axis title from JSON
  yAxisTitle={yAxisTitle}  // Y Axis title from JSON
  includedProperties={[xAxisField, yAxisField]}  // Specify which fields to display
  isHorizontalZoomEnabled={true}
  isVerticalZoomEnabled={true}
  height="100%"
  width="100%"
  brushes={['#1ABB9C']}
  outlines={['#1ABB9C']} 
  style={{
    backgroundColor: 'var(--primaryColor)',
    color: 'var(--textColor)',
  }}
/>
</div>
  );
};

export default ChartGadget;
