import './style.css';
import React from 'react';
import rightArrow from '../../../assets/images/right-arrow.svg';
import loginIcon from '../../../assets/images/loginIcon.svg';
import {useHistory} from 'react-router-dom';




function Login(props) {

    const history = useHistory();

    const toHome = () => {
        props.toggleLogin();
        history.push('/home');
    };


    return(
            <div className='login-main-container'>
                <div className='login-container'>
                    <div className='modal-icon-container'>
                        <div className='modal-login-icon'>
                            <img src={rightArrow} className='right-arrow'/>
                            <img src={loginIcon}/>
                        </div>
                        <span className='modal-name'>
                            Login
                        </span>
                    </div>
                   <p className='modal-info-text'>
                       Log in to list your bootcamp or rate, review and favorite bootcamps
                   </p>
                    <div className='input-filed-container'>
                        <div className='input-filed'>
                            <label htmlFor='email'>
                                Email Address
                            </label>
                            <input type='text' placeholder='Enter Email' id='email'/>
                        </div>
                        <div className='input-filed'>
                            <label htmlFor='password'>
                                Password
                            </label>
                            <input type='password' placeholder='Enter Password' id='password'/>
                        </div>
                    </div>
                    <button className='modal-btn' onClick={toHome}>
                        Login
                    </button>
                    <div className='forgot-reset-passwords'>
                        <span>
                            Forgot Password?
                        </span>
                        <span>
                            Reset Password
                        </span>
                    </div>
                </div>
            </div>
    );
}

export default Login