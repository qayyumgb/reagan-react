import actions from './actions';
import initialState from '../../demoData/gallery.json';
import { DataService } from '../../config/dataService/dataService';

const { dashboardCounterBegin, dashboardCounterSuccess, dashboardCounterErr } = actions;


const DashboardCounter = (value) =>{
  return async (dispatch) => {
    await DataService.post('dashboard/get-summary',value)
    .then(response => {
     console.log(response);
     dispatch(dashboardCounterSuccess(response));
    })
    .catch(error => {
      dispatch(dashboardCounterErr(error))
      console.log(error)
    });
  }
 
}

// const DashboardCounter = (value) => {
//   return async (dispatch) => {debugger
//     dispatch(dashboardCounterBegin());
//     try {
//       await DataService.post('dashboard/get-summary',value)
//     .then(response => {
//       dispatch(dashboardCounterSuccess(response));
//      console.log(response)
//     }).catch(error => {
//       dispatch(dashboardCounterErr(error));
//       console.log(error)
//     });
//     } catch (err) {
//       dispatch(dashboardCounterErr(err));
//     }
//   };
// };

export { DashboardCounter };
