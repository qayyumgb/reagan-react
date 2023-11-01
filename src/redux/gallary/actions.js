const actions = {
  FILTER_GALLERY_BEGIN: 'FILTER_GALLERY_BEGIN',
  DASHBOARD_COUNTER_SUCCESS: 'DASHBOARD_COUNTER_SUCCESS',
  FILTER_GALLERY_ERR: 'FILTER_GALLERY_ERR',
  AGING_DAYS_SUCCESS:'AGING_DAYS_SUCCESS',
  AGING_DAYS_ERR:'AGING_DAYS_ERR',
  PRIVIOUS_MONTH_SUCCESS:'PRIVIOUS_MONTH_SUCCESS',
  PRIVIOUS_MONTH_ERR:'PRIVIOUS_MONTH_ERR',

  dashboardCounterBegin: () => {
    return {
      type: actions.FILTER_GALLERY_BEGIN,
    };
  },

  dashboardCounterSuccess: (data) => {
    return {
      type: actions.DASHBOARD_COUNTER_SUCCESS,
      data,
    };
  },
  dashboardCounterErr: (err) => {
    return {
      type: actions.FILTER_GALLERY_ERR,
      err,
    };
  },

  agingDaysSuccess: (agingData) => {
    
    return {
      type: actions.AGING_DAYS_SUCCESS,
      agingData,
    };
  },
  aginDaysErr: (err) => {
    return {
      type: actions.AGING_DAYS_ERR,
      err,
    };
  },
  previousMonthSucess: (preMonthData) => {
    return {
      type: actions.PRIVIOUS_MONTH_SUCCESS,
      preMonthData,
    };
  },
  previousMonthErr: (err) => {
    return {
      type: actions.PRIVIOUS_MONTH_ERR,
      err,
    };
  },
};

export default actions;
