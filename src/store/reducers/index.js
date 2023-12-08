import { combineReducers } from "redux";
import test from './test_reducer';
import page from './page_reducer';
import search from './search_reducer';
import alert from './alert_reducer';
import search2 from './search2_reducer';
import searchRes from './searchResData_reducer';
import changeTable from './change_table_reducer';
import searchProgress from './search_progress_reducer';
import submit from './submit_reducer';


const appReducers = combineReducers({
    test,
    page,
    search,
    alert,
    search2,
    searchRes,
    changeTable,
    searchProgress,
    submit
});

export default appReducers;