import { motion } from 'framer-motion';

function Face({ level, selected }) {
  // curva da boca: 1 = triste (canto do controle acima, "⌢"), 5 = feliz (controle abaixo, "⌣")
  const curve = ((level - 3) / 2) * 6;
  const mouthPath = `M 9 16 Q 12 ${16 + curve} 15 16`;
  const color = selected ? '#6a5cff' : '#9aa7c4';

  return (
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.6" />
      <circle cx="8.5" cy="9.5" r="1" fill={color} />
      <circle cx="15.5" cy="9.5" r="1" fill={color} />
      <path d={mouthPath} stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function SmileyScale({ labels, value, onChange }) {
  return (
    <div className="smiley-scale">
      {labels.map((label, i) => {
        const level = i + 1;
        const selected = value === level;
        return (
          <motion.button
            key={level}
            type="button"
            className={`smiley-option ${selected ? 'selected' : ''}`}
            whileTap={{ scale: 0.92 }}
            onClick={() => onChange(level)}
          >
            <span className="smiley-face">
              <Face level={level} selected={selected} />
            </span>
            <span className="smiley-num">{level}</span>
            <span className="smiley-label">{label}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
