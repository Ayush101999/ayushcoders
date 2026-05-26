# AyushCoders Website

A modern, animated React website for AyushCoders - showcasing courses in AI Tools, Python, Full Stack Development, and React.

## 🚀 Features

- **Modern Design**: Beautiful gradient backgrounds with animated orbs
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive**: Fully responsive design that works on all devices
- **Course Listings**: Four comprehensive courses with detailed information
- **WhatsApp Integration**: Direct enrollment through WhatsApp messaging
- **Fast Performance**: Built with Vite for lightning-fast development and builds

## 📚 Courses Offered

1. **AI Tools Mastery** 🤖
   - Student Track: ₹4,999 (12 weeks)
   - Professional Track: ₹9,999 (8 weeks)

2. **Python Programming** 🐍
   - Complete Python: ₹5,999 (10 weeks)

3. **Full Stack Web Development** 💻
   - MERN Stack: ₹12,999 (16 weeks)

4. **React Development** ⚛️
   - React Mastery: ₹6,999 (8 weeks)

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **React Router DOM** - Routing
- **React Icons** - Icon library

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development Server

The development server runs at: `http://localhost:5173/`

## 📱 WhatsApp Integration

When users click "Enroll Now", they are redirected to WhatsApp with a pre-filled message containing:
- Course name
- Track name
- Price

**Update WhatsApp Number**: Edit the phone number in:
- `src/pages/CourseDetail.jsx` (line 24)
- `src/pages/Home.jsx` (line 218)

Replace `919999999999` with your actual WhatsApp number (with country code, no + or spaces).

## 🎨 Customization

### Update Contact Information

Edit the following files:
- `src/components/Footer.jsx` - Update email, phone, and social links
- `src/data/coursesData.js` - Update course details, prices, and features

### Change Colors

Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... more colors */
}
```

### Add New Courses

1. Add course data to `src/data/coursesData.js`
2. The course will automatically appear on the homepage
3. Course detail page will be generated automatically

## 📂 Project Structure

```
ayushcoders-website/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── *.css
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── CourseDetail.jsx
│   │   └── *.css
│   ├── data/           # Course data
│   │   └── coursesData.js
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   └── main.jsx        # Entry point
├── package.json
└── vite.config.js
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder
```

## 📝 TODO

- [ ] Add your actual logo to `src/assets/`
- [ ] Update WhatsApp number
- [ ] Update contact information
- [ ] Add actual social media links
- [ ] Customize course content
- [ ] Add testimonials with real data
- [ ] Set up analytics (Google Analytics, etc.)

## 👨‍💻 Instructor

**Ayush Rastogi**
- Software Engineer & AI Enthusiast
- Organization: AyushCoders

## 📄 License

This project is private and proprietary.

## 🤝 Support

For any queries, contact:
- Email: contact@ayushcoders.com
- WhatsApp: +91 XXXXX XXXXX

---

Made with ❤️ by Ayush Rastogi
