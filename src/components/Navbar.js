import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <nav>
                <FontAwesomeIcon icon={faVideo} className="logo" />
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/features">
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link to="/videos">
                            Videos
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
}

export default Navbar;
