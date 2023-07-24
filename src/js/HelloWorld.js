import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import '../css/home.css';
import companyLogo from '../images/RujwascoLogo.png'; // Replace 'company-logo.png' with the path to your image file
import lipabill from '../images/lipabill.jpeg';
import replacemeter from '../images/Meter-Replacement.png';
import jisomeemeter from '../images/jisomeemeter.png';
import reconnection from '../images/reconnection.jpeg';
import newconnection from '../images/Get-Connected.png';
import exhauster from '../images/exhauster.jpeg';
import taarif from '../images/taarif.jpeg';
import complaint from '../images/complaint.jpeg';
import tarrif_pdf  from '../images/tariff.pdf';
import Footer from "./footer";
import Ticket from "./ticket";





function HelloWorld() {

        const [isVisible, setIsVisible] = useState(false);
        const [ticketIsVisible, setTicketIsVisible] = useState(false);

        const openPDFViewer = () => {
            setIsVisible(true);
        };
        const closePDFViewer = () => {
            setIsVisible(false);
        };
        const openTicketViewer = () => {
            setTicketIsVisible(true);
        };
        const closeTicketViewer = () => {
            setTicketIsVisible(false);
        };

        return (

        <div>
            <div className="header">
                <img src={companyLogo} alt="Company Logo" className="logo" />
                <p className="header-text"><center> making a difference.</center>   </p>
            </div>
            <hr></hr>

            <nav className="navbar">
                <ul className="nav-list">
                    <li> <a href="/">Home</a> </li>

                    <li>
                        <a href="/services">Services</a>
                        <ul className="dropdown-menu">
                            <li> <a href="/services"> New connection </a></li>
                            <li> <a href="/services">Bowser Services </a></li>
                            <li> <a href="/services">Exhauster Services </a></li>
                            <li> <a href="/services">Meter Testing </a></li>
                            <li> <a href="/services">Reconnection </a></li>
                        </ul>
                        <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
                    </li>
                    <li> <a href="/about">About us</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>

            <div className="container-home">


                <div className="column customer-section">
                    <h2><center>
                    <strong>Self Care Portal</strong> <span className="highlight">( for account holders )</span>
                    </center> </h2>

                    <div className="row">
                        <div className="column-left">
                            <div className="icon-container">
                            <img src={lipabill} alt="Company Logo" className="logo" />
                            </div>
                        </div>
                        <div className="column-right">
                            <p> <a href="/login"> View/Lipa bill</a></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column-left">
                            <div className="icon-container">
                                <img src={jisomeemeter} alt="Company Logo" className="logo" />
                            </div>
                        </div>
                        <div className="column-right">
                            <p>
                                <a href="/login"> Jisomee Meter</a>
                                <a href="/somameter"> ( How to read your meter )</a>
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column-left">
                            <div className="icon-container">
                                <img src={reconnection} alt="Company Logo" className="logo" />
                            </div>
                        </div>
                        <div className="column-right">
                            <p> <a href="/login">Get reconnected</a></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column-left">
                            <div className="icon-container">
                                <img src={replacemeter} alt="Company Logo" className="logo" />
                            </div>
                        </div>
                        <div className="column-right">
                            <p> <a href="/login">  Replace Meter</a></p>
                        </div>
                    </div>




                </div>

                <div className="column non-customer-section">
                    <h2> <center>
                        <strong>To All</strong> <span className="highlight">( for both account holders & public )</span>
                    </center>   </h2>

                    <div className="row">
                        <div className="column-left">
                            <div className="icon-container">
                                <img src={newconnection} alt="Company Logo" className="logo" />
                            </div>
                        </div>
                        <div className="column-right">
                            <p> <a href="/lipa">New Connection</a></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column-left">
                            <div className="icon-container">
                                <img src={exhauster} alt="Company Logo" className="logo" />
                            </div>
                        </div>
                        <div className="column-right">
                            <p> <a href="/lipa"> Get Bowser/Exhauster service </a></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="column-left">
                            <div className="icon-container">
                                <img src={taarif} alt="Company Logo" className="logo" />
                            </div>
                        </div>
                        <div className="column-right">
                            <p> <a href="#" onClick={openPDFViewer} >Know your Taarif</a></p>
                            {isVisible && (
                                <div className="pdf-viewer">
                                    <button onClick={closePDFViewer}>Close</button>
                                    <iframe src={tarrif_pdf} width="100%" height="650px" title="PDF Viewer" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="row">
                        <div className="column-left">
                            <div className="icon-container">
                                <img src={complaint} alt="Company Logo" className="logo" />
                            </div>
                        </div>
                        <div className="column-right">
                            <p> <a href="/raiseticket"  > Raise complaint or Leave compliment</a></p>
                            {ticketIsVisible && (
                                <div className="ticket-viewer">
                                    <button onClick={closeTicketViewer}>Exit</button>
                                   <Ticket/>
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>
            <div>

                <p>other news </p>
                <p>other news </p>
                <p>other news </p>
                <p>other news </p>
                <p>other news </p>

            </div>

            <Footer />
        </div>

    )
}

export default HelloWorld;
