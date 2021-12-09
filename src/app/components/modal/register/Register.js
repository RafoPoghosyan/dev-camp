import './style.css';
import React from 'react';
import registerIcon from "../../../assets/images/registerIcon.svg";


function Register() {


    return (
        <div className='register-main-container'>
            <div className='register-container'>
                <div className='modal-icon-container'>
                    <div className='modal-register-icon'>
                        <img src={registerIcon} alt="Register icon"/>
                    </div>
                    <span className='modal-name'>
                        Register
                    </span>
                </div>
                <p className='modal-info-text'>
                    Register to list your bootcamp or rate, review and favorite bootcamps
                </p>
                <div className='input-filed-container'>
                    <div className='input-filed'>
                        <label htmlFor='register-name'>
                            Name
                        </label>
                        <input type='text' placeholder='Enter Full Name' id='register-name'/>
                    </div>
                    <div className='input-filed'>
                        <label htmlFor='register-email'>
                            Email Address
                        </label>
                        <input type='text' placeholder='Enter Email' id='register-email'/>
                    </div>
                    <div className='input-filed'>
                        <label htmlFor='register-password'>
                            Password
                        </label>
                        <input type='password' placeholder='Enter Password' id='register-password'/>
                    </div>
                    <div className='input-filed'>
                        <label htmlFor='confirm-password'>
                            Confirm Password
                        </label>
                        <input type='password' placeholder='Confirm Password' id='confirm-password'/>
                    </div>
                </div>
                <div className='user-role'>
                    <span>
                        User Role
                    </span>
                    <div className='user-role-input-container'>
                        <div>
                            <input type='radio' id='regular-user' name='role-choose'/>
                            <label htmlFor='regular-user'>Regular User (Browse, Write reviews, etc)</label>
                        </div>
                        <div>
                            <input type='radio' id='bootcamp-publisher' name='role-choose'/>
                            <label htmlFor='bootcamp-publisher'>Bootcamp Publisher</label>
                        </div>
                    </div>
                </div>
                <p className='register-note'>
                    * You must be affiliated with the bootcamp in some way in order to add it to DevCamper.
                </p>
                <button className='modal-btn'>
                    Register
                </button>
            </div>
        </div>
    );
}

export default Register