import './style.css';
import React from 'react';
import img from '../../assets/images/image_1 1.png';

function Bootcamps(props) {

    let address = props.contentItem.address.split(' ');
    let newAddress = address[address.length - 3].slice(0, -1);


    return(

        <div className='bootcamp-container'>
            <div className='bootcamp-img'>
                <img src={img}/>
            </div>
            <div className='bootcamp-name-container'>
                <div className='name-rating'>
                    <span>
                        {props.contentItem.name}
                    </span>
                    <div className='rating'>
                        8.8
                    </div>
                </div>
                <div className='address-content'>
                    {newAddress + ', ' + address.splice(address.length-2,1)}
                </div>
                <span className='careers-content'>
                  {props.contentItem.careers.join(', ')}
                </span>
            </div>

        </div>
    );
}

export default Bootcamps