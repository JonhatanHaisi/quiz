import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function isFullscreenSupported() {
  const el = document.documentElement;
  return !!(
    document.fullscreenEnabled ||
    document.webkitFullscreenEnabled ||
    el.requestFullscreen ||
    el.webkitRequestFullscreen
  );
}

function getFullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || null;
}

function requestFullscreen() {
  const el = document.documentElement;
  const request = el.requestFullscreen || el.webkitRequestFullscreen;
  if (request) request.call(el);
}

function exitFullscreen() {
  const exit = document.exitFullscreen || document.webkitExitFullscreen;
  if (exit) exit.call(document);
}

export default function FullscreenButton() {
  const [supported, setSupported] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setSupported(isFullscreenSupported());

    function handleChange() {
      setIsFullscreen(!!getFullscreenElement());
    }
    document.addEventListener('fullscreenchange', handleChange);
    document.addEventListener('webkitfullscreenchange', handleChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleChange);
      document.removeEventListener('webkitfullscreenchange', handleChange);
    };
  }, []);

  if (!supported) return null;

  function toggleFullscreen() {
    if (getFullscreenElement()) {
      exitFullscreen();
    } else {
      requestFullscreen();
    }
  }

  return (
    <motion.button
      className="fullscreen-btn"
      whileTap={{ scale: 0.9 }}
      onClick={toggleFullscreen}
      aria-label={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
      title={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
    >
      {isFullscreen ? '⤡' : '⤢'}
    </motion.button>
  );
}
