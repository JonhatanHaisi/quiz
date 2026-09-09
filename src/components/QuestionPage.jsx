import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { playCorrectSound, playWrongSound } from '../lib/sound';

const COUNTDOWN_SECONDS = 5;

export default function QuestionPage({ question, index, total, onAnswered }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  const answered = selectedIndex !== null;

  function selectOption(i) {
    if (answered) return;
    setSelectedIndex(i);
    if (i === question.resposta) {
      playCorrectSound();
    } else {
      playWrongSound();
    }
  }

  useEffect(() => {
    if (!answered) return;
    const startTime = Date.now();
    const id = setInterval(() => {
      const remaining = COUNTDOWN_SECONDS - (Date.now() - startTime) / 1000;
      if (remaining <= 0) {
        clearInterval(id);
        setSecondsLeft(0);
        onAnswered(selectedIndex);
      } else {
        setSecondsLeft(Math.ceil(remaining));
      }
    }, 100);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answered]);

  return (
    <div className="quiz-screen">
      <motion.div
        className="quiz-inner"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.25 }}
      >
        <div className="glass-panel quiz-question-panel">
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              animate={{ width: `${(index / total) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <p className="progress-label">
            Pergunta {index + 1} de {total}
          </p>
          <h2>{question.pergunta}</h2>
        </div>

        <div className="quiz-options-floating">
          {question.opcoes.map((opcao, i) => {
            let cls = 'glass-option';
            if (answered && i === question.resposta) cls += ' correct';
            if (answered && i === selectedIndex && i !== question.resposta) cls += ' wrong';

            return (
              <motion.button
                key={i}
                className={cls}
                disabled={answered}
                onClick={() => selectOption(i)}
                whileTap={!answered ? { scale: 0.97 } : {}}
                animate={
                  answered && i === selectedIndex && i !== question.resposta
                    ? { x: [0, -8, 8, -8, 8, 0] }
                    : {}
                }
                transition={{ duration: 0.4 }}
              >
                {opcao}
              </motion.button>
            );
          })}
        </div>

        {answered && (
          <motion.div
            className="quiz-continue-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              className="btn btn-primary"
              whileTap={{ scale: 0.95 }}
              onClick={() => onAnswered(selectedIndex)}
            >
              Continuar ▶ <span className="countdown-num">{secondsLeft}</span>
            </motion.button>
            <div className="countdown-track">
              <div
                className="countdown-fill"
                style={{ width: `${(secondsLeft / COUNTDOWN_SECONDS) * 100}%` }}
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
