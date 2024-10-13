import React, { useEffect, useState } from 'react';
import { IgrCategoryChart, IgrCategoryChartModule } from 'igniteui-react-charts';

// Register the Category Chart module
IgrCategoryChartModule.register();

const ChartGadget = ({ elements }) => {
    const {
      chartType = 'Column',  // Default to 'Column' chart if not provided
      data = [],
      xAxisTitle = 'X Axis',
      yAxisTitle = 'Y Axis',
      xAxisField = '',
      yAxisField = ''
    } = elements;



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
  style={{
    backgroundColor: 'var(--primaryColor)',
    color: 'var(--textColor)',
  }}
/>
</div>
  );
};

export default ChartGadget;
