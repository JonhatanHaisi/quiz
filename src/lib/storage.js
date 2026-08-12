const STORAGE_KEY = 'quiz_sessions_v1';

export function getSessions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function saveSession(session) {
  const sessions = getSessions();
  sessions.push(session);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  return sessions;
}

export function clearSessions() {
  localStorage.removeItem(STORAGE_KEY);
}
