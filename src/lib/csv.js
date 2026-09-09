function csvEscape(value) {
  const str = String(value ?? '');
  if (/[\t"\r\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function downloadCsv(sessions) {
  const maxQuestions = Math.max(0, ...sessions.map((s) => s.respostas.length));
  const maxAvaliacao = Math.max(0, ...sessions.map((s) => (s.avaliacao || []).length));

  const header = [
    'Nome',
    'Prontuario',
    'DataHora',
    'TCLE Aceito',
    'TALE Aceito',
    'Data Aceite Termos',
    'Acertos',
    'TotalPerguntas',
  ];
  for (let i = 1; i <= maxQuestions; i++) {
    header.push(`Pergunta ${i}`, `Pergunta ${i} - Acertou`);
  }
  for (let i = 1; i <= maxAvaliacao; i++) {
    header.push(`Avaliacao ${i}`);
  }

  const rows = [header];

  sessions.forEach((s) => {
    const total = s.respostas.length;
    const acertos = s.respostas.filter((r) => r.acertou).length;

    const row = [
      s.nome,
      s.prontuario,
      new Date(s.dataHora).toLocaleString('pt-BR'),
      s.tcleAceito ? 'Sim' : 'Nao',
      s.taleAceito ? 'Sim' : 'Nao',
      s.dataAceiteTermos ? new Date(s.dataAceiteTermos).toLocaleString('pt-BR') : '',
      acertos,
      total,
    ];
    for (let i = 0; i < maxQuestions; i++) {
      const r = s.respostas[i];
      row.push(r ? r.opcaoEscolhida : '', r ? (r.acertou ? 'Sim' : 'Nao') : '');
    }
    const avaliacao = s.avaliacao || [];
    for (let i = 0; i < maxAvaliacao; i++) {
      row.push(avaliacao[i] ? avaliacao[i].nota : '');
    }
    rows.push(row);
  });

  const csvContent = rows.map((row) => row.map(csvEscape).join('\t')).join('\r\n');

  // Excel só reconhece acentos de forma 100% confiável, em qualquer versão e
  // configuração regional, com UTF-16LE + BOM + tabulação como separador —
  // é o mesmo formato do "Salvar como > Texto Unicode" do próprio Excel.
  // CSV com BOM UTF-8 (mesmo com "sep=") às vezes é decodificado como ANSI,
  // corrompendo acentos (ex: "Maçã" virando "MaÃ§Ã£").
  const buf = new ArrayBuffer(csvContent.length * 2);
  const view = new DataView(buf);
  for (let i = 0; i < csvContent.length; i++) {
    view.setUint16(i * 2, csvContent.charCodeAt(i), true);
  }
  const bom = new Uint8Array([0xff, 0xfe]);
  const blob = new Blob([bom, buf], { type: 'text/csv;charset=utf-16le;' });

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `respostas_quiz_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
