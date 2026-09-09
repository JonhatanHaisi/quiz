import { useState } from 'react';
import { motion } from 'framer-motion';
import { iconSrc } from '../lib/assets';
import { TCLE, TALE } from '../lib/terms';
import TermsModal from './TermsModal';

export default function TermsPage({ nome, onAceitar, onVoltar }) {
  const [tcleAceito, setTcleAceito] = useState(false);
  const [taleAceito, setTaleAceito] = useState(false);
  const [termoAberto, setTermoAberto] = useState(null); // 'tcle' | 'tale' | null

  const podeContinuar = tcleAceito && taleAceito;

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
          src={iconSrc('dentist-portrait.png')}
          alt=""
          className="id-mascot-img"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="glass-panel id-form-panel">
        <h2>Antes de começar...</h2>
        <p className="hint">Para participar, é preciso ler e aceitar os dois termos abaixo.</p>

        <label className="terms-check-row">
          <input
            type="checkbox"
            checked={tcleAceito}
            onChange={(e) => setTcleAceito(e.target.checked)}
          />
          <span>
            Li e aceito o{' '}
            <button
              type="button"
              className="terms-link"
              onClick={() => setTermoAberto('tcle')}
            >
              Termo de Consentimento (TCLE)
            </button>
          </span>
        </label>

        <label className="terms-check-row">
          <input
            type="checkbox"
            checked={taleAceito}
            onChange={(e) => setTaleAceito(e.target.checked)}
          />
          <span>
            Li e aceito o{' '}
            <button
              type="button"
              className="terms-link"
              onClick={() => setTermoAberto('tale')}
            >
              Termo de Assentimento (TALE)
            </button>
          </span>
        </label>

        <motion.button
          className="btn btn-primary"
          whileTap={podeContinuar ? { scale: 0.95 } : {}}
          disabled={!podeContinuar}
          onClick={onAceitar}
        >
          Continuar ▶
        </motion.button>
        <button type="button" className="link-secondary" onClick={onVoltar}>
          Voltar
        </button>
      </div>

      <TermsModal
        open={termoAberto === 'tcle'}
        term={TCLE}
        nome={nome}
        onClose={() => setTermoAberto(null)}
      />
      <TermsModal
        open={termoAberto === 'tale'}
        term={TALE}
        nome={nome}
        onClose={() => setTermoAberto(null)}
      />
    </motion.div>
  );
}
