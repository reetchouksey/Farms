import { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { useT } from '../hooks/useT';
import { content } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Auto-playing muted farm video tuned for maximum perceived quality:
 *  - preload="auto" so the browser fetches the entire stream up-front and never
 *    has to drop to a lower-quality fallback.
 *  - object-contain + native aspect so the source pixels are never cropped or
 *    upscaled beyond their native resolution.
 *  - GPU-accelerated compositing + subtle color grading filter to enhance
 *    perceived sharpness and color richness on bright farm scenery.
 *  - Fullscreen toggle so users can watch at the largest possible resolution.
 *  - Pauses when scrolled off-screen to save bandwidth.
 */
export default function VideoSection({ src, caption, poster }) {
  const { t } = useT();
  const videoRef = useRef(null);
  const wrapperRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  // Pause video when scrolled off-screen
  useEffect(() => {
    const wrap = wrapperRef.current;
    const video = videoRef.current;
    if (!wrap || !video || !('IntersectionObserver' in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  // Track fullscreen state across browser events
  useEffect(() => {
    const onFsChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const toggleFullscreen = async () => {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    try {
      if (!document.fullscreenElement) {
        if (wrap.requestFullscreen) await wrap.requestFullscreen();
        else if (wrap.webkitRequestFullscreen) wrap.webkitRequestFullscreen();
        else if (videoRef.current?.webkitEnterFullscreen) {
          videoRef.current.webkitEnterFullscreen();
        }
      } else if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch {
      /* ignore */
    }
  };

  const videoSrc = src || content.video.src;
  const capText = caption !== undefined ? caption : t(content.video.caption);
  const posterSrc =
    poster ||
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&q=90&auto=format&fit=crop';

  return (
    <div
      ref={(el) => {
        ref.current = el;
        wrapperRef.current = el;
      }}
      className={`relative max-w-5xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-large border border-line bg-black reveal group ${
        isVisible ? 'visible' : ''
      }`}
      style={{
        // GPU compositing -> sharper, jitter-free frames
        transform: 'translateZ(0)',
        willChange: 'transform',
      }}
    >
      <div className="absolute -top-5 -left-5 w-32 h-32 bg-accent rounded-2xl -z-10 hidden lg:block" />
      <div className="absolute -bottom-5 -right-5 w-44 h-44 bg-leaf/50 rounded-2xl -z-10 hidden lg:block" />

      <div className="relative w-full aspect-video bg-black">
        <video
          ref={videoRef}
          className="w-full h-full block"
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disableRemotePlayback
          controlsList="nodownload"
          x-webkit-airplay="deny"
          aria-label={capText}
          onLoadedData={() => setIsLoaded(true)}
          onCanPlay={() => setIsLoaded(true)}
          style={{
            // object-contain prevents cropping & blurry upscaling
            objectFit: 'contain',
            // Subtle perceptual grading: a bit more contrast/saturation makes the
            // farm scenery feel sharper without altering source pixels.
            filter: 'contrast(1.06) saturate(1.1) brightness(1.02)',
            WebkitFilter: 'contrast(1.06) saturate(1.1) brightness(1.02)',
            // Hardware acceleration hints
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            imageRendering: 'auto',
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Loading shimmer until first frame is ready */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-dark to-black">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-3 border-white/30 border-t-accent rounded-full animate-spin" />
              <span className="text-white/80 text-xs uppercase tracking-wider">
                Loading HD…
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Custom overlay controls */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex gap-2 sm:gap-2.5 z-10">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-primary-dark flex items-center justify-center shadow-medium hover:scale-105 active:scale-95 transition-all backdrop-blur touch-manipulation"
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
          )}
        </button>
        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-primary-dark flex items-center justify-center shadow-medium hover:scale-105 active:scale-95 transition-all backdrop-blur touch-manipulation"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? 'Exit fullscreen' : 'View in fullscreen HD'}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-primary-dark flex items-center justify-center shadow-medium hover:scale-105 active:scale-95 transition-all backdrop-blur touch-manipulation"
        >
          {isFullscreen ? (
            <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
      </div>

      {/* Caption bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-3 sm:p-5 pr-32 sm:pr-40 pointer-events-none">
        <p className="text-white text-xs sm:text-sm md:text-base font-medium m-0 line-clamp-1 sm:line-clamp-none drop-shadow-md">
          {capText}
        </p>
      </div>
    </div>
  );
}
