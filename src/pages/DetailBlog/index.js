import React from 'react';
import './detailblog.scss';
import {registerBg} from '../../assets';
import {Gap} from '../../component/atoms';
import {useHistory} from 'react-router-dom';

const DetailBlog = () => {

    const history = useHistory();

    return (
        <div className='detail-wrapper'>
            <div className='image'>
                <img className='detail-image' src={registerBg}></img>
            </div>
            <p className='detail-title'>Title Blog</p>
            <p className='detail-author'>Author - Date Post</p>
            <p className='detail-body'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore natus incidunt nulla tempora, molestiae error consequuntur ea voluptatum ipsum quis veritatis libero praesentium! Accusantium nisi obcaecati harum modi, iste vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo magni sit consequatur laborum consectetur itaque assumenda alias repellat tenetur earum at voluptatum saepe impedit harum voluptate, blanditiis minus ratione! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum sapiente autem cum facere quaerat possimus necessitatibus voluptates at reprehenderit molestiae, iusto saepe dolor aliquam similique voluptatibus officiis quas in laudantium?</p>
            <Gap height={100}></Gap>
            <p className='detail-back' onClick={() => history.push('/')}>Kembali</p>
        </div>
    )
}

export default DetailBlog;