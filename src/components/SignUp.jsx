/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import add_userAction from "../actions/add_user";

const SignUp = () => {
  const dispatch = useDispatch();
  const NewUser = useSelector(state => state.newuser);

  const generateID = string => { 
                  
    let hash = 0; 
      
    if (string.length == 0) return hash; 
      
    for ( let i = 0; i < string.length; i++) { 
        let char = string.charCodeAt(i); 
        hash = ((hash << 5) - hash) + char; 
        hash = hash & hash; 
    } 
    return hash; 
  } 

  const [fullName, createfullName] = useState("");
  const [name, createName] = useState("");
  const [email, createLogin] = useState("");
  const [password, createPassword] = useState("");

  const onSubmit = event => {
    event.preventDefault();
  };

  const createUser = field => ({ target }) => {
    if (field === "fullName") createfullName(target.value);
    if (field === "name") createName(target.value);
    if (field === "email") createLogin(target.value);
    if (field === "password") createPassword(target.value);
  };

  const userid = generateID(fullName);
  const user = {
    fullName: fullName,
    name: name,
    email: email,
    password: password
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="ui-form">
        <h3>Регистрация</h3>
        <div className="form-row">
          <input
            type="text"
            required
            autoComplete="off"
            onChange={createUser("fullName")}
          />
          <label htmlFor="fullName">Полное имя</label>
        </div>
        <div className="form-row">
          <input
            type="text"
            required
            autoComplete="off"
            onChange={createUser("name")}
          />
          <label htmlFor="name">Имя пользователя</label>
        </div>
        <div className="form-row">
          <input
            type="text"
            required
            autoComplete="off"
            onChange={createUser("email")}
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="form-row">
          <input
            type="password"
            id="email"
            required
            autoComplete="off"
            onChange={createUser("password")}
          />
          <label htmlFor="password">Пароль</label>
        </div>
        <p>
          <Link
            to={{ pathname: "/Profile/" + userid, state: { userid, user } }}
          >
            <button
              className="SignUp__form__buttton"
              onClick={() => {
                dispatch(add_userAction(userid, user)) &&
                  sessionStorage.setItem("isLogged", true);
              }}
            >
              Зарегистрироваться
            </button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
