import { useState, useEffect, useRef } from 'react';

export default function SmoothFollower() {
  const mousePosition = useRef({ x: 0, y: 0 });
  const dotPosition = useRef({ x: 0, y: 0 });
  const borderDotPosition = useRef({ x: 0, y: 0 });
  const animationId = useRef(null);

  const [renderPos, setRenderPos] = useState({
    dot: { x: 0, y: 0 },
    border: { x: 0, y: 0 },
  });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // hidden until first mouse move
  const [hasPointer, setHasPointer] = useState(false); // only true on pointer devices

  const DOT_SMOOTHNESS = 1.0;
  const BORDER_DOT_SMOOTHNESS = 0.12;

  useEffect(() => {
    // Detect if device has a fine pointer (mouse), not touch
    const mq = window.matchMedia('(pointer: fine)');
    setHasPointer(mq.matches);

    const handlePointerChange = (e) => setHasPointer(e.matches);
    mq.addEventListener('change', handlePointerChange);
    return () => mq.removeEventListener('change', handlePointerChange);
  }, []);

  useEffect(() => {
    if (!hasPointer) return;

    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, img, input, textarea, select, .hover-effect'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const animate = () => {
      const lerp = (start, end, factor) => start + (end - start) * factor;

      dotPosition.current.x = lerp(dotPosition.current.x, mousePosition.current.x, DOT_SMOOTHNESS);
      dotPosition.current.y = lerp(dotPosition.current.y, mousePosition.current.y, DOT_SMOOTHNESS);

      borderDotPosition.current.x = lerp(borderDotPosition.current.x, mousePosition.current.x, BORDER_DOT_SMOOTHNESS);
      borderDotPosition.current.y = lerp(borderDotPosition.current.y, mousePosition.current.y, BORDER_DOT_SMOOTHNESS);

      const dx = mousePosition.current.x - borderDotPosition.current.x;
      const dy = mousePosition.current.y - borderDotPosition.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const scaleX = 1 + Math.min(dist / 500, 0.35);
      const scaleY = 1 - Math.min(dist / 1000, 0.15);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      setRenderPos({
        dot: { x: dotPosition.current.x, y: dotPosition.current.y },
        border: {
          x: borderDotPosition.current.x,
          y: borderDotPosition.current.y,
          scaleX,
          scaleY,
          angle,
        },
      });

      animationId.current = requestAnimationFrame(animate);
    };

    animationId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      cancelAnimationFrame(animationId.current);
    };
  }, [hasPointer, isVisible]);

  // Don't render at all on touch/mobile devices
  if (!hasPointer) return null;
  if (typeof window === 'undefined') return null;

  return (
    <div
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 9999, opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}
    >
      {/* Inner dot */}
      <div
        className="absolute rounded-full dark:bg-white bg-[#D4AF37]"
        style={{
          width: isHovering ? '5px' : '8px',
          height: isHovering ? '5px' : '8px',
          transform: 'translate(-50%, -50%)',
          left: `${renderPos.dot.x}px`,
          top: `${renderPos.dot.y}px`,
          transition: 'width 0.3s ease, height 0.3s ease',
        }}
      />

      {/* Outer ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: isHovering ? '60px' : '32px',
          height: isHovering ? '60px' : '32px',
          transform: `translate(-50%, -50%) rotate(${renderPos.border.angle}deg) scale(${renderPos.border.scaleX ?? 1}, ${renderPos.border.scaleY ?? 1})`,
          left: `${renderPos.border.x}px`,
          top: `${renderPos.border.y}px`,
          transition: 'width 0.6s cubic-bezier(0.23, 1, 0.32, 1), height 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
          background: 'transparent',
          border: isHovering
            ? '1.5px solid rgba(212,175,55,0.7)'
            : '1px solid rgba(212,175,55,0.5)',
          boxShadow: isHovering
            ? '0 0 0 0.5px rgba(255,255,255,0.15), inset 0 1px 0 rgba(255,255,255,0.4)'
            : '0 0 0 0.5px rgba(212,175,55,0.1)',
        }}
      />
    </div>
  );
}