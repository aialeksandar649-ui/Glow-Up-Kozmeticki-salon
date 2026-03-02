# 🚀 Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:5173/**

---

## 🎯 What You'll See

### Homepage Sections (in order)
1. **Navigation** - Sticky header with dark mode toggle
2. **Hero** - Animated landing with CTAs
3. **Services** - 6 service cards with hover effects
4. **Pricing** - 15 services with category filters
5. **Smart Booking** - 4-step booking form
6. **Gallery** - Interactive image gallery with modal
7. **Reviews** - Auto-play testimonial carousel
8. **About** - Team and company info
9. **Contact** - Contact information
10. **Footer** - Links and social media

---

## 🎨 Try These Features

### 🌓 Dark Mode
- Click the moon/sun icon in the navigation bar
- Watch all colors smoothly transition
- Theme persists across page refreshes

### 📝 Smart Booking Form
1. Click "Zakaži termin" in hero or navigation
2. Follow the 4-step wizard:
   - Choose a service
   - Pick a date
   - Select a time slot
   - Enter your contact info
3. Watch the animated success screen

### 🖼️ Interactive Gallery
1. Scroll to Gallery section
2. Click any image to open full-screen modal
3. Use arrow buttons or keyboard arrows to navigate
4. Click X or outside to close
5. Notice the smooth transitions

### 📊 Pricing Filters
1. Scroll to Cjenovnik (Pricing) section
2. Click different category buttons
3. Watch services filter with smooth animations

### 🎠 Testimonial Carousel
1. Scroll to Reviews section
2. Wait 5 seconds for auto-play
3. Or use arrow buttons to navigate manually
4. Hover over to pause auto-play
5. Click dots to jump to specific review

---

## 🎮 Keyboard Shortcuts

### Gallery Modal
- `←` Left Arrow - Previous image
- `→` Right Arrow - Next image
- `Esc` - Close modal

### Navigation
- `Tab` - Navigate through links
- `Enter` - Activate link

---

## 📱 Mobile Testing

### Chrome DevTools
1. Press `F12` to open DevTools
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Select different devices:
   - iPhone 12 Pro
   - iPad
   - Samsung Galaxy S21

### Test Features
- ✅ Hamburger menu
- ✅ Touch gestures on gallery
- ✅ Form usability
- ✅ All sections stack properly

---

## 🎨 Customization Guide

### Update Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'rose-powder': '#F4D7DA',  // Change this
  'gold': '#D4AF37',         // Change this
  // ...
}
```

### Update Contact Info
Edit these files:
- `src/components/Contact.tsx` - Contact details
- `src/components/Footer.tsx` - Footer info
- `src/components/SmartBooking.tsx` - WhatsApp/Instagram

### Update Services
Edit `src/components/Services.tsx`:
```typescript
const services = [
  {
    icon: Sparkles,
    title: 'Your Service',
    description: 'Description...',
    treatments: ['Item 1', 'Item 2']
  }
]
```

### Update Pricing
Edit `src/components/Pricing.tsx`:
```typescript
const pricingData = [
  {
    id: '1',
    category: 'Category Name',
    service: 'Service Name',
    duration: '60 min',
    price: '50 KM',
    features: ['Feature 1', 'Feature 2']
  }
]
```

### Update Gallery
Edit `src/components/InteractiveGallery.tsx`:
```typescript
const galleryItems = [
  {
    id: 1,
    category: 'Category',
    description: 'Description',
    image: 'https://...'
  }
]
```

### Update Reviews
Edit `src/components/TestimonialSlider.tsx`:
```typescript
const reviews = [
  {
    id: 1,
    name: 'Client Name',
    rating: 5,
    text: 'Review text...',
    service: 'Service Name'
  }
]
```

---

## 🐛 Common Issues

### Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or use different port
npm run dev -- --port 3000
```

### Dependencies Error
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Run type check
npm run typecheck
```

### Build Fails
```bash
# Clear dist folder
rm -rf dist
npm run build
```

---

## 🚀 Production Build

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder
3. Done!

---

## 📚 Learn More

### Documentation
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Vite Guide](https://vitejs.dev/guide)

### Component Libraries Used
- [Lucide Icons](https://lucide.dev)
- [Framer Motion](https://www.framer.com/motion)

---

## 💡 Tips

1. **Keep it Simple** - Don't over-engineer
2. **Test Mobile** - Always check responsive design
3. **Optimize Images** - Use WebP format
4. **Check Performance** - Use Lighthouse
5. **Add Analytics** - Google Analytics or similar

---

## ✅ Checklist Before Deploy

- [ ] Update contact information
- [ ] Add real images
- [ ] Test all forms
- [ ] Check mobile responsiveness
- [ ] Run `npm run build`
- [ ] Run `npm run typecheck`
- [ ] Run `npm run lint`
- [ ] Test production build (`npm run preview`)
- [ ] Add meta tags for SEO
- [ ] Add favicon
- [ ] Set up domain

---

## 🎉 You're Ready!

The app is running at **http://localhost:5173/**

Enjoy exploring your premium beauty salon website! 💅✨
