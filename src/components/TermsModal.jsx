import { motion, AnimatePresence } from 'framer-motion';
import { preencherPlaceholders } from '../lib/terms';

export default function TermsModal({ open, term, nome, onClose }) {
  return (
    <AnimatePresence>
      {open && term && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-card terms-modal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="terms-modal-header">
              <h3>{term.titulo}</h3>
              <button className="terms-modal-close" onClick={onClose} aria-label="Fechar">
                ✕
              </button>
            </div>
            <div className="terms-modal-body">
              {term.blocos.map((bloco, i) => {
                const texto = preencherPlaceholders(bloco.texto, { nome });
                if (bloco.tipo === 'titulo') {
                  return <h4 key={i}>{texto}</h4>;
                }
                if (bloco.tipo === 'secao') {
                  return <h5 key={i}>{texto}</h5>;
                }
                if (bloco.tipo === 'destaque') {
                  return <p key={i} className="terms-destaque">{texto}</p>;
                }
                if (bloco.tipo === 'assinatura') {
                  return <p key={i} className="terms-assinatura">{texto}</p>;
                }
                return <p key={i}>{texto}</p>;
              })}
            </div>
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={onClose}>
                Fechar
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
