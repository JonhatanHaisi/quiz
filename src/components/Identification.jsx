import { useState } from 'react';
import { motion } from 'framer-motion';
import { iconSrc } from '../lib/assets';

export default function Identification({ onComecar, onVoltar }) {
  const [nome, setNome] = useState('');
  const [prontuario, setProntuario] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const nomeTrim = nome.trim();
    const prontuarioTrim = prontuario.trim();
    if (!nomeTrim || !prontuarioTrim) return;
    onComecar({ nome: nomeTrim, prontuario: prontuarioTrim });
  }

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
          src={iconSrc('dentist-fullbody.png')}
          alt=""
          className="id-mascot-img"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="glass-panel id-form-panel">
        <h2>Antes de começar...</h2>
        <p className="hint">Preencha os dados da criança</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="input-nome">Nome da criança</label>
          <input
            id="input-nome"
            type="text"
            autoComplete="off"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />

          <label htmlFor="input-prontuario">Número do prontuário</label>
          <input
            id="input-prontuario"
            type="text"
            autoComplete="off"
            value={prontuario}
            onChange={(e) => setProntuario(e.target.value)}
            required
          />

          <motion.button type="submit" className="btn btn-primary" whileTap={{ scale: 0.95 }}>
            Começar ▶
          </motion.button>
          <button type="button" className="link-secondary" onClick={onVoltar}>
            Voltar
          </button>
        </form>
      </div>
    </motion.div>
  );
}
