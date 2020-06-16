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

// delete an existing session
export const deleteCoachingSession = (id) => (
  $.ajax({
    url: `/api/coaching_sessions/${id}`,
    method: 'DELETE',
  })
);

// create a new session
export const createCoachingSession = (coachingSession) => (
  $.ajax({
    url: '/api/coaching_sessions',
    method: 'POST',
    data: { coachingSession },
  })
);

export const updateCoachingSession = (coachingSessions) => (
  $.ajax({
    url: `/api/coaching_sessions/${coachingSessions.id}`,
    method: 'PATCH',
    data: { coachingSessions },
  })
);
