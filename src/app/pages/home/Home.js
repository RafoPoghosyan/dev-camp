import './style.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Bootcamps from "../../components/bootcamps/Bootcamps";

function Home() {

    const [bootcampData, setBootcampData] = useState([]);

    useEffect(() => {
        axios.get('https://devcamp-api-node.herokuapp.com/api/v1/bootcamps')
            .then(response => {
                setBootcampData(response.data.data);
            })
            .catch(error => console.error(error));

    }, []);

    const bootCampsRender = () => {
        return bootcampData.map((item, index) => {
            return (
                <Bootcamps contentItem={item} key={index}/>
            );
        });
    };

    return (
        <div className='home'>
            <div className='home-container'>
                <section className='home-left-section'>
                    <div className='by-location'>
                        <span className='filter-type'>
                            By Location
                        </span>
                        <div className='by-location-input-container'>
                            <input type='text' placeholder='Miles From'/>
                            <input type='text' placeholder='Enter Zipcode'/>
                        </div>
                        <button className='left-section-btn'>
                            Find Bootcamps
                        </button>
                    </div>
                    <div className='filter-container'>
                        <span className='filter-type'>
                            Filter
                        </span>
                        <div className='filter-input-container'>
                            <div className='filter-input-filed'>
                                <label htmlFor='rating'>Rating</label>
                                <input type='number' id='rating' placeholder='Any'/>
                            </div>
                            <div className='filter-input-filed'>
                                <label htmlFor='budget'>Budget</label>
                                <input type='number' id='budget' placeholder='Any'/>
                            </div>
                            <button className='left-section-btn'>
                                Find Bootcamps
                            </button>
                        </div>
                    </div>
                </section>
                <section className='home-right-section'>
                    <div className='botcamps-container'>
                        {bootCampsRender()}
                    </div>
                    <div className='slider-btn'>
                        <button>
                            Previous
                        </button>
                        <button>
                            1
                        </button>
                        <button>
                            2
                        </button>
                        <button>
                            3
                        </button>
                        <button>
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home