# 403 Forbidden Error - Fix Guide

## Problem
You're getting a 403 Forbidden error on `hotpink-cod-889818.hostingersite.com`. This is likely because:

1. **Your app uses server actions** (`actions.ts` with `'use server'`) which requires Node.js
2. **Your `.htaccess` was misconfigured** for Next.js routing
3. **Apache might be blocking access** or interfering with Node.js

## Solutions

### Solution 1: If You Have Node.js Support (Recommended)

If your Hostinger plan supports Node.js (VPS, Cloud, or Business hosting):

1. **The `.htaccess` file has been updated** to properly handle Next.js routing
2. **Ensure Node.js is running:**
   ```bash
   # SSH into your server and check if Node.js is running
   pm2 list
   # Or
   ps aux | grep node
   ```

3. **If Node.js isn't running, start it:**
   ```bash
   cd /path/to/your/project
   npm install --production
   npm run build
   pm2 start npm --name "nextjs-app" -- start
   pm2 save
   ```

4. **Configure Apache to proxy to Node.js** (if needed):
   - You may need to set up a reverse proxy from Apache to your Node.js server
   - Or configure Hostinger to serve directly from Node.js (bypass Apache)

### Solution 2: If You DON'T Have Node.js Support

If you're on shared hosting without Node.js support, you have two options:

#### Option A: Upgrade to Node.js Hosting
- Upgrade to VPS, Cloud, or Business hosting with Node.js support
- This is the recommended solution to keep all features working

#### Option B: Convert to Static Export (Will Break Server Actions)

⚠️ **Warning:** This will disable your contact form and AI features that use server actions.

1. **Update `next.config.ts`:**
   ```typescript
   output: 'export',  // Change from 'standalone'
   ```

2. **Remove or modify server actions:**
   - Replace the contact form with a third-party service (Formspree, Netlify Forms, etc.)
   - Remove AI summary features or move them to client-side

3. **Build and deploy:**
   ```bash
   npm run build
   # Upload the 'out' folder contents to public_html
   ```

### Solution 3: Fix File Permissions

If files aren't accessible due to permissions:

```bash
# SSH into your server
cd /path/to/public_html
chmod 755 .
chmod 644 .htaccess
find . -type d -exec chmod 755 {} \;
find . -type f -exec chmod 644 {} \;
```

### Solution 4: Check Apache Configuration

The updated `.htaccess` should now:
- ✅ Allow access to static files (`_next/static`, images, etc.)
- ✅ Prevent directory listing
- ✅ Handle Next.js routing properly
- ✅ Set security headers

## Immediate Steps to Try

1. **Upload the updated `.htaccess` file** to your server
2. **Check your Hostinger control panel:**
   - Verify Node.js version is set (18.x or 20.x)
   - Check if Node.js application is running
   - Review error logs

3. **Test the site** - the 403 error should be resolved

## Still Getting 403?

1. **Check Hostinger error logs** in your control panel
2. **Verify file permissions** (see Solution 3)
3. **Contact Hostinger support** to confirm:
   - Your plan has Node.js support
   - Node.js is properly configured
   - No server-side blocks are active

## Next Steps

After fixing the 403 error:
- Test all pages and features
- Verify the contact form works (if using Node.js)
- Check that images and static assets load correctly
- Monitor server logs for any other issues
