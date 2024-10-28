import React from 'react';

// Lazy load each gadget component
const LazyFormGadget = React.lazy(() => import('./FormGadget'));
const LazyGridGadget = React.lazy(() => import('./GridGadget'));
const LazyChartGadget = React.lazy(() => import('./ChartGadget'));
const LazyProjectsGadget = React.lazy(() => import('./ProjectsGadget'));
const LazyTileGadget = React.lazy(() => import('./TileGadget'));
const LazyMapGadget = React.lazy(() => import('./MapGadget'));
const LazyQuickLinksGadget = React.lazy(() => import('./QuickLinksGadget'));
const LazyListSearchGadget = React.lazy(() => import('./ListSearchGadget')); 
const LazyFormDocumentGadget = React.lazy(() => import('./FormDocumentGadget')); 


const GadgetRegistry = {
  form: LazyFormGadget,
  grid: LazyGridGadget,
  chart: LazyChartGadget,
  projects: LazyProjectsGadget,
  tile: LazyTileGadget,
  map: LazyMapGadget,
  quicklinks: LazyQuickLinksGadget,
  listsearch: LazyListSearchGadget, 
  formDocument:LazyFormDocumentGadget
  // Add more gadgets here as needed...
};

export const getGadgetComponent = (bodyType) => {
  return GadgetRegistry[bodyType] || null;
};
