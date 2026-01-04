# Video Setup Guide

## Current Status
❌ The Pexels video URL is returning 403 Forbidden - it won't load

## Recommended Solution: Local Video

**Best for:** Production, reliability, full control

### Steps:
1. Find/download a Muay Thai training video (30-60 seconds)
2. Name it: `hero-background.mp4`
3. Place it in: `public/videos/hero-background.mp4`
4. The video will be served from: `/videos/hero-background.mp4`
5. It's already configured in `src/components/Hero.jsx` ✅

### Video Specifications:
- **Format**: MP4 (H.264 codec) - works everywhere
- **Resolution**: 1920x1080 (Full HD) is perfect
- **Duration**: 30-60 seconds (will loop automatically)
- **File Size**: Try to keep under 10MB for fast loading
- **Content**: People training Muay Thai/fighting in gym

### Video Optimization:
Use tools like **HandBrake** or **FFmpeg** to compress:
```bash
# Example: Reduce file size while maintaining quality
ffmpeg -i input.mp4 -vcodec h264 -crf 23 -preset medium hero-background.mp4
```

## Alternative: Hosted Video Services

### Option 1: Vimeo (Best for hosting)
- Upload your video to Vimeo
- Get the direct video URL
- Update the `<source>` tag in Hero.jsx

### Option 2: Cloudflare Stream
- Upload video to Cloudflare Stream
- Get the streaming URL
- Update Hero.jsx

### Option 3: AWS S3 + CloudFront (For production scale)
- Upload to S3 bucket
- Serve via CloudFront CDN
- Update Hero.jsx with CloudFront URL

### Option 4: YouTube (Has limitations)
- YouTube has autoplay restrictions
- Not recommended for background videos
- Would need workarounds

## Quick Test Options

If you want to test with a working video temporarily:

### Working Pexels Alternative URLs (may change):
- Try searching Pexels for "Muay Thai" or "boxing training"
- Download the video and place it locally
- Or use their embed URL format (but less reliable)

### Free Video Resources:
- **Pexels Videos**: https://www.pexels.com/videos/ (download, don't hotlink)
- **Pixabay Videos**: https://pixabay.com/videos/ (free, download)
- **Coverr**: https://coverr.co/ (free stock videos)

**Remember:** Always download and host locally for production! 🎯

## Current Code Location

The video source is configured in:
- File: `src/components/Hero.jsx`
- Line: ~57
- Current: `/videos/hero-background.mp4` (local path - ready to use!)

Just add your video file and it will work! 🚀
