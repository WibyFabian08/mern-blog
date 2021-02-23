import React from "react";
import "./Register.scss";
import { registerBg } from "../../assets";
import {Button, Gap, Input} from '../../component/atoms';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';

const Register = () => {

  const history = useHistory();

  return (
    <div className="main-page">
      <div className="bagian-kanan">
        <img src={registerBg} className="bg-image"></img>
      </div>
      <div className="bagian-kiri">
        <text className="title">Register</text>
        <Gap height={20}></Gap>
        <Input placeholder="Nama" label="Nama" type="text"></Input>
        <Gap height={20}></Gap>
        <Input placeholder="Email" label="Email" type="text"></Input>
        <Gap height={20}></Gap>
        <Input placeholder="Password" label="Password" type="password"></Input>
        <Gap height={30}></Gap>
        <Button title='Register' onClick={() => history.push('/login')}></Button>
        <Gap height={70}></Gap>
        <p className='link' onClick={() => history.push('/login')}>Sudah Punya Akun? Login</p>
      </div>
    </div>
  );
};

export default Register;
