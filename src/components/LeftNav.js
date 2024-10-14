import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';  // Import FontAwesome icons
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Arrow icons for collapsing

// Helper function to organize workspaces into parent-child structure
const organizeWorkspaces = (workspaces) => {
  const workspaceMap = {};
  
  workspaces.forEach((workspace) => {
    workspaceMap[workspace.id] = { ...workspace, children: [] };
  });

  const workspaceTree = [];

  workspaces.forEach((workspace) => {
    if (workspace.parentId) {
      workspaceMap[workspace.parentId].children.push(workspaceMap[workspace.id]);
    } else {
      workspaceTree.push(workspaceMap[workspace.id]);
    }
  });

  return workspaceTree;
};

const LeftNav = ({ isOpen, toggleNav }) => {
  const [workspaceTree, setWorkspaceTree] = useState([]);
  const [collapsed, setCollapsed] = useState({}); // Track collapsed state for each parent workspace

  // Fetch the list of workspaces from the JSON file
  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/workspaces.json`);
        const data = await response.json();
        const organizedWorkspaces = organizeWorkspaces(data.workspaces);
        setWorkspaceTree(organizedWorkspaces);
      } catch (error) {
        console.error('Error fetching workspaces:', error);
      }
    };

    fetchWorkspaces();
  }, []);

  // Toggle collapsed state for each parent workspace
  const toggleCollapse = (id) => {
    setCollapsed((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Render workspace list recursively with collapsible sections and dynamic font size for children
  const renderWorkspaces = (workspaces, level = 0) => {
    return (
      <ul className={`${level > 0 ? 'ml-6' : ''}`}>
        {workspaces.map((workspace) => {
          const IconComponent = FaIcons[workspace.icon]; // Load the icon dynamically
          const isParent = workspace.children.length > 0;
          const isCollapsed = collapsed[workspace.id]; // Check if this parent is collapsed
          const fontSizeClass = level > 0 ? 'text-xs' : 'text-sm'; // Smaller font for children

          return (
            <li key={workspace.id} className="mb-2">
              {/* Parent item with icon and collapse/expand functionality */}
              <div
                className={`flex items-center justify-between cursor-pointer ${
                  isParent ? 'hover:opacity-80' : ''
                }`}
                onClick={() => isParent && toggleCollapse(workspace.id)}
                style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--textColorOnPrimary)' }}  // Dynamic colors
              >
                <div className={`flex py-2 items-center ${fontSizeClass}`}>
                  {IconComponent && <IconComponent className="mr-2 text-lg" />}
                  <Link
                    to={workspace.path}
                    className={`block ${
                      isParent ? 'font-semibold' : 'font-normal'
                    }`}
                    onClick={() => !isParent }
                    style={{ color: 'var(--textColorOnPrimary)' }}  // Dynamic link text color
                  >
                    {workspace.name}
                  </Link>
                </div>
                {isParent && (
                  <div>
                    {isCollapsed ? (
                      <FaChevronUp style={{ color: 'var(--textColorOnPrimary)' }} />
                    ) : (
                      <FaChevronDown style={{ color: 'var(--textColorOnPrimary)' }} />
                    )}
                  </div>
                )}
              </div>

              {/* Render children if not collapsed */}
              {isParent && !isCollapsed && (
                <div className="ml-4">
                  {renderWorkspaces(workspace.children, level + 1)}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div
    className={`fixed top-0 left-0 h-full w-64 z-40 shadow-sm transform transition-transform duration-300 left-nav-content ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}
    style={{
      backgroundColor: 'var(--secondaryBackground)',  // Dynamic primary background color
      color: 'var(--primaryTextColor)',  // Dynamic primary text color
    }}
  >
    <nav className="flex flex-col space-y-2 p-2 text-sm">
      {/* Dynamic Workspace Links */}
      <div>
        <ul className="space-y-2">
          {renderWorkspaces(workspaceTree)}
        </ul>
      </div>
    </nav>
  </div>
  
  );
};

export default LeftNav;
