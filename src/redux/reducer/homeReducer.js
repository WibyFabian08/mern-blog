const dataBlogState = {
  dataBlog: [],
  page: {
    per_page: 1,
    total_page: 1,
    current_page: 1
  }
};

const dataBlogReducer = (state = dataBlogState, action) => {
  if (action.type === "SET_DATA_BLOG") {
    return {
      ...state,
      dataBlog: action.value,
    };
  }

  if(action.type === 'SET_DATA_PAGE') {
    return {
      ...state,
      page: action.value
    }
  }

  return state;
};

export default dataBlogReducer;
