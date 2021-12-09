import './style.css';
import React from 'react';

function Intro() {


    return (
        <div className='intro-main-container'>
            <div className='find-bootcamp-container' >
                <div>
                    <h1>
                        Find a Code Bootcamp
                    </h1>
                    <span>
                    Find, rate and read reviews on coding bootcamps
                    </span>
                </div>
                <div className='intro-inputs-container'>
                    <input type='text' placeholder='Miles From'/>
                    <input type='text' placeholder='Enter Zipcode'/>
                </div>
                <button className='find-btn'>
                    Find Bootcamps
                </button>
            </div>
        </div>
    );
}

export default Intro