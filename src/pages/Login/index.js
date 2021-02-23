import React from "react";
import "../Register/Register.scss";
import { loginBg } from "../../assets";
import {Button, Gap, Input} from '../../component/atoms';
import {useHistory} from 'react-router-dom';

const Login = () => {

  const history = useHistory();

  return (
    <div className="main-page">
      <div className="bagian-kanan">
        <img src={loginBg} className="bg-image"></img>
      </div>
      <div className="bagian-kiri">
        <text className="title">Login</text>
        <Gap height={20}></Gap>
        <Input placeholder="Email" label="Email" type="text"></Input>
        <Gap height={20}></Gap>
        <Input placeholder="Password" label="Password" type="password"></Input>
        <Gap height={30}></Gap>
        <Button title='Login' onClick={() => history.push('/')}></Button>
        <Gap height={70}></Gap>
        <p className='link' onClick={() => history.push('/register')}>Belum Punya Akun? Register</p>
      </div>
    </div>
  );
};

export default Login;
