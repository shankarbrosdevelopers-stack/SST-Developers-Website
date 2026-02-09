# Hosting Guide: SST Developers Website

This guide explains how to deploy your website to **Hostinger** using either the modern **React (Vite)** version or the simple **Vanilla HTML** version.

---

## Option 1: Hosting the React Version (Recommended)

Since this project uses Vite and React, you must "build" it into static files before uploading.

### 1. Generate the Build
Run this command in your project terminal:
```bash
npm run build
```
- This will create a new folder named `dist` in your project directory.
- This `dist` folder contains everything needed for the website (HTML, CSS, JS, and optimized images).

### 2. Upload to Hostinger
1. Log in to your **Hostinger hPanel**.
2. Go to **Websites** -> **Manage** -> **File Manager**.
3. Navigate to the `public_html` folder.
4. Upload all files **from inside the `dist` folder** (not the folder itself) into `public_html`.
5. Your site is now live!

---

## Option 2: Hosting the Vanilla Version

If you prefer to use the static `index.html` and `styles.css` files directly:

### 1. Identify Files
You will need to upload:
- `index.html` (the main landing page)
- `styles.css`
- `app.js`
- `images/` folder (all your property and event images)
- `Brouchers/` folder (if applicable)

### 2. Upload to Hostinger
1. Log in to your **Hostinger hPanel**.
2. Go to **File Manager**.
3. Navigate to `public_html`.
4. Upload the files listed above directly into the `public_html` directory.
5. **Note**: If `index.html` exists in your project, it will be the default page loaded by Hostinger.

---

## Important Tips

### Custom Domain
Ensure your domain name is correctly pointed to your Hostinger nameservers (usually `ns1.dns-parking.com` and `ns2.dns-parking.com`).

### Using FTP (FileZilla)
If you have many images, using an FTP client like **FileZilla** is faster than the browser File Manager:
1. Get your FTP details from **Hostinger hPanel** -> **Files** -> **FTP Accounts**.
2. Connect using FileZilla.
3. Drag and drop your files into the `public_html` folder on the right-hand side.

### Refreshing Changes
After uploading, if you don't see changes, try a **Hard Refresh** in your browser:
- **Windows**: `Ctrl + F5` or `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`
