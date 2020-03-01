import { combineEpics } from 'redux-observable';

import * as searchEpics from '../containers/SearchPage/redux/epics';

export default combineEpics(...Object.values(searchEpics));
