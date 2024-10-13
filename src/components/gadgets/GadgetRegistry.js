import React from 'react';

// Lazy load each gadget component
const LazyFormGadget = React.lazy(() => import('./FormGadget'));
const LazyGridGadget = React.lazy(() => import('./GridGadget'));
const LazyChartGadget = React.lazy(() => import('./ChartGadget'));

const GadgetRegistry = {
  form: LazyFormGadget,
  grid: LazyGridGadget,
  chart: LazyChartGadget,
  // Add more gadgets here as needed...
};

export const getGadgetComponent = (bodyType) => {
  return GadgetRegistry[bodyType] || null;
};

