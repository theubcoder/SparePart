/**
 * Automatic locale and country redirection
 * Detects user's country and sets appropriate language
 */

(function() {
  // Check if we've already processed the redirect to avoid loops
  if (sessionStorage.getItem('locale-redirect-processed')) {
    return;
  }

  // Get current locale and country
  const currentLocale = window.Shopify?.locale || 'en';
  const currentCountry = window.Shopify?.country || 'US';
  
  // Check if user has manually selected a preference
  const userPreference = localStorage.getItem('user-locale-preference');
  if (userPreference) {
    return;
  }

  // Define country to language mappings
  const countryLanguageMap = {
    'SA': 'ar', // Saudi Arabia -> Arabic
    'AE': 'ar', // UAE -> Arabic
    'KW': 'ar', // Kuwait -> Arabic
    'QA': 'ar', // Qatar -> Arabic
    'BH': 'ar', // Bahrain -> Arabic
    'OM': 'ar', // Oman -> Arabic
    'JO': 'ar', // Jordan -> Arabic
    'LB': 'ar', // Lebanon -> Arabic
    'EG': 'ar', // Egypt -> Arabic
    'IQ': 'ar', // Iraq -> Arabic
    'SY': 'ar', // Syria -> Arabic
    'YE': 'ar', // Yemen -> Arabic
    'LY': 'ar', // Libya -> Arabic
    'TN': 'ar', // Tunisia -> Arabic
    'DZ': 'ar', // Algeria -> Arabic
    'MA': 'ar', // Morocco -> Arabic
    'SD': 'ar', // Sudan -> Arabic
  };

  // Function to redirect to appropriate locale
  function redirectToLocale(targetLocale, targetCountry) {
    if (currentLocale === targetLocale) {
      return;
    }

    // Mark as processed to avoid redirect loops
    sessionStorage.setItem('locale-redirect-processed', 'true');

    // Build the redirect URL
    let redirectUrl = window.location.pathname;
    
    // Replace locale in URL if it exists
    if (redirectUrl.startsWith('/' + currentLocale)) {
      redirectUrl = redirectUrl.replace('/' + currentLocale, '/' + targetLocale);
    } else {
      redirectUrl = '/' + targetLocale + redirectUrl;
    }

    // Add search params and hash
    redirectUrl += window.location.search + window.location.hash;

    // Perform the redirect
    window.location.href = redirectUrl;
  }

  // Try to detect user's country from Shopify or browser
  function detectAndRedirect() {
    // First check if Shopify has detected the country
    if (currentCountry && countryLanguageMap[currentCountry]) {
      const targetLocale = countryLanguageMap[currentCountry];
      redirectToLocale(targetLocale, currentCountry);
      return;
    }

    // Try to get country from browser's timezone
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Map common Saudi Arabian timezones
      const saudiTimezones = ['Asia/Riyadh', 'Asia/Jeddah', 'Asia/Dammam'];
      
      if (saudiTimezones.includes(timezone)) {
        redirectToLocale('ar', 'SA');
        return;
      }
    } catch (e) {
      console.log('Could not detect timezone');
    }

    // Try to use browser language as fallback
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang && browserLang.startsWith('ar')) {
      redirectToLocale('ar', 'SA');
    }
  }

  // Run detection on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', detectAndRedirect);
  } else {
    detectAndRedirect();
  }

  // Listen for manual locale changes to save preference
  document.addEventListener('click', function(e) {
    const localizationForm = e.target.closest('localization-form');
    if (localizationForm && e.target.closest('a[data-value]')) {
      localStorage.setItem('user-locale-preference', 'manual');
      sessionStorage.removeItem('locale-redirect-processed');
      
      // Update dir attribute immediately if switching to/from Arabic
      const selectedLocale = e.target.closest('a[data-value]').getAttribute('data-value');
      if (selectedLocale) {
        updateDirAttribute(selectedLocale);
      }
    }
  });
  
  // Function to update HTML dir attribute
  function updateDirAttribute(locale) {
    const html = document.documentElement;
    if (locale === 'ar') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'ar');
    } else {
      html.removeAttribute('dir');
      html.setAttribute('lang', locale || 'en');
    }
  }
  
  // Ensure dir attribute is set correctly on page load
  document.addEventListener('DOMContentLoaded', function() {
    const currentLocale = window.Shopify?.locale || document.documentElement.lang || 'en';
    updateDirAttribute(currentLocale);
  });
})();