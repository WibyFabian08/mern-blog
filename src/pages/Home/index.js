import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../component/atoms";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../redux/action";

const Home = () => {
  const [counter, setCounter] = useState(1);

  const dataBlogState = useSelector((state) => state.dataBlogReducer);
  const page = useSelector((state) => state.dataBlogReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataBlog(counter));
  }, [counter, dispatch]);

  const history = useHistory();

  const prevPage = () => {
    setCounter((counter) => (1 ? counter - 1 : 1));
  };

  const nextPage = () => {
    setCounter(
      counter == page.page.total_page ? page.page.total_page : counter + 1
    );
  };

  return (
    <div className="home-wrapper">
      <div className="btn-create">
        <Button
          title="Create Post"
          onClick={() => history.push("/create-blog")}
        ></Button>
      </div>
      <Gap height={10}></Gap>
      <div className="content-wrapper">
        {dataBlogState.dataBlog.map((data) => {
          return (
            <BlogItem
              key={data._id}
              title={data.title}
              body={data.body}
              image={`http://localhost:4000/${data.image}`}
              name={data.author.name}
              date={data.createdAt}
            ></BlogItem>
          );
        })}
      </div>
      <div className="pagination">
        <Button title="Prev" onClick={() => prevPage()}></Button>
        <Gap width={20}></Gap>
        <p style={{ fontSize: 18, fontWeight: "bold" }}>
          {page.page.current_page}/{page.page.total_page}
        </p>
        <Gap width={20}></Gap>
        <Button title="Next" onClick={() => nextPage()}></Button>
      </div>
    </div>
  );
};

export default Home;
