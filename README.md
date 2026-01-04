# Sticky Rice Fight Gym

A modern, polished React website for Sticky Rice Fight Gym with multi-language support (English & Thai).

## Features

- ⚛️ **React + Vite** - Fast development and optimized builds
- 🌐 **Multi-language Support** - English and Thai translations
- 🎨 **Tailwind CSS** - Modern, responsive styling
- 🎬 **Video Background** - Hero section with fight gym training video
- ✨ **Smooth Animations** - Scroll reveal animations and transitions
- 📱 **Responsive Design** - Mobile-first, works on all devices

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
stickyricegym/
├── src/
│   ├── components/          # React components
│   │   ├── TopBar.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrainingPrograms.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Affiliations.jsx
│   │   └── Footer.jsx
│   ├── context/             # React context
│   │   └── LanguageContext.jsx
│   ├── translations/        # Translation files
│   │   ├── en.json
│   │   └── th.json
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Changing the Hero Video

Replace the video source in `src/components/Hero.jsx`:

```jsx
<source src="YOUR_VIDEO_URL.mp4" type="video/mp4" />
```

### Adding/Editing Translations

Edit the JSON files in `src/translations/`:
- `en.json` - English translations
- `th.json` - Thai translations

### Styling

The project uses Tailwind CSS. Customize colors and fonts in `tailwind.config.js`.

## Language Switching

The language switcher is located in the navigation bar. Users can toggle between English (EN) and Thai (TH). The selected language is saved in localStorage.

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)
- Intersection Observer API (scroll animations)

## License

© 2024 Sticky Rice Fight Gym. All Rights Reserved.
