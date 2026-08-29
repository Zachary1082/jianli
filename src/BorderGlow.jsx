import React, { cloneElement, useCallback, useRef } from 'react';
import './BorderGlow.css';

const BorderGlow = ({
  children,
  glowColor = '40 72 72',
  edgeSensitivity = 28,
  glowRadius = 9,
  coneSpread = 24,
  colors = ['#e3c17f', '#7aa7e8', '#d9e8ff'],
}) => {
  const cardRef = useRef(null);

  const handlePointerMove = useCallback((event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const kx = dx === 0 ? Infinity : cx / Math.abs(dx);
    const ky = dy === 0 ? Infinity : cy / Math.abs(dy);
    const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;
    card.style.setProperty('--edge-proximity', (edge * 100).toFixed(3));
    card.style.setProperty('--cursor-angle', `${(angle - 180).toFixed(3)}deg`);
  }, []);

  const [h, s, l] = glowColor.split(/\s+/);
  const child = React.Children.only(children);
  return cloneElement(child, {
    ref: cardRef,
    onPointerMove: handlePointerMove,
    className: `${child.props.className || ''} border-glow-card`,
    style: {
      ...child.props.style,
      '--edge-sensitivity': edgeSensitivity,
      '--glow-padding': `${glowRadius}px`,
      '--cone-spread': coneSpread,
      '--glow-color': `hsl(${h}deg ${s}% ${l}% / 92%)`,
      '--glow-color-soft': `hsl(${h}deg ${s}% ${l}% / 28%)`,
      '--mesh-one': colors[0],
      '--mesh-two': colors[1] || colors[0],
      '--mesh-three': colors[2] || colors[0],
    },
    children: [<span className="edge-light" aria-hidden="true" key="edge-light" />, child.props.children],
  });
};

export default BorderGlow;
