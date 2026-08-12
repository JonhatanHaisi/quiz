import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Home from './components/Home';
import Identification from './components/Identification';
import QuestionPage from './components/QuestionPage';
import FeedbackPage from './components/FeedbackPage';
import Result from './components/Result';
import ConfirmModal from './components/ConfirmModal';
import FullscreenButton from './components/FullscreenButton';
import { getSessions, saveSession, clearSessions } from './lib/storage';
import { downloadCsv } from './lib/csv';

export default function App() {
  const [questions, setQuestions] = useState(null);
  const [view, setView] = useState('home');
  const [sessionCount, setSessionCount] = useState(0);
  const [currentSession, setCurrentSession] = useState(null);
  const [confirmingClear, setConfirmingClear] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [lastAnswer, setLastAnswer] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}questions.json`)
      .then((res) => res.json())
      .then(setQuestions);
    setSessionCount(getSessions().length);
  }, []);

  function handleNovoJogo() {
    setView('id');
  }

  function handleComecar({ nome, prontuario }) {
    setCurrentSession({
      nome,
      prontuario,
      dataHora: new Date().toISOString(),
    });
    setCurrentIndex(0);
    setRespostas([]);
    setLastAnswer(null);
    setView('quiz');
  }

  function handleAnswered(selectedIndex) {
    const q = questions[currentIndex];
    const correct = selectedIndex === q.resposta;
    const respostaObj = {
      numero: currentIndex + 1,
      pergunta: q.pergunta,
      opcaoEscolhida: q.opcoes[selectedIndex],
      respostaCorreta: q.opcoes[q.resposta],
      acertou: correct,
    };
    setRespostas((prev) => [...prev, respostaObj]);
    setLastAnswer({ correct, message: correct ? q.mensagemAcerto : q.mensagemErro });
    setView('feedback');
  }

  function handleFeedbackContinue() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
      setLastAnswer(null);
      setView('quiz');
    } else {
      const session = { ...currentSession, respostas };
      saveSession(session);
      setCurrentSession(session);
      setSessionCount(getSessions().length);
      setView('result');
    }
  }

  function handleGerarRespostas() {
    const sessions = getSessions();
    if (sessions.length === 0) {
      alert('Nenhuma resposta registrada ainda neste dispositivo.');
      return;
    }
    downloadCsv(sessions);
  }

  function handleConfirmLimpar() {
    clearSessions();
    setSessionCount(0);
    setConfirmingClear(false);
  }

  if (!questions) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <Home
            key="home"
            sessionCount={sessionCount}
            onNovoJogo={handleNovoJogo}
            onGerarRespostas={handleGerarRespostas}
            onRequestLimpar={() => setConfirmingClear(true)}
          />
        )}
        {view === 'id' && (
          <Identification key="id" onComecar={handleComecar} onVoltar={() => setView('home')} />
        )}
        {view === 'quiz' && (
          <QuestionPage
            key={`quiz-${currentIndex}`}
            question={questions[currentIndex]}
            index={currentIndex}
            total={questions.length}
            onAnswered={handleAnswered}
          />
        )}
        {view === 'feedback' && lastAnswer && (
          <FeedbackPage
            key={`feedback-${currentIndex}`}
            correct={lastAnswer.correct}
            message={lastAnswer.message}
            onContinue={handleFeedbackContinue}
          />
        )}
        {view === 'result' && (
          <Result key="result" session={currentSession} onVoltarHome={() => setView('home')} />
        )}
      </AnimatePresence>

      <ConfirmModal
        open={confirmingClear}
        message={`Isso vai apagar permanentemente ${sessionCount} ${sessionCount === 1 ? 'resposta salva' : 'respostas salvas'} neste dispositivo. Recomendado gerar o CSV antes. Deseja continuar?`}
        confirmLabel="Sim, apagar"
        onConfirm={handleConfirmLimpar}
        onCancel={() => setConfirmingClear(false)}
      />

      <FullscreenButton />
    </>
  );
}
