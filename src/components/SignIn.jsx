import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [login = '', createLogin ] = useState();
  const [password = '', createPassword ] = useState();

const onSubmit = (event) => {
  event.preventDefault();
};
const createUser = field => ({target})=> {
  if (field === 'login') createLogin(target.value);
  if (field === 'password') createPassword(target.value);
 };
return (
  <div>
    <form onSubmit={onSubmit} className='ui-form'>
      <h3>Вход</h3>
      <div className="form-row">
        <input type='text' id='email' required autoComplete="off" onChange={createUser('login')} />
        <label htmlFor="email">Имя пользователя или email</label>
      </div>
      <div className="form-row">
        <input type='password' id='password' required autoComplete="off" onChange={createUser('password')}/>
        <label htmlFor='password'>Пароль</label>
      </div>
      <p>
          <Link to='/Profile'><button className="SignIn__form__button" onClick={() => {}}>Войти</button></Link>
      </p>
    </form>
  </div>
)};

export default SignIn;