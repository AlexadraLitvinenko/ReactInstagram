import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { Link, Route, Redirect } from 'react-router-dom';
import Profile from './Profile';
import add_userAction from '../actions/add_user';

const SignUp = () => {

  const dispatch = useDispatch();
  const NewUser = useSelector(state => state.newuser);

  const generateID = () => {
    var pass = '';
    var strong = 10;
    var dic = 'abcdefghijklmnopqrstuvwxyz1234567890';
    for (var i = 0; i < strong; i++) {
      pass += dic.charAt(Math.floor(Math.random() * dic.length));
    }};

const [fullName = '', createfullName ] = useState();
const [name = '', createName ] = useState();
const [email = '', createLogin ] = useState();
const [password = '', createPassword ] = useState();

const saveUser = () => {
  const user = {fullName: fullName, name: name, email: email, password: password};
  const id = generateID();
  console.log(user);
  dispatch(add_userAction(id, user));
};
  
const onSubmit = (event) => {
    event.preventDefault();
};
  
const createUser = field => ({target})=> {
    if (field === 'fullName') createfullName(target.value);
    if (field === 'name') createName(target.value);
    if (field === 'email') createLogin(target.value);
    if (field === 'password') createPassword(target.value);
};
  
return (
    <div>
      <form onSubmit={onSubmit} className='ui-form'>
      <h3>Регистрация</h3>
      <div className='form-row'>
        <input type='text' required autoComplete='off' onChange={createUser('fullName')} />
        <label htmlFor='fullName'>Полное имя</label>
      </div>
      <div className='form-row'>
        <input type='text' required autoComplete='off' onChange={createUser('name')}/>
        <label htmlFor='name'>Имя пользователя</label>
      </div>
      <div className='form-row'>
        <input type='text' required autoComplete='off' onChange={createUser('email')} />
        <label htmlFor='email'>Email</label>
      </div>
      <div className='form-row'>
        <input type='password' id='email' required autoComplete='off' onChange={createUser('password')} />
        <label htmlFor='password'>Пароль</label>
      </div>'
      <p>
      <Link to = { '/Profile/${id}' } ><button className='SignUp__form__buttton' onClick={() => {saveUser()}}>
          Зарегистрироваться</button></Link>
      </p>
      </form>
    </div>
  )
};

export default SignUp;