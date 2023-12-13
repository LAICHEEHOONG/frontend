import { combineReducers } from "redux";

import page from './page_reducer';
import alert from './alert_reducer';
import search2 from './search2_reducer';
import searchRes from './searchResData_reducer';
import changeTable from './change_table_reducer';
import searchProgress from './search_progress_reducer';
import statusTargetGroupTypes from './status_targetGroup_types_reducer';
import mobileMode from './mobile_mode_reducer';



const appReducers = combineReducers({
    page,
    alert,
    search2,
    searchRes,
    changeTable,
    searchProgress,
    statusTargetGroupTypes,
    mobileMode
});

export default appReducers;