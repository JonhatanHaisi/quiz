import { useState } from 'react';
import { motion } from 'framer-motion';
import { EVALUATION_QUESTIONS } from '../lib/evaluationQuestions';
import SmileyScale from './SmileyScale';

export default function EvaluationPage({ onSubmit }) {
  const [respostas, setRespostas] = useState({});

  const todasRespondidas = EVALUATION_QUESTIONS.every((_, i) => respostas[i] != null);

  function handleChange(index, level) {
    setRespostas((prev) => ({ ...prev, [index]: level }));
  }

  function handleSubmit() {
    const resultado = EVALUATION_QUESTIONS.map((q, i) => ({
      pergunta: q.pergunta,
      nota: respostas[i],
    }));
    onSubmit(resultado);
  }

  return (
    <motion.div
      className="evaluation-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="glass-panel evaluation-panel">
        <h2>Antes de terminar...</h2>
        <p className="hint">Conte pra gente o que você achou do jogo! Marque uma carinha de 1 a 5.</p>

        <div className="evaluation-list">
          {EVALUATION_QUESTIONS.map((q, i) => (
            <div className="evaluation-item" key={i}>
              <p className="evaluation-question">
                {i + 1}. {q.pergunta}
              </p>
              <SmileyScale
                labels={q.labels}
                value={respostas[i]}
                onChange={(level) => handleChange(i, level)}
              />
            </div>
          ))}
        </div>

        <motion.button
          className="btn btn-primary"
          whileTap={todasRespondidas ? { scale: 0.95 } : {}}
          disabled={!todasRespondidas}
          onClick={handleSubmit}
        >
          Enviar avaliação ▶
        </motion.button>
      </div>
    </motion.div>
  );
}
