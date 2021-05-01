/* eslint-disable no-param-reassign */
import { LOCATION_CHANGE } from 'connected-react-router';
import { MERGE_URL_T0_STATE_AND_HYDRATE_URL_FROM_STATE } from 'react-redux-url-state';
import merge from 'lodash/merge';
import testPath from './testPath.json';

export const paramSetup = {
  eventsToIgnore: [LOCATION_CHANGE],
  eventToMerge: MERGE_URL_T0_STATE_AND_HYDRATE_URL_FROM_STATE,
  '/test-path': testPath,
};

// the case order MUST match the order in paramSetup
export const mapLocationToState = (state: any, location: any) => {
  switch (location.pathname) {
    case '/test-path':
      debugger;
      return merge({}, state, location.query);
    default:
      return state;
  }
};
