import { allsports } from '../util/sport_api_util';

export const RECEIVE_ALL_SPORTS = 'RECEIVE_ALL_SPORTS';

const receiveAllSports = () => ({
  type: RECEIVE_ALL_SPORTS,
});

export const receiveSports = () => (dispatch) => (allsports())
  .then(() => dispatch(receiveAllSports()));
