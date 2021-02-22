import React from "react";
import "../Register/Register.scss";
import { loginBg } from "../../assets";
import {Button, Gap, Input} from '../../component/atoms';
import {Link} from 'react-router-dom';

const Login = () => {
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
        <Button title='Login'></Button>
        <Gap height={70}></Gap>
        <p className='link'>Belum Punya Akun? <Link to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
