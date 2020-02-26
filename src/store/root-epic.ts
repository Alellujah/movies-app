import { combineEpics } from 'redux-observable';

import * as moviesEpics from '../epics/';

export default combineEpics(...Object.values(moviesEpics));
