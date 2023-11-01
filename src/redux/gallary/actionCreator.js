import actions from './actions';
import initialState from '../../demoData/gallery.json';
import { DataService } from '../../config/dataService/dataService';

const { dashboardCounterBegin, dashboardCounterSuccess, dashboardCounterErr,aginDaysErr,agingDaysSuccess,previousMonthSucess,previousMonthErr } = actions;

const DashboardCounter = (value) => {
  return async (dispatch) => {
    dispatch(dashboardCounterBegin());
    try {
      await DataService.post('dashboard/get-summary',value)
    .then(response => {
      dispatch(dashboardCounterSuccess(response.data.data));
    }).catch(error => {
      dispatch(dashboardCounterErr(error));
      console.log(error)
    });
    } catch (err) {
      dispatch(dashboardCounterErr(err));
    }
  };
};
const AgingDays = (value) => {
  return async (dispatch) => {
    try {
      await DataService.post('dashboard/get-aging-days',value)
    .then(response => {
      dispatch(agingDaysSuccess(response.data.data));
    }).catch(error => {
      dispatch(aginDaysErr(error));
      console.log(error)
    });
    } catch (err) {
      dispatch(aginDaysErr(err));
    }
  };
};
const PrevousMonth = (value) => {
  return async (dispatch) => {
    try {
      await DataService.post('dashboard/get-prv-month-summary',value)
    .then(response => {
      dispatch(previousMonthSucess(response.data.data));
    }).catch(error => {
      dispatch(previousMonthErr(error));
      console.log(error)
    });
    } catch (err) {
      dispatch(previousMonthErr(err));
    }
  };
};

export { DashboardCounter,AgingDays,PrevousMonth };
