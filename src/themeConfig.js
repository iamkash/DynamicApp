// Fetch the theme settings from the JSON file
export const fetchThemeSettings = async () => {
    try {
      const response = await fetch('/data/theme.json');
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
      // Set CSS variables for custom colors and fonts
      document.documentElement.style.setProperty('--primaryColor', currentTheme.primaryColor);
      document.documentElement.style.setProperty('--secondaryColor', currentTheme.secondaryColor);
      document.documentElement.style.setProperty('--interactiveColor', currentTheme.interactiveColor);
      document.documentElement.style.setProperty('--errorColor', currentTheme.errorColor);
      document.documentElement.style.setProperty('--backgroundColor', currentTheme.backgroundColor);
      document.documentElement.style.setProperty('--secondaryBackgroundColor', currentTheme.secondaryBackgroundColor);
      document.documentElement.style.setProperty('--tertiaryColor', currentTheme.tertiaryColor);
      document.documentElement.style.setProperty('--quaternaryColor', currentTheme.quaternaryColor);
      document.documentElement.style.setProperty('--darkBackground30', currentTheme.darkBackground30);
      document.documentElement.style.setProperty('--darkBackground20', currentTheme.darkBackground20);
      document.documentElement.style.setProperty('--darkBackground10', currentTheme.darkBackground10);
      document.documentElement.style.setProperty('--textColorOnPrimary', currentTheme.textColorOnPrimary);
      document.documentElement.style.setProperty('--textColorOnSecondary', currentTheme.textColorOnSecondary);
      document.documentElement.style.setProperty('--linkColor', currentTheme.linkColor);
      document.documentElement.style.setProperty('--fontFamily', currentTheme.fontFamily);
    }
  };
  