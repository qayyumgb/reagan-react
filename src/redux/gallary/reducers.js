import actions from './actions';
import staticData from '../../demoData/gallery.json';

const initialState = {
  data: '',
  loading: false,
  error: null,
};
const { DASHBOARD_COUNTER_BEGIN, DASHBOARD_COUNTER_SUCCESS, DASHBOARD_COUNTER_ERR } = actions;

const galleryReducer = (state = initialState, action) => {
  const { type, data, err } = action;
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
    default:
      return state;
  }
};

export default galleryReducer;
