const coachingSessionSearch = (sportId) => (
  $.ajax({
    url: `/api/coach_details?sport_id=${sportId}`,
    method: 'GET',
  })
);

export default coachingSessionSearch;
