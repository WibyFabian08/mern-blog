import Axios from 'axios';

const setDataBlog = (page) => (dispatch) => {
    Axios
      .get(`http://localhost:4000/v1/blog/posts?page=${page}&perPage=4`)
      .then((result) => {
        const dataBlog = result.data;

        console.log(result.data);

        dispatch({
            type: 'SET_DATA_BLOG',
            value: dataBlog.data
        });

        dispatch({
          type: 'SET_DATA_PAGE',
          value: {
            total_page: Math.ceil(dataBlog.total_posts / dataBlog.per_page),
            current_page: dataBlog.current_page
          }
        })
      })
      .catch((err) => console.log(err));
  
};

export default setDataBlog;
