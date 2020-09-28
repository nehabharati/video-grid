import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhone, faCopyright } from '@fortawesome/free-solid-svg-icons'

function Contact() {
    return (
        <div>
            <footer >
                <div className="icons">
                    <div >
                        <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
                        <p >Bangalore</p>
                    </div>
                    <div >
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <p className="text-xs mt-2 ">abc@nowhere.com</p>
                    </div >
                    <div >
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                        <p className="text-xs mt-2 ">1234567890</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Contact