let audioCtx = null;

function getContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playTone(ctx, freq, startTime, duration, type, peak) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(peak, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.05);
}

export function playCorrectSound() {
  try {
    const ctx = getContext();
    const now = ctx.currentTime;
    playTone(ctx, 523.25, now, 0.15, 'sine', 0.2); // C5
    playTone(ctx, 783.99, now + 0.12, 0.22, 'sine', 0.2); // G5
  } catch {
    // Web Audio indisponível (ex: navegador muito antigo) — falha silenciosamente.
  }
}

export function playWrongSound() {
  try {
    const ctx = getContext();
    const now = ctx.currentTime;
    playTone(ctx, 220, now, 0.16, 'square', 0.1); // A3
    playTone(ctx, 174.61, now + 0.14, 0.24, 'square', 0.1); // F3
  } catch {
    // Web Audio indisponível — falha silenciosamente.
  }
}
