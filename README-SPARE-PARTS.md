# Spare Parts Pro Theme

A customized Shopify theme specifically designed for spare parts and components stores, based on Shopify's Dawn theme. Features full support for both English and Arabic (Saudi Arabia) languages with RTL layout.

## Features

### Multi-Language Support
- **Full Arabic Translation**: Complete Arabic (ar-SA) locale with all UI elements translated
- **RTL Layout**: Automatic right-to-left layout when Arabic is selected
- **Language Switcher**: Built-in language selector in header/footer
- **Spare Parts Terminology**: Industry-specific translations for auto parts

### Advanced Vehicle Search System
- **Multi-Brand Support**: Hierarchical selection: Brand → Model → Trim → Year
- **Dynamic Filtering**: Each dropdown filters based on previous selection
- **Dual Search Options**: Search by vehicle selection OR part number/description
- **Arabic & RTL Ready**: Full Arabic translations with proper RTL layout

### Custom Sections
- **Parts Specifications**: Display technical specifications in an organized grid layout
- **Parts Search Form**: Enhanced search functionality with vehicle selection
- **Spare Parts Collection Template**: Specialized collection page for parts categories

### Product Page Enhancements
- Specifications tab instead of Materials
- Compatibility information section
- Installation guide section
- Warranty & Support information
- "Compatible Parts" section instead of "You may also like"

### Customizations
- Updated theme name to "Spare Parts Pro"
- Specialized product information tabs
- Parts-focused content blocks
- Enhanced search functionality with vehicle selection
- Comprehensive vehicle data management

## Language Configuration

To enable both English and Arabic in your Shopify store:

1. **In Shopify Admin**:
   - Go to Settings > Languages
   - Click "Add language"
   - Select "Arabic" from the list
   - Save changes

2. **Set Arabic as available**:
   - After adding Arabic, click on it
   - Check "Publish to your online store"
   - Save

3. **The theme automatically**:
   - Detects the selected language
   - Applies RTL layout for Arabic
   - Shows the language switcher

## Setup Instructions

1. **Install Shopify CLI** (if not already installed):
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Configure the theme**:
   - Edit `config.yml` with your store credentials
   - Replace `YOUR_API_PASSWORD`, `YOUR_STORE_URL`, and `YOUR_THEME_ID`

3. **Upload the theme**:
   ```bash
   shopify theme push
   ```

4. **Development workflow**:
   ```bash
   # Watch for changes and auto-upload
   shopify theme dev

   # Or use Theme Kit if you prefer
   theme watch
   ```

## Theme Structure

- `/sections/parts-specifications.liquid` - Custom section for displaying part specifications
- `/snippets/parts-search-form.liquid` - Enhanced search form with vehicle selection
- `/templates/collection.spare-parts.json` - Specialized collection template
- `/templates/product.json` - Customized product template with parts-specific tabs
- `/assets/section-parts-specifications.css` - Styles for specifications section
- `/assets/spare-parts-search.js` - JavaScript for dynamic vehicle selection
- `/assets/rtl.css` - RTL styles for Arabic language support
- `/config/settings_schema.json` - Theme settings including vehicle data configuration

## Vehicle Data Configuration

### Adding Vehicle Data
1. Go to **Theme Settings → Spare Parts Configuration**
2. Edit the **Vehicle Data (JSON)** field
3. Follow this structure:

```json
[
  {
    "brand": "Toyota",
    "models": [
      {
        "name": "Camry",
        "trims": [
          {
            "name": "LE",
            "years": ["2020", "2021", "2022", "2023", "2024"]
          },
          {
            "name": "SE",
            "years": ["2020", "2021", "2022", "2023", "2024"]
          }
        ]
      },
      {
        "name": "Corolla",
        "trims": [
          {
            "name": "L",
            "years": ["2020", "2021", "2022", "2023", "2024"]
          }
        ]
      }
    ]
  },
  {
    "brand": "Honda",
    "models": [
      {
        "name": "Accord",
        "trims": [
          {
            "name": "LX",
            "years": ["2020", "2021", "2022", "2023", "2024"]
          }
        ]
      }
    ]
  }
]
```

## Customization Tips

1. **Adding Part Numbers**: Use product metafields to store part numbers and display them prominently
2. **Compatibility Lists**: Create metafields for compatible models/makes
3. **Technical Specs**: Use the parts-specifications section to display detailed technical information
4. **Categories**: Organize parts by vehicle make/model or part type using collections
5. **Vehicle Tagging**: Tag products with vehicle compatibility:
   - Brand: `brand:Toyota`
   - Model: `model:Camry`
   - Trim: `trim:LE`
   - Year: `year:2023`

## Next Steps

1. Add product metafields for:
   - Part numbers
   - OEM references
   - Compatible models
   - Technical specifications

2. Create collections for:
   - Part categories (Engine, Transmission, Electrical, etc.)
   - Vehicle makes/models
   - Part conditions (New, Refurbished, Used)

3. Configure filters for:
   - Make/Model/Year
   - Part category
   - Price range
   - Availability

## Support

For theme-specific questions, refer to the [Shopify Theme Documentation](https://shopify.dev/themes).

For Dawn theme documentation, visit the [Dawn GitHub repository](https://github.com/Shopify/dawn).