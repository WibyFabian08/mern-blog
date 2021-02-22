import React from "react";
import "./Register.scss";
import { registerBg } from "../../assets";
import {Button, Gap, Input} from '../../component/atoms';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className="main-page">
      <div className="bagian-kanan">
        <h1 className="text-bg">Bagian Kanan</h1>
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
        <Button title='Register'></Button>
        <Gap height={70}></Gap>
        <p className='link'>Sudah Punya Akun? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
