import { motion } from 'framer-motion';
import { iconSrc } from '../lib/assets';

export default function FeedbackPage({ correct, message, onContinue }) {
  const mascotSrc = iconSrc(correct ? 'dentist-portrait.png' : 'tooth-sad.png');
  const topicSrc = iconSrc(correct ? 'speech-bubble-isso-ai.png' : 'toothpaste-tube-angled.png');

  return (
    <motion.div
      className="feedback-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="feedback-row">
        <div className="feedback-mascot-panel">
          <motion.img
            src={mascotSrc}
            alt=""
            className="feedback-mascot-img"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="glass-panel feedback-message-panel">
          <img src={topicSrc} alt="" className="feedback-topic-icon" />
          <p>{message}</p>
        </div>
      </div>

      <motion.button
        className="btn btn-primary feedback-continue-btn"
        whileTap={{ scale: 0.95 }}
        onClick={onContinue}
      >
        Continuar ▶
      </motion.button>
    </motion.div>
  );
}
