import React, { useState, useEffect } from 'react';
import { FaExpand, FaCompress, FaBars } from 'react-icons/fa'; // Import icons including a menu (FaBars)

const Header = ({ toggleTheme, currentTheme, toggleNav }) => {
  const [headerData, setHeaderData] = useState(null);
  const [icons, setIcons] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);

  const loadIcon = async (iconName) => {
    try {
      const { [iconName]: Icon } = await import(`react-icons/fa`);
      setIcons((prevIcons) => ({ ...prevIcons, [iconName]: Icon }));
    } catch (error) {
      console.error(`Error loading icon: ${iconName}`, error);
    }
  };

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/data/header.json`)
      .then((response) => response.json())
      .then((data) => {
        setHeaderData(data);

        const iconNames = [
          ...data.utilityLinks.map((link) => link.icon),
          data.themeIcons.light,
          data.themeIcons.dark
        ];

        iconNames.forEach((iconName) => loadIcon(iconName));
      })
      .catch((error) => console.error('Error fetching the JSON data:', error));
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  if (!headerData) return <div>Loading...</div>;

  const { logoText, utilityLinks, themeIcons, showFullscreenToggle } = headerData;

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm" style={{ backgroundColor: 'var(--primaryColor)' }}>
      <div className="flex justify-between items-center w-full px-4 py-0">
  {/* Left Group: Nav Toggle and Logo */}
  <div className="flex items-center space-x-[10px]">
    {/* Nav Toggle Button */}
    <button
      onClick={toggleNav}
      className="p-1 rounded-md text-lg"
      style={{ backgroundColor: 'var(--secondaryColor)', color: 'var(--textColorOnPrimary)' }}
    >
      <FaBars />
    </button>

    {/* Company Logo Image */}
    <img
      src={`/logo.png`}  // Update this with the actual path to your company logo image
      alt="Company Logo"
      className="h-10 w-auto object-contain" // Adjust height and width as needed
    />

    

    {/* Logo Text */}
    <div className = "text-xl" style={{ color: 'var(--textColorOnPrimary)' }}>{logoText}</div>
  </div>

  {/* Right Group: Theme Selector and Other Links */}
  <div className="flex items-center space-x-4">
    {/* Utility Links or Theme Selector */}
    {utilityLinks.map((utility, index) => {
      const IconComponent = icons[utility.icon];
      return IconComponent ? (
        <a key={index} href={utility.href} style={{ color: 'var(--textColorOnPrimary)' }} className="text-lg">
          <IconComponent className="inline-block" />
        </a>
      ) : null;
    })}

    {/* Theme Toggle Button */}
    <button
      onClick={toggleTheme}
      className="p-1 rounded-md text-lg transition duration-300"
      style={{
        backgroundColor: 'var(--secondaryColor)',
        color: 'var(--textColorOnPrimary)',
      }}
    >
      {currentTheme === 'light' && icons[themeIcons.light]
        ? React.createElement(icons[themeIcons.light])
        : currentTheme === 'dark' && icons[themeIcons.dark]
        ? React.createElement(icons[themeIcons.dark])
        : null}
    </button>

    {/* Fullscreen Toggle Button */}
    {showFullscreenToggle && (
      <button
        onClick={toggleFullscreen}
        className="p-1 rounded-md text-lg transition duration-300"
        style={{
          backgroundColor: 'var(--secondaryColor)',
          color: 'var(--textColorOnPrimary)',
        }}
      >
        {isFullscreen ? <FaCompress /> : <FaExpand />}
      </button>
    )}
  </div>
</div>
    </header>
  );
};

export default Header;
