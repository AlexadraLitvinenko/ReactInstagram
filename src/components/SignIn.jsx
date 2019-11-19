import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import check_userAction from '../actions/check_user';

const SignIn = () => {

  const dispatch = useDispatch();
  const checkUser = useSelector(state => state.newuser);

  const [login = '', createLogin ] = useState();
  const [password = '', createPassword ] = useState();

const onSubmit = (event) => {
  event.preventDefault();
  dispatch(check_userAction(login, password));
};
const createUser = field => ({target})=> {
  if (field === 'login') createLogin(target.value);
  if (field === 'password') createPassword(target.value);
 };
  // const userID = checkUser.id;
  // const fullName = checkUser.user.fullName;
return (
  <div>
    <form onSubmit={onSubmit} className='ui-form'>
      <h3>Вход</h3>
      <div className="form-row">
        <input type='text' id='email' required autoComplete="off" onChange={createUser('login')} />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-row">
        <input type='password' id='password' required autoComplete="off" onChange={createUser('password')}/>
        <label htmlFor='password'>Пароль</label>
      </div>
      <p>
      <Link to = {{pathname: '/Profile/'+ checkUser.id }} ><button className='SignIn__form__button' 
      onClick={ sessionStorage.setItem('isLogged', true)} >
          Войти</button></Link>
      </p>
    </form>
  </div>
)};

export default SignIn;