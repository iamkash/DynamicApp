import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Gadget from './Gadget';
import * as FaIcons from 'react-icons/fa';  // Dynamically load FontAwesome icons

const Workspace = ({ workspaceId }) => {
  const [workspaceData, setWorkspaceData] = useState(null);
  const [workspaces, setWorkspaces] = useState([]); // Store all workspaces to build breadcrumbs
  const [breadcrumbTrail, setBreadcrumbTrail] = useState([]);

  // Fetch the hierarchy and workspaces
  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/workspaces.json`);
        const data = await response.json();
        setWorkspaces(data.workspaces);
      } catch (error) {
        console.error('Error fetching workspaces data:', error);
      }
    };

    fetchWorkspaces();
  }, []);

  // Fetch the current workspace data dynamically based on workspaceId
  useEffect(() => {
    const fetchWorkspaceData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/workspaces/${workspaceId}.json`);
        const data = await response.json();
        setWorkspaceData(data);
      } catch (error) {
        console.error('Error fetching workspace data:', error);
      }
    };

    fetchWorkspaceData();
  }, [workspaceId]);

  // Build the breadcrumb trail based on hierarchy
  useEffect(() => {
    if (workspaces.length > 0 && workspaceData) {
      const breadcrumbs = [];
      let currentWorkspace = workspaces.find((ws) => ws.id === workspaceId);

      // Traverse up the hierarchy to build the breadcrumbs
      while (currentWorkspace) {
        breadcrumbs.unshift(currentWorkspace);
        currentWorkspace = currentWorkspace.parentId
          ? workspaces.find((ws) => ws.id === currentWorkspace.parentId)
          : null;
      }

      setBreadcrumbTrail(breadcrumbs);
    }
  }, [workspaceData, workspaces, workspaceId]);

  if (!workspaceData) {
    return <div>Loading workspace...</div>;
  }

  // Load the icon dynamically from React Icons for the current workspace
  const IconComponent = FaIcons[workspaceData.icon];

  return (
    <div className="workspace p-0">
      {/* Breadcrumbs with Icons, all in one line */}
      <nav className="flex items-center mb-0">
        {breadcrumbTrail.map((workspace, index) => {
          const BreadcrumbIcon = FaIcons[workspace.icon];

          return (
            <span key={workspace.id} className="flex items-center">
              {BreadcrumbIcon && <BreadcrumbIcon className="mr-2 text-xs" />}
              {workspace.path ? (
                <Link to={workspace.path} className="hover:underline text-xs">
                  {workspace.name}
                </Link>
              ) : (
                <span className="text-xs">{workspace.name}</span>
              )}
              {index < breadcrumbTrail.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </span>
          );
        })}
      </nav>

      {/* Render Gadgets */}
      <div className="gadgets-grid grid grid-cols-12 gap-2">
        {workspaceData.gadgets.map((gadget) => (
          <Gadget key={gadget.name} gadget={gadget} />
        ))}
      </div>
    </div>
  );
};

export default Workspace;
