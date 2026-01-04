# 🚀 SST Developers Website - Localhost Setup Guide

This guide will help you run the SST Developers website on your local machine for development and testing.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- A code editor (VS Code recommended)
- A modern web browser (Chrome, Firefox, Edge, etc.)

### ✅ Verify Installation

Open your terminal/PowerShell and run:

```bash
node --version
npm --version
```

You should see version numbers displayed (e.g., `v18.17.0` and `9.6.7`).

---

## 🎯 Project Overview

This project has **two versions**:

1. **React Version** (Recommended for development) - Uses Vite + React + TypeScript
2. **Vanilla JS Version** - Pure HTML/CSS/JavaScript

---

## 🔧 Setup Instructions

### Step 1: Navigate to Project Directory

Open your terminal and navigate to the project folder:

```bash
cd "d:\01_PROJECTS\SST Developers\20251207(Website)\SST Developers Website"
```

### Step 2: Install Dependencies

Install all required npm packages:

```bash
npm install
```

> **Note:** This may take a few minutes depending on your internet connection.

---

## 🌐 Running the Website Locally

### Option 1: React Version (Development Mode)

This is the **recommended** way to run the project during development.

```bash
npm run dev
```

**What happens:**
- Vite development server starts
- Hot Module Replacement (HMR) is enabled - changes reflect instantly
- The site opens automatically in your browser
- Default URL: `http://localhost:5173`

**Expected Output:**
```
VITE v6.2.0  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

> **Tip:** Keep this terminal window open while developing. Press `Ctrl + C` to stop the server.

### Option 2: Vanilla JS Version

If you want to test the vanilla JavaScript version:

1. Open `index-vanilla.html` directly in your browser, **OR**
2. Use a simple HTTP server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js http-server (install first: npm install -g http-server)
http-server -p 8000
```

Then navigate to `http://localhost:8000/index-vanilla.html`

---

## 🏗️ Building for Production

To create an optimized production build:

```bash
npm run build
```

**What happens:**
- TypeScript is compiled
- React code is bundled and minified
- Assets are optimized
- Output is generated in the `dist/` folder

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This serves the `dist/` folder at `http://localhost:4173`

---

## 📁 Project Structure

```
SST Developers Website/
├── components/          # React components
├── images/             # Image assets
├── dist/               # Production build output (generated)
├── node_modules/       # Dependencies (generated)
├── App.tsx             # Main React app component
├── AppDebug.tsx        # Debug version of app
├── index.tsx           # React entry point
├── index-react.html    # HTML for React version
├── index-vanilla.html  # Vanilla JS version
├── app.js              # Vanilla JS logic
├── styles.css          # Global styles
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
├── package.json        # Project dependencies
└── .env.local          # Environment variables
```

---

## 🔍 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |

---

## 🛠️ Troubleshooting

### Port Already in Use

If port 5173 is already in use:

```bash
# Kill the process using the port (Windows PowerShell)
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Or specify a different port
npm run dev -- --port 3000
```

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Build Errors

```bash
# Ensure TypeScript is properly installed
npm install typescript --save-dev

# Check for type errors
npx tsc --noEmit
```

### Browser Not Opening Automatically

Manually navigate to `http://localhost:5173` in your browser.

---

## 🌟 Development Tips

### Hot Reload
- Changes to `.tsx`, `.ts`, `.css` files are reflected instantly
- No need to refresh the browser manually

### Browser DevTools
- Press `F12` to open developer tools
- Use the Console tab to check for errors
- Use the Network tab to monitor API calls

### Environment Variables
- Edit `.env.local` for local environment variables
- Variables must start with `VITE_` to be accessible in code
- Restart dev server after changing `.env.local`

### Debugging
- Use `AppDebug.tsx` for debugging purposes
- Add `console.log()` statements to track data flow
- Use React DevTools browser extension for component inspection

---

## 📱 Testing on Mobile Devices

To test on your phone/tablet on the same network:

1. Start the dev server:
   ```bash
   npm run dev -- --host
   ```

2. Find your computer's IP address:
   ```bash
   # Windows
   ipconfig
   # Look for IPv4 Address (e.g., 192.168.1.100)
   ```

3. On your mobile device, navigate to:
   ```
   http://YOUR_IP_ADDRESS:5173
   ```
   Example: `http://192.168.1.100:5173`

---

## 🔐 Environment Variables

The project uses `.env.local` for environment-specific configuration:

```env
VITE_API_URL=your_api_url_here
```

> **Note:** Never commit `.env.local` to version control (it's in `.gitignore`).

---

## 📞 Need Help?

If you encounter issues:

1. Check the **Troubleshooting** section above
2. Review the terminal output for error messages
3. Ensure all prerequisites are properly installed
4. Clear browser cache and try again

---

## ✅ Quick Start Checklist

- [ ] Node.js and npm installed
- [ ] Project dependencies installed (`npm install`)
- [ ] Development server running (`npm run dev`)
- [ ] Browser opened to `http://localhost:5173`
- [ ] Making changes and seeing them reflect instantly

---

**Happy Coding! 🎉**

*Last Updated: January 3, 2026*
