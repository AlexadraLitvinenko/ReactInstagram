import React, { useState } from 'react';
import  Modal  from 'react-modal';
import '../styles/index.css';
import instagram from '../icons/Instagram.png';
import SignIn from './SignIn';
import SignUp from './SignUp';
const Main = () => {
    const [Signin, setSignIn] = useState(false);
    const [Signup, setSignUp] = useState(false);
    // const customStyles = {
    //     content : {
    //       top                   : '50%',
    //       left                  : '50%',
    //       right                 : 'auto',
    //       bottom                : 'auto',
    //       marginRight           : '-50%',
    //       transform             : 'translate(-50%, -50%)',
    //       width: '450px',
    //       height: '440px'
    //     }
    //   };

    return (    
    <div className='main'>
        <div>
            <img src={instagram} className='main__logo' alt='logoName' width="200" height="60"></img>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button className='SignIn__button' onClick={() => setSignIn(true)}>
                Войти
            </button>
            <div className='SignUp__button'><button className='SignUp__link' onClick={() => {setSignUp(true)}}>Зарегистрироваться</button></div>
        </div>
        {SignIn?  
        <Modal
            isOpen={Signin}
            onRequestClose={() => setSignIn(false)}
            ariaHideApp={false}>
                    <p>Нет аккаунта? <button className='SignUp__link' onClick={() => {setSignUp(true) || setSignIn(false)}}>Зарегистрироваться</button></p>
                    <SignIn />
        </Modal>:null}
        {SignUp?
        <Modal
                isOpen={Signup}
                onRequestClose={() => setSignUp(false)}
                ariaHideApp={false}>
                    <p>Уже есть аккаунт? <button className='SignUp__link' onClick={() => {setSignIn(true) || setSignUp(false)}}>Войти</button></p>
                    <SignUp />
        </Modal>:null}
    </div>
    );
};

export default Main;