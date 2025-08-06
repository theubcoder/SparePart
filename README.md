# Spare Parts Theme

A customized Shopify Dawn theme for spare parts and automotive e-commerce with full Arabic language support and RTL layout.

## Features

### 🌍 Multi-Language Support
- **Arabic Translation**: Complete Arabic translation for all UI elements
- **RTL Layout**: Full right-to-left support for Arabic language
- **Language Switcher**: Easy language toggle in header and mobile drawer
- **Bilingual Content**: Automatic content switching based on selected language

### 🎨 Custom Components
- **Banner Slider**: Custom image slider with navigation controls
  - Previous/Next navigation buttons
  - Dot navigation
  - Auto-rotation support
  - Touch/swipe support on mobile
  - Keyboard navigation
  
### 📱 Responsive Design
- Mobile-optimized layouts
- Drawer menu with language selector
- Responsive product grids
- Adaptive image sizing

### 🛠️ Spare Parts Features
- Product translations for common auto parts
- Spare parts search functionality
- Parts specifications display
- Vehicle compatibility information

## Installation

1. Clone this repository:
```bash
git clone https://github.com/theubcoder/Spare-part.git
```

2. Upload to Shopify:
   - Go to your Shopify Admin
   - Navigate to Online Store > Themes
   - Click "Upload theme"
   - Select the theme files

## Customization

### Adding Banner Images
1. Go to Theme Customizer
2. Navigate to Banner Slider section
3. Upload your banner images through the image picker
4. Configure auto-rotation and navigation options

### Language Configuration
- Arabic translations are in `/locales/ar.json`
- Product title translations in `/snippets/translate-product-title.liquid`
- Bilingual content handled by `/snippets/bilingual-content.liquid`

## File Structure

```
├── assets/
│   ├── rtl.css                    # RTL styling for Arabic
│   ├── banner-1.jpg              # Banner images
│   ├── banner-2.jpg
│   └── banner-3.jpg
├── sections/
│   ├── banner-slider.liquid      # Custom banner slider
│   └── header.liquid             # Modified header with language selector
├── snippets/
│   ├── language-localization.liquid
│   ├── translate-product-title.liquid
│   └── bilingual-content.liquid
├── locales/
│   └── ar.json                   # Arabic translations
└── templates/
    └── index.json                # Homepage configuration
```

## Arabic Translations Include

- Navigation menus
- Product categories
- Shopping cart
- Checkout process
- Product descriptions
- Common spare parts terminology
- UI elements and buttons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Based on Dawn Theme

This theme is built on top of Shopify's Dawn theme, maintaining all its performance benefits while adding specialized features for spare parts e-commerce.

## License

Based on Shopify Dawn theme. Copyright (c) 2021-present Shopify Inc. See [LICENSE](/LICENSE.md) for further details.

## Support

For issues or questions, please open an issue on [GitHub](https://github.com/theubcoder/Spare-part/issues).

## Credits

- Based on Shopify Dawn theme
- Arabic translations and RTL implementation
- Custom banner slider component
- Spare parts functionality enhancements