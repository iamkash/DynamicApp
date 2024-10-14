// Fetch the theme settings from the JSON file
export const fetchThemeSettings = async () => {
    try {
      const response = await fetch(`${process.env.PUBLIC_URL}/data/theme.json`);
      if (!response.ok) {
        throw new Error('Failed to fetch theme settings');
      }
      const data = await response.json();
      return data.themes;
    } catch (error) {
      console.error('Error fetching theme settings:', error);
      return null;
    }
  };
  
  // Apply the theme by setting CSS variables
  export const applyTheme = (themeSettings, theme) => {
    const currentTheme = themeSettings[theme];
  
    if (currentTheme) {
      // Set CSS variables for custom background colors
      document.documentElement.style.setProperty('--primaryBackground', currentTheme.primaryBackground);
      document.documentElement.style.setProperty('--secondaryBackground', currentTheme.secondaryBackground);
      document.documentElement.style.setProperty('--tertiaryBackground', currentTheme.tertiaryBackground);
    
      // Set CSS variables for custom text colors
      document.documentElement.style.setProperty('--primaryTextColor', currentTheme.primaryTextColor);
      document.documentElement.style.setProperty('--secondaryTextColor', currentTheme.secondaryTextColor);

      // Set CSS variables for custom Highlight colors
      document.documentElement.style.setProperty('--highlightBackgroundColor', currentTheme.highlightBackgroundColor);
      document.documentElement.style.setProperty('--accentTextColor', currentTheme.accentTextColor);
    }
    
  };
  