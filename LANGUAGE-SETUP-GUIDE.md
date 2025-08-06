# Language Setup Guide for Spare Parts Theme

## Overview
This theme has been configured to automatically detect visitors from Saudi Arabia (and other Arabic-speaking countries) and display the site in Arabic by default. Visitors from other countries will see English by default.

## Features Implemented

### 1. Automatic Language Detection
- **File**: `assets/locale-redirect.js`
- Automatically redirects visitors based on their country
- Saudi Arabia and other Middle Eastern countries → Arabic
- Other countries → English
- Remembers user preferences if they manually switch languages

### 2. Language Notice Bar
- **File**: `sections/announcement-bar.liquid`
- Shows a notice at the top of the page
- Arabic visitors see: "This site is also available in English"
- English visitors see: "هذا الموقع متوفر أيضاً باللغة العربية"
- Can be enabled/disabled in theme customizer

### 3. RTL Support
- **File**: `assets/rtl.css`
- Automatically loads for Arabic locale
- Provides right-to-left layout support

## Setup Instructions

### Step 1: Configure Theme Kit
1. Edit `config.yml` with your Shopify store details:
   ```yaml
   development:
     password: YOUR_PRIVATE_APP_PASSWORD
     theme_id: YOUR_THEME_ID
     store: your-store.myshopify.com
   ```

### Step 2: Deploy the Theme
```bash
# Upload all theme files
theme deploy

# Or upload specific files
theme deploy assets/locale-redirect.js
theme deploy sections/announcement-bar.liquid
theme deploy layout/theme.liquid
```

### Step 3: Enable Languages in Shopify Admin
1. Go to Shopify Admin → Settings → Languages
2. Add Arabic language if not already added
3. Set up your Arabic translations

### Step 4: Configure Markets
1. Go to Shopify Admin → Settings → Markets
2. Create or edit the Saudi Arabia market
3. Set Arabic as the default language for Saudi Arabia market

### Step 5: Test the Implementation
1. **Test automatic redirect**:
   - Use a VPN to simulate visiting from Saudi Arabia
   - Or add `?preview_locale=ar` to your URL
   
2. **Test manual switching**:
   - Use the language selector in the header
   - Check that preference is remembered

3. **Test language notice**:
   - Should appear at the top of the page
   - Links should switch between `/ar/` and `/en/` URLs

## Customization Options

### Countries that Default to Arabic
Edit `assets/locale-redirect.js` to modify the country list:
```javascript
const countryLanguageMap = {
  'SA': 'ar', // Saudi Arabia
  'AE': 'ar', // UAE
  'KW': 'ar', // Kuwait
  // Add or remove countries as needed
};
```

### Language Notice Text
Edit the text in `sections/announcement-bar.liquid`:
- Line 26: English text shown to Arabic users
- Line 28: Arabic text shown to English users

### Disable Automatic Redirect
To disable automatic redirection, remove this line from `layout/theme.liquid`:
```liquid
<script src="{{ 'locale-redirect.js' | asset_url }}" defer="defer"></script>
```

## Troubleshooting

### 404 Errors
- Ensure theme is properly deployed
- Check that Arabic translations exist for the page
- Verify URL structure: `/ar/products/...` for Arabic, `/en/products/...` for English

### Redirect Not Working
- Clear browser cache and cookies
- Check browser console for JavaScript errors
- Ensure multiple languages are enabled in Shopify admin

### Language Selector Not Showing
- Go to Theme Customizer → Header
- Enable "Show language selector"
- Ensure you have multiple languages published

## Support
For additional help, check:
- Shopify's multilingual guide: https://help.shopify.com/en/manual/cross-border/multilingual-online-store
- Theme documentation