import React, { Suspense, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';  // Dynamically load FontAwesome icons
import { getGadgetComponent } from './gadgets/GadgetRegistry';  // Gadget registry

const Gadget = ({ gadget }) => {
  const { title, icon, height, colSpan, header, footer, gadgetType, gadgetOptions } = gadget;
  const IconComponent = FaIcons[icon]; // Load icon dynamically
  const GadgetComponent = getGadgetComponent(gadgetType);  // Get gadget component based on gadgetType
  const gadgetRef = useRef(null);  // Reference to the gadget container for fullscreen

 // Function to toggle fullscreen for the gadget
 const toggleFullscreen = () => {
    if (gadgetRef.current) {
      if (!document.fullscreenElement) {
        gadgetRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div ref={gadgetRef} 
      className={`gadget-container shadow-lg p-2 mb-2 ${colSpan} flex flex-col justify-between`}  
      style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--textColorOnPrimary)', minHeight: height }}  
    >
     
      {/* Header with gadget icon, title, and fullscreen icon */}
      <div className="gadget-header flex items-center justify-between mb-1">
        <div className="flex items-center">
          {IconComponent && <IconComponent className="mr-1 text-sm" />}
          <h2 className="text-sm font-bold">{title}</h2>
        </div>
        {/* Fullscreen Icon */}
        <button onClick={toggleFullscreen} className="text-sm hover:text-blue-500">
          <FaIcons.FaExpand className="inline-block text-lg" />
        </button>
      </div>

      {/* Gadget Body */}
      <div className="gadget-body" style={{ height: height, overflowY: 'auto' }}>
        <Suspense fallback={<div>Loading...</div>}>
        {GadgetComponent ? <GadgetComponent elements={gadgetOptions} /> : <p>{gadgetOptions}</p>}
         
        </Suspense>
      </div>

      {/* Gadget Footer */}
      <div className="gadget-footer text-[9px] mt-auto">
        {footer}
      </div>
    </div>
  );
};

export default Gadget;
