import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { iconSrc } from '../lib/assets';

export default function Result({ session, onVoltarHome, onGerarCertificado }) {
  const total = session.respostas.length;
  const acertos = session.respostas.filter((r) => r.acertou).length;
  const passou = total > 0 && acertos / total > 0.5;

  useEffect(() => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <motion.div
      className="split-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="id-mascot-panel">
        <motion.img
          src={iconSrc('tooth-super.png')}
          alt=""
          className="id-mascot-img"
          animate={{ rotate: [0, -8, 8, -8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1 }}
        />
      </div>

      <div className="glass-panel id-form-panel result-panel">
        <h2>Fim de jogo!</h2>
        <p>
          {session.nome} — Prontuário {session.prontuario}
        </p>
        <p className="result-score">
          {acertos} de {total} respostas certas
        </p>

        {passou ? (
          <motion.button
            className="btn btn-primary"
            whileTap={{ scale: 0.95 }}
            onClick={onGerarCertificado}
          >
            🏆 Gerar certificado
          </motion.button>
        ) : (
          <p className="result-hint">Acerte mais da metade para ganhar o certificado!</p>
        )}

        <button className="link-secondary" onClick={onVoltarHome}>
          🏠 Voltar ao início
        </button>
      </div>
    </motion.div>
  );
}
