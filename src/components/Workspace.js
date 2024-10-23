import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Gadget from './Gadget';

const Workspace = ({ workspaceId }) => {
  const [workspaceData, setWorkspaceData] = useState(null);
  const [workspaces, setWorkspaces] = useState([]); // Not used here but kept for completeness
  const [fullscreenGadget, setFullscreenGadget] = useState(null); // Track the fullscreen gadget

  // Access navigation state
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    const fetchWorkspaceData = async () => {
      try {
        const response = await fetch(
          `${process.env.PUBLIC_URL}/data/workspaces/${workspaceId}.json`
        );
        const data = await response.json();
        setWorkspaceData(data);
      } catch (error) {
        console.error('Error fetching workspace data:', error);
      }
    };

    fetchWorkspaceData();
  }, [workspaceId]);

  if (!workspaceData) {
    return <div>Loading workspace...</div>;
  }

  // Determine whether to show the banner
  const showBanner = workspaceData.showBanner && state && state.task;

  return (
    <div
      className="workspace p-0"
      style={{ backgroundColor: 'var(--primaryBackground)', color: 'var(--primaryTextColor)' }}
    >
      {/* Display Banner if showBanner is true */}
      {showBanner && (
        <div className="banner bg-secondaryBackground p-2 text-xs mb-2">
          {workspaceData.bannerFields.map(({ key, label }) => (
            state.task[key] ? (
              <p key={key}>
                <strong>{label}:</strong> {state.task[key]}
              </p>
            ) : null
          ))}
        </div>
      )}

      {/* Render Gadgets */}
      <div
        className={`gadgets-grid grid grid-cols-12 gap-2 items-start ${
          fullscreenGadget ? 'fullscreen-mode' : ''
        }`}
      >
        {workspaceData.gadgets.map((gadget, index) => (
          <div
            key={gadget.name}
            className={`${
              fullscreenGadget
                ? fullscreenGadget === gadget.name
                  ? 'col-span-12'
                  : 'hidden'
                : gadget.colSpan || 'col-span-6'
            }`}
          >
            <Gadget
              gadget={gadget}
              index={index}
              isFullscreen={fullscreenGadget === gadget.name}
              toggleFullscreen={() =>
                setFullscreenGadget(fullscreenGadget === gadget.name ? null : gadget.name)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workspace;
