import React from "react";
import {BlogItem, Button, Gap} from '../../component/atoms';
import './home.scss';
import {useHistory} from 'react-router-dom';

const Home = () => {

  const history = useHistory();

  return (
    <div className='home-wrapper'>
      <div className="btn-create">
        <Button title="Create Post" onClick={() => history.push('/create-blog')}></Button>
      </div>
      <Gap height={10}></Gap>
      <div className='content-wrapper'>
        <BlogItem></BlogItem>
        <BlogItem></BlogItem>
        <BlogItem></BlogItem>
        <BlogItem></BlogItem>
        <BlogItem></BlogItem>
      </div>
      <div className='pagination'>
        <Button title='Prev'></Button>
        <Gap width={20}></Gap>
        <Button title='Next'></Button>
      </div>
    </div>
  );
};

export default Home;
