import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faLocationDot, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-container'>
            <div>
                <h2 className='footer-header'>Office Hours</h2>
                <h5>Monday: 09:00 - 17:00</h5>
                <h5>Tuseday: 09:00 - 17:00</h5>
                <h5>Wednesday: 09:00 - 17:00</h5>
                <h5>Thursday: 09:00 - 17:00</h5>
                <h5>Friday: 09:00 - 17:00</h5>
                <p>Saturday, Sunday: <br />
                 By appointment only</p>
            </div>
            <div>
                <div>
                    <h2 className='footer-header'>Student Support</h2>
                    <h5><a className='text-black text-decoration-none' href="">Students Life</a></h5>
                    <h5><a className='text-black text-decoration-none' href="">Join Our Events</a></h5>
                    <h5><a className='text-black text-decoration-none' href="">Policy</a></h5>
                </div>
                <div>
                    <div><FontAwesomeIcon icon={faEnvelope} /> support@gmail.com</div>
                    <div><FontAwesomeIcon icon={faPhone} /> +8802453645674</div>
                    <div><FontAwesomeIcon icon={faLocationDot} /> Tangail,Dhaka</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;