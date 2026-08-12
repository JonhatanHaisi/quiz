function csvEscape(value) {
  const str = String(value);
  if (/[;"\r\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function downloadCsv(sessions) {
  const header = [
    'Nome', 'Prontuario', 'DataHora', 'NumeroPergunta', 'Pergunta',
    'OpcaoEscolhida', 'RespostaCorreta', 'Acertou', 'PontuacaoFinal', 'TotalPerguntas',
  ];

  const rows = [header];

  sessions.forEach((s) => {
    const total = s.respostas.length;
    const acertos = s.respostas.filter((r) => r.acertou).length;
    s.respostas.forEach((r) => {
      rows.push([
        s.nome,
        s.prontuario,
        new Date(s.dataHora).toLocaleString('pt-BR'),
        r.numero,
        r.pergunta,
        r.opcaoEscolhida,
        r.respostaCorreta,
        r.acertou ? 'Sim' : 'Nao',
        acertos,
        total,
      ]);
    });
  });

  const csvContent = rows.map((row) => row.map(csvEscape).join(';')).join('\r\n');
  const blob = new Blob(['﻿' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `respostas_quiz_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
