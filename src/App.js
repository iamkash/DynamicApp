import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Workspace from './components/Workspace';
import { applyTheme, fetchThemeSettings } from './themeConfig';
import './custom-igniteui-theme.css';



function App() {
  const [theme, setTheme] = useState('light');
  const [themeSettings, setThemeSettings] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [workspaces, setWorkspaces] = useState([]); // Workspaces state

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const loadTheme = async () => {
      const themes = await fetchThemeSettings();
      if (themes) {
        setThemeSettings(themes);
        applyTheme(themes, theme);
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    if (themeSettings) {
      applyTheme(themeSettings, theme);
    }
  }, [theme, themeSettings]);

  // Fetch the list of workspaces from the JSON file
  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data/workspaces.json`); // Fetch workspaces
        const data = await response.json();
        setWorkspaces(data.workspaces);
      } catch (error) {
        console.error('Error fetching workspace list:', error);
      }
    };

    fetchWorkspaces();
  }, []);

  if (!themeSettings || !workspaces) return <div>Loading...</div>;

  // Tailwind classes for width management
  const navWidthClass = isNavOpen ? 'ml-64' : 'ml-0'; // When nav is open, shift content to the right

  return (
    <Router>
      <div className="font-poppins min-h-screen" style={{ backgroundColor: 'var(--primaryBackground)', color: 'var(--primaryTextColor)' }}>
        {/* Header with theme and nav toggles */}
        <Header toggleTheme={toggleTheme} currentTheme={theme} toggleNav={toggleNav} />

        {/* Left Navigation */}
        <LeftNav isOpen={isNavOpen} toggleNav={toggleNav} />

        {/* Adjust main content based on left nav visibility */}
        <main className={`p-2 main-content transition-all duration-300 ${navWidthClass}`}>
          <Routes>
            {workspaces.map((workspace) => (
              <Route key={workspace.id} path={workspace.path} element={<Workspace workspaceId={workspace.id} />} />
            ))}
            <Route path="/" element={
              <div>
                
              </div>
            } />
            {/* Add a fallback route in case of no match */}
            <Route path="*" element={<div>404 - Workspace Not Found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
