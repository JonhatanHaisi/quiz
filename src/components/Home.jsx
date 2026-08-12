import { motion } from 'framer-motion';
import { iconSrc } from '../lib/assets';

export default function Home({ sessionCount, onNovoJogo, onGerarRespostas, onRequestLimpar }) {
  const respostasLabel = sessionCount === 1 ? 'resposta salva' : 'respostas salvas';

  return (
    <motion.div
      className="split-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="home-title-panel">
        <div className="home-title-icons">
          <motion.img
            src={iconSrc('tooth-winking.png')}
            alt=""
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
          />
          <motion.img
            src={iconSrc('tooth-happy.png')}
            alt=""
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          />
          <motion.img
            src={iconSrc('tooth-surprised.png')}
            alt=""
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          />
        </div>
        <h1>Quiz</h1>
      </div>

      <div className="glass-panel">
        <motion.button className="btn btn-primary" whileTap={{ scale: 0.95 }} onClick={onNovoJogo}>
          🎯 Novo jogo
        </motion.button>
        <button className="link-secondary" onClick={onGerarRespostas}>
          Gerar respostas — {sessionCount} {respostasLabel}
        </button>
        {sessionCount > 0 && (
          <button className="link-subtle link-danger" onClick={onRequestLimpar}>
            Limpar respostas salvas
          </button>
        )}
      </div>
    </motion.div>
  );
}
