# Video Setup Instructions

## Option 1: Local Video (Recommended for Production)

1. Place your Muay Thai/fight gym training video in this `public/videos/` folder
2. Name it something like: `hero-background.mp4`
3. The video will be automatically available at `/videos/hero-background.mp4`

### Recommended Video Specs:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 30-60 seconds (will loop)
- **File Size**: Try to keep under 10MB for fast loading
- **Aspect Ratio**: 16:9 works best

### Video Optimization Tips:
- Use a video compression tool like HandBrake to reduce file size
- Consider WebM format for even better compression (add as alternative source)
- For background videos, you can use lower quality (1080p is usually fine)

## Option 2: External Video Hosting

If you prefer to use an external video hosting service:

### Recommended Services:
- **Cloudflare Stream** (best for production)
- **Vimeo** (embed as background)
- **YouTube** (has autoplay restrictions)
- **AWS S3 + CloudFront** (for large-scale projects)

## Current Setup

The Hero component is already configured to:
- Handle video loading errors gracefully
- Show a fallback gradient background if video fails
- Support both local and external video URLs

To use your video, update the `src` attribute in `src/components/Hero.jsx`
