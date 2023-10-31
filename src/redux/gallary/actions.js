const actions = {
  FILTER_GALLERY_BEGIN: 'FILTER_GALLERY_BEGIN',
  FILTER_GALLERY_SUCCESS: 'FILTER_GALLERY_SUCCESS',
  FILTER_GALLERY_ERR: 'FILTER_GALLERY_ERR',

  dashboardCounterBegin: () => {
    return {
      type: actions.FILTER_GALLERY_BEGIN,
    };
  },

  dashboardCounterSuccess: (data) => {
    return {
      type: actions.FILTER_GALLERY_SUCCESS,
      data,
    };
  },

  dashboardCounterErr: (err) => {
    return {
      type: actions.FILTER_GALLERY_ERR,
      err,
    };
  },
};

export default actions;
