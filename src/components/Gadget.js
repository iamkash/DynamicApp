import React, { Suspense, useRef, useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';  // Dynamically load FontAwesome icons
import { getGadgetComponent } from './gadgets/GadgetRegistry';  // Gadget registry

const colors = ['#1ABB9C', '#1995AD', '#375E97', '#20948B', '#3F51B5', '#5C6BC0', '#536DFE'];  // 7 default colors for rotation

const Gadget = ({ gadget, index }) => {
  const {
    title,
    icon,
    height,
    showHeader = true,
    showFooter = true,
    colSpan,
    colorRotation = false,
    footer,
    gadgetType,
    gadgetOptions = {}
  } = gadget;

  const { backgroundColor } = gadgetOptions;
  const IconComponent = FaIcons[icon];  // Load icon dynamically
  const GadgetComponent = getGadgetComponent(gadgetType);  // Get gadget component based on gadgetType
  const gadgetRef = useRef(null);  // Reference to the gadget container for fullscreen
  const [isFullscreen, setIsFullscreen] = useState(false);  // State to track fullscreen

  // Log gadgetOptions to see the state of the data
  console.log('gadgetOptions being passed:', gadgetOptions);

  // Function to toggle fullscreen for the gadget
  const toggleFullscreen = () => {
    if (gadgetRef.current) {
      if (!document.fullscreenElement) {
        gadgetRef.current.requestFullscreen();
        setIsFullscreen(true);  // Set fullscreen to true
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);  // Set fullscreen to false
      }
    }
  };

  // Function to handle fullscreen change
  const handleFullscreenChange = () => {
    if (document.fullscreenElement === gadgetRef.current) {
      setIsFullscreen(true);  // In fullscreen mode
    } else {
      setIsFullscreen(false);  // Exit fullscreen
    }
  };

  // Listen for fullscreen changes
  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Force a layout re-render when toggling fullscreen
  useEffect(() => {
    if (isFullscreen) {
      console.log('Entering fullscreen mode. Redrawing...');
      // Trigger any resize or redraw here (e.g., for a map)
    } else {
      console.log('Exiting fullscreen mode. Redrawing...');
      // Trigger any resize or redraw here when exiting fullscreen
    }
  }, [isFullscreen]);

  // Determine background color: rotate if colorRotation is true, or use provided backgroundColor
  const appliedBackgroundColor = colorRotation
    ? colors[index % colors.length]  // Cycle through the 7 colors based on the index
    : backgroundColor || 'var(--secondaryBackground)';  // Use backgroundColor from gadgetOptions or fallback

  return (
    <div
      ref={gadgetRef}
      className={`gadget-container shadow-lg p-2 mb-2 ${colSpan} flex flex-col justify-between`}
      style={{
        backgroundColor: appliedBackgroundColor,  // Apply dynamic background color
        color: 'var(--primaryTextColor)',
        minHeight: height,
      }}
    >
      {/* Conditionally render header */}
      {showHeader && (
        <div className="gadget-header flex items-center justify-between mb-1">
          <div className="flex items-center">
            {IconComponent && <IconComponent className="mr-1 text-sm" />}
            <h2 className="text-sm font-bold">{title}</h2>
          </div>
          {/* Fullscreen Icon */}
          <button onClick={toggleFullscreen} className="text-sm hover:text-accentTextColor">
            <FaIcons.FaExpand className="inline-block text-lg" />
          </button>
        </div>
      )}

      {/* Gadget Body */}
      <div className="gadget-body" style={{ height: height, overflowY: 'auto' }}>
        <Suspense fallback={<div>Loading...</div>}>
          {GadgetComponent ? <GadgetComponent gadget={gadgetOptions} isFullscreen={isFullscreen} /> : <p>{gadgetOptions}</p>}
        </Suspense>
      </div>

      {/* Conditionally render footer */}
      {showFooter && (
        <div className="gadget-footer text-[9px] mt-auto" style={{ color: 'var(--secondaryTextColor)' }}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Gadget;
