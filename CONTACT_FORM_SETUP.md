# Contact Form Setup Guide

## Current Implementation: Formspree

The contact forms have been updated to use **Formspree**, a free service that allows static websites to send emails without a backend server.

### How It Works

1. **Formspree** receives form submissions from your website
2. **Formspree** forwards the emails to `meihodoliving@gmail.com`
3. **No backend code required** - works with static hosting (GitHub Pages, Vercel, etc.)

### Setup Steps

1. **Sign up for Formspree** (free):
   - Go to [formspree.io](https://formspree.io)
   - Create a free account
   - Verify your email address

2. **Create a new form**:
   - Click "New Form"
   - Name it something like "Meihodo Contact Form"
   - Set the email to `meihodoliving@gmail.com`

3. **Get your form endpoint**:
   - Formspree will give you a URL like: `https://formspree.io/f/xqkndqkd`
   - Replace the current action in all contact forms with this URL

4. **Test the form**:
   - Submit a test message
   - Check your email inbox

### Current Form Action URLs

All contact forms currently use this placeholder:
```
action="https://formspree.io/f/meihodoliving@gmail.com"
```

**You need to replace this with your actual Formspree endpoint URL.**

### Alternative Solutions

If you prefer other options, here are alternatives that work with static hosting:

#### 1. EmailJS (Recommended Alternative)
- **Free tier**: 200 emails/month
- **Setup**: Add JavaScript library, configure email service
- **Pros**: More control, customizable
- **Cons**: Requires email service setup (Gmail, Outlook, etc.)

#### 2. Netlify Forms
- **Free tier**: 100 submissions/month
- **Setup**: Only works on Netlify hosting
- **Pros**: Very easy setup
- **Cons**: Must host on Netlify

#### 3. Google Forms
- **Free tier**: Unlimited
- **Setup**: Create Google Form, embed iframe
- **Pros**: Completely free, reliable
- **Cons**: Less customizable, Google branding

#### 4. Contact Form 7 (WordPress)
- **Free tier**: Unlimited
- **Setup**: WordPress plugin
- **Cons**: Requires WordPress hosting

### Recommended for Your Setup

**Formspree** is the best choice because:
- ✅ Works with GitHub Pages/Vercel
- ✅ Free tier (50 submissions/month)
- ✅ Professional appearance
- ✅ Easy setup
- ✅ Reliable delivery

### Next Steps

1. Sign up for Formspree
2. Get your form endpoint URL
3. Replace the placeholder URLs in all contact forms
4. Test the form
5. Monitor your email inbox

### Files Updated

- `contact/index.html` (English)
- `ja/contact/index.html` (Japanese)
- `zh-cn/contact/index.html` (Simplified Chinese)
- `zh-tw/contact/index.html` (Traditional Chinese)
- `assets/js/contact-form.js` (English JavaScript)
- `assets/js/contact-form-ja.js` (Japanese JavaScript)

All forms now have proper validation and will show success/error messages to users.

