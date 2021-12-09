import './style.css';
import React, {useState} from 'react';
import Modal from 'react-modal'
import logoImg from '../../assets/images/vector.png';
import loginIcon from '../../assets/images/loginIcon.svg';
import registerIcon from '../../assets/images/registerIcon.svg';
import rightArrow from '../../assets/images/right-arrow.svg';
import Login from "../modal/login/Login";
import Register from "../modal/register/Register";
import {useLocation, useHistory} from 'react-router-dom';
import triangle from '../../assets/images/triangle.png';
import userTop from '../../assets/images/userIconTop.png';
import userBottom from '../../assets/images/userIconBottom.png';


const customStyles = {
    overlay: {
        top: '56px',
        background: "rgba(255, 255, 255, 1)",
        position: 'absolute',

    },
    content: {
        position: 'relative',
        left: "50%",
        top: '103px',
        zIndex: '1',
        border: '1px solid rgba(0, 0, 0, 0.13)',
        transform: "translateX(-50%)",
        backgroundColor: "#FFFFFF",
        padding: '0',
    },
};


function Header() {

    const [isOpenLogin, setIsOpenLogin] = useState(false);
    const [isOpenRegister, setIsOpenRegister] = useState(false);
    const location = useLocation();
    const history = useHistory();

    const toggleLogin = () => {
        setIsOpenLogin(!isOpenLogin);
        setIsOpenRegister(false);
    };

    const toggleRegister = () => {
        setIsOpenRegister(!isOpenRegister);
        setIsOpenLogin(false);
    };

    const toIntro = () => {
        if (location.pathname !== '/')
            history.push('/');
    };

    return (
        <header>
            <div className='header-container'>
                <div className='logo-container' onClick={toIntro}>
                    <div className='logo-img'>
                        <img src={logoImg} alt="Logo image"/>
                    </div>
                    <span>
                        DevCamper
                    </span>
                </div>
                <div className='login-register-panel'>
                    {location.pathname !== '/' ?
                        <div className='account-container'>
                            <div className='user-icon'>
                                <img src={userTop} className='user-icon-top' alt='User head'/>
                                <img src={userBottom} className='user-icon-bottom' alt='User body'/>
                            </div>
                            <span>
                                Account
                            </span>
                            <img src={triangle} className='triangle-icon' alt="Triangle"/>
                        </div>
                        :
                        <div className='login-register-content'>
                            <div className='login-register-container' onClick={toggleLogin}>
                                <div className='login-icon'>
                                    <img src={rightArrow} className='right-arrow' alt='Right arrow'/>
                                    <img src={loginIcon} alt='Login icon'/>
                                </div>
                                <span>
                                    Login
                                </span>
                            </div>
                            <div className='login-register-container' onClick={toggleRegister}>
                                <img src={registerIcon} className='register-icon' alt='Register icon'/>
                                <span>
                                    Register
                                </span>
                            </div>
                        </div>
                    }
                    <div className='login-register-content'>
                        <div className='border-left'>
                        </div>
                        <span>
                            Browse Bootcamps
                        </span>
                    </div>

                </div>
            </div>
            <Modal
                isOpen={isOpenLogin}
                style={customStyles}
                onRequestClose={toggleLogin}
            >
                <Login toggleLogin={toggleLogin}/>

            </Modal>
            <Modal
                isOpen={isOpenRegister}
                style={customStyles}
                onRequestClose={toggleRegister}
            >
                <Register/>

            </Modal>
        </header>
    );
}

export default Header