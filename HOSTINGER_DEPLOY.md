# Hostinger Deployment Guide

## Important Notes

Hostinger के साथ Next.js deploy करने के लिए, आपको **Node.js support** वाला hosting plan चाहिए:
- **VPS Hosting** (Recommended)
- **Cloud Hosting** 
- **Business/WordPress Hosting** (कुछ plans में Node.js support होता है)

Shared hosting plans में typically Node.js support नहीं होता।

## Deployment Steps

### Option 1: Node.js Support के साथ (Recommended)

1. **Files Upload करें:**
   - सभी project files को `public_html` folder में upload करें
   - `.next` folder को upload **न करें** (यह build के बाद generate होगा)

2. **Node.js Version Set करें:**
   - Hostinger control panel में जाएं
   - Node.js version select करें (18.x या 20.x recommended)

3. **Dependencies Install करें:**
   ```bash
   npm install --production
   ```

4. **Build करें:**
   ```bash
   npm run build
   ```

5. **Start Script Configure करें:**
   - Hostinger में `start` script को configure करें
   - Port typically `3000` या environment variable से set होता है

6. **PM2 या Process Manager Use करें (Optional):**
   ```bash
   npm install -g pm2
   pm2 start npm --name "nextjs-app" -- start
   pm2 save
   pm2 startup
   ```

### Option 2: Static Export (अगर Node.js support नहीं है)

अगर आपके hosting plan में Node.js support नहीं है, तो आपको static export करना होगा:

1. **next.config.ts में update करें:**
   ```typescript
   output: 'export',
   ```

2. **Build करें:**
   ```bash
   npm run build
   ```

3. **`out` folder की contents को `public_html` में upload करें**

**Note:** Static export के साथ कुछ Next.js features काम नहीं करेंगे (जैसे API routes, server-side rendering, etc.)

## Troubleshooting

### Error: "Unsupported framework or invalid project structure"

यह error आमतौर पर तब आता है जब:
1. Hostinger auto-detection fail हो रहा है
2. Node.js support नहीं है आपके plan में
3. Project structure सही नहीं है

**Solutions:**
- Ensure `package.json` root directory में है
- Check कि `next.config.ts` file exists
- Verify Node.js version Hostinger में set है
- Contact Hostinger support से confirm करें कि आपके plan में Node.js support है

### Port Configuration

Hostinger में port typically environment variable से set होता है:
```bash
PORT=3000 npm start
```

या `.env` file में:
```
PORT=3000
```

## File Structure for Upload

Upload करते समय ensure करें:
```
public_html/
├── .htaccess (Apache के लिए)
├── package.json
├── next.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── src/
├── public/
└── node_modules/ (npm install के बाद)
```

**DO NOT upload:**
- `.next/` folder (build के बाद generate होगा)
- `node_modules/` (server पर install करें)
- `.git/` folder

## Support

अगर issues आ रहे हैं:
1. Hostinger support से contact करें
2. Check करें कि आपका hosting plan Node.js support करता है
3. Server logs check करें errors के लिए

