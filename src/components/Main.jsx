import React, { useState } from 'react';
import  Modal  from 'react-modal';
import '../styles/index.css';
import icon from '../icons/icon.png';
import instagram from '../icons/Instagram.png';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Main = (props) => {
    const [Signin, setSignIn] = useState(false);
    const [Signup, setSignUp] = useState(false);
    
    return (    
    <div className='main'>
        <div>
            <img src={instagram} className='main__logo' alt='logoName' width="200" height="60"></img>
        </div>
        {props.isLogged==true?
            <div>
            
            <div className='profile__information'>
                <img src={icon} alt='icon' width="54" height="54" />
                <p>Добро пожаловать, {props.userName}</p>
            </div>
            </div>:
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button className='SignIn__button' onClick={() => setSignIn(true)}>Войти</button>
                <div className='SignUp__button'><button className='SignUp__link' onClick={() => {setSignUp(true)}}>Зарегистрироваться</button></div>
            </div>}
        {SignIn?  
        <Modal
            isOpen={Signin}
            onRequestClose={() => setSignIn(false)}
            ariaHideApp={false}
            className='Modal_SignIn'
            overlayClassName="Overlay">
                    <p>Нет аккаунта? <button className='SignUp__link' onClick={() => {setSignUp(true) || setSignIn(false)}}>Зарегистрироваться</button></p>
                    <SignIn />
        </Modal>:null}
        {SignUp?
        <Modal
                isOpen={Signup}
                onRequestClose={() => setSignUp(false)}
                ariaHideApp={false}
                className='Modal_SignUp'
                overlayClassName="Overlay">
                    <p>Уже есть аккаунт? <button className='SignUp__link' onClick={() => {setSignIn(true) || setSignUp(false)}}>Войти</button></p>
                    <SignUp />
        </Modal>:null}
    </div>
    );
};

export default Main;