export const fetchCoachingSession = (coachingSessionId) => (
  $.ajax({
    url: `/api/coaching_sessions/${coachingSessionId}`,
    method: 'GET',
  })
);

export const fetchCoachingSessions = () => (
  $.ajax({
    url: '/api/coaching_sessions',
    method: 'GET',
  })
);

export const deleteCoachingSession = (coachingSessionId) => (
  $.ajax({
    url: `/api/coaching_sessions/${coachingSessionId}`,
    method: 'DELETE',
  })
);
