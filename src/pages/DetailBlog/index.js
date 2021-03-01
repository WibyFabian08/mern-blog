import React, { useEffect, useState } from 'react';
import './detailblog.scss';
import {Gap} from '../../component/atoms';
import {useHistory, withRouter} from 'react-router-dom';
import axios from 'axios';

const DetailBlog = (props) => {

    const [data, setData] = useState({});

    const id = props.match.params.id;

    useEffect(() => {
        axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((result) => {
            const detail = result.data.data;
            setData(detail);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    console.log('data :', data);
    const history = useHistory();

    if(data.author) {
        return (
            <div className='detail-wrapper'>
                <div className='image'>
                    <img className='detail-image' src={`http://localhost:4000/${data.image}`}></img>
                </div>
                <p className='detail-title'>{data.title}</p>
                <p className='detail-author'>{data.author.name} - {data.createdAt}</p>
                <p className='detail-body'>{data.body}</p>
                <Gap height={100}></Gap>
                <p className='detail-back' onClick={() => history.push('/')}>Kembali</p>
            </div>
        )
    } else {
        return <p>Loading.....</p>
    }
}

export default withRouter(DetailBlog);