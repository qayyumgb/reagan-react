import actions from './actions';
import staticData from '../../demoData/gallery.json';

const initialState = {
  data: [],
  agingData:[],
  preMonthData:[],
  loading: false,
  error: null,
};
const { DASHBOARD_COUNTER_BEGIN, DASHBOARD_COUNTER_SUCCESS, DASHBOARD_COUNTER_ERR,AGING_DAYS_SUCCESS,AGING_DAYS_ERR,PRIVIOUS_MONTH_SUCCESS,PRIVIOUS_MONTH_ERR } = actions;

const galleryReducer = (state = initialState, action) => {
  const { type, data, err,agingData,preMonthData } = action;
  switch (type) {
    case DASHBOARD_COUNTER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case DASHBOARD_COUNTER_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case DASHBOARD_COUNTER_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
   
      case AGING_DAYS_SUCCESS:
      return {
        ...state,
        agingData,
        loading: false,
      };
      case AGING_DAYS_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };
      case PRIVIOUS_MONTH_SUCCESS:
      return {
        ...state,
        preMonthData,
        loading: false,
      };
      case PRIVIOUS_MONTH_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default galleryReducer;
