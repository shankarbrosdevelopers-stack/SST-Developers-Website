# SSTDevelopers - Vanilla HTML/CSS/JS Version

## Overview
This project has been converted from React/TypeScript to vanilla HTML, CSS, and JavaScript. You can now run it by simply opening `index.html` in any web browser.

## Files Structure

### Core Files
- **index.html** - Main HTML file with all content and structure
- **styles.css** - Complete CSS styling (replaces Tailwind CSS)
- **app.js** - JavaScript for interactivity and navigation

### What Was Changed

#### Removed Dependencies
- ❌ React & React DOM
- ❌ TypeScript
- ❌ Vite build system
- ❌ Tailwind CSS CDN
- ❌ lucide-react icons
- ❌ All .tsx and .ts files

#### Added Files
- ✅ **styles.css** - Custom CSS with all Tailwind utilities converted
- ✅ **app.js** - Vanilla JavaScript with:
  - SVG icons embedded (replacing lucide-react)
  - Page navigation system
  - Mobile menu toggle
  - FAQ accordion functionality
  - Form handling
  - Scroll effects

## How to Run

### Method 1: Double-Click (Simplest)
1. Navigate to the `sst` folder
2. Double-click `index.html`
3. Your default browser will open the website

### Method 2: Drag and Drop
1. Open your web browser
2. Drag `index.html` into the browser window

### Method 3: File Menu
1. Open your web browser
2. Go to File → Open File
3. Select `index.html`

## Features

### Working Features
- ✅ Responsive navigation with mobile menu
- ✅ Hero section with search functionality
- ✅ Property listings with hover effects
- ✅ Category browsing
- ✅ About Us section with stats
- ✅ Why Choose Us features
- ✅ Client testimonials
- ✅ FAQ accordion
- ✅ Contact form
- ✅ Footer with social links
- ✅ Multi-page navigation (Home, About, Contact)
- ✅ Smooth scrolling
- ✅ All animations and transitions

### Interactive Elements
- Mobile menu toggle
- Page navigation (Home/About/Contact)
- FAQ accordion (click to expand/collapse)
- Contact form submission
- External links (Virtual Tour, Google Maps)
- Hover effects on all cards and buttons

## Browser Compatibility
Works on all modern browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## No Server Required
This is a static website that runs entirely in the browser. No build process, no server, no npm install needed!

## Customization

### To Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --primary: #0f172a;
  --secondary: #ca8a04;
  --accent: #1e3a8a;
}
```

### To Add More Properties
Add new property cards in `index.html` following the existing structure.

### To Modify Content
All content is in `index.html` - just edit the text directly.

## Original React Files
The original React/TypeScript files are still in the folder but are no longer used:
- App.tsx
- index.tsx
- components/*.tsx
- types.ts
- vite.config.ts
- tsconfig.json
- package.json

You can delete these if you only need the vanilla version.

## Support
For questions or issues, contact: shiridisait@gmail.com
