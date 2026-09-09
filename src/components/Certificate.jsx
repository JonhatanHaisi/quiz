import { motion } from 'framer-motion';
import { iconSrc } from '../lib/assets';

export default function Certificate({ session, onVoltar }) {
  const total = session.respostas.length;
  const acertos = session.respostas.filter((r) => r.acertou).length;
  const dataFormatada = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.div
      className="certificate-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="certificate-card">
        <img src={iconSrc('star.png')} alt="" className="certificate-star certificate-star-tl" />
        <img src={iconSrc('star.png')} alt="" className="certificate-star certificate-star-tr" />

        <motion.img
          src={iconSrc('tooth-super.png')}
          alt=""
          className="certificate-mascot"
          animate={{ rotate: [0, -6, 6, -6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1 }}
        />

        <p className="certificate-eyebrow">Certificado de</p>
        <h1 className="certificate-title">Amigo do Sorriso</h1>

        <p className="certificate-grants">é concedido com muito orgulho a</p>
        <p className="certificate-name">{session.nome}</p>

        <p className="certificate-body">
          por completar o Quiz da Saúde Bucal acertando {acertos} de {total} perguntas,
          mostrando que sabe cuidar muito bem do seu sorriso! 🦷✨
        </p>

        <div className="certificate-footer">
          <img src={iconSrc('check-badge.png')} alt="" className="certificate-seal" />
          <p className="certificate-date">{dataFormatada}</p>
        </div>
      </div>

      <div className="certificate-actions">
        <motion.button className="btn btn-primary" whileTap={{ scale: 0.95 }} onClick={() => window.print()}>
          🖨️ Baixar certificado
        </motion.button>
        <button className="link-secondary" onClick={onVoltar}>
          Voltar
        </button>
      </div>
    </motion.div>
  );
}
