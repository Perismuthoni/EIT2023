import React, {useState} from 'react';
import '../css/dashboard.css';
import profile_icon from '../images/profile_icon.png';
import Companyheader from "./header";
import lipabill from "../images/lipabill.jpeg";
import jisomeemeter from "../images/jisomeemeter.png";
import reconnection from "../images/reconnection.jpeg";
import replacemeter from "../images/Meter-Replacement.png";
//import Footer from "./footer";
import complaint from "../images/complaint.jpeg";



const Dashboard = ({ username }) => {


    const backendData = [
        {  username: 'LKINYUA',acc_no:"08960", acc_name:"Lee kinyua", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01",meter_serial:'20-90001k',prev_reading:785      },
        {  username: 'LKINYUA',acc_no:" 00097", acc_name:"Lee kinyua", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" ,meter_serial:'22-06001k',prev_reading:123 },
        {  username: 'LKINYUA',acc_no:"32098", acc_name:"Lee kinyua", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" ,meter_serial:'21-07801k' ,prev_reading:987 },

        {  username: 'MJOHNSON',acc_no:"09868", acc_name:"Michael Johnson", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" ,meter_serial:'20-08901k' ,prev_reading:608 },
        {  username: 'MJOHNSON',acc_no:"09867", acc_name:"Michael Johnson", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" ,meter_serial:'20-09001k' ,prev_reading:23},

        { username: 'OCLARK',acc_no:"42683", acc_name:"Olivia Clark", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" ,meter_serial:'18-54001k',prev_reading:90 },

        { username: 'WWANGU',acc_no:"14056", acc_name:" William Wangu", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" ,meter_serial:'23-00601k',prev_reading:406 },

        { username: 'SOMONDI',acc_no:"02397", acc_name:"Sophia Omondi", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01",meter_serial:'22-07001k' ,prev_reading:908},
        { username: 'SOMONDI',acc_no:"09753", acc_name:"Sophia Omondi", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" ,meter_serial:'21-20001k',prev_reading:56 },

        { username: 'IWANJIRU',acc_no:"00568", acc_name:"Isabella Wanjiru", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" ,meter_serial:'20-05601k',prev_reading:34 },

        { username: 'DJOHN',acc_no:"16753", acc_name:"John Doe", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" ,meter_serial:'20-06701k' ,prev_reading:98},
        { username: 'DJOHN',acc_no:"23001", acc_name:"John Doe", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" ,meter_serial:'22-012051k',prev_reading:786 },
        { username: 'DJOHN',acc_no:"23002", acc_name:"John Doe", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01"  ,meter_serial:'23-07801k',prev_reading:700},
        { username: 'DJOHN',acc_no:"16234", acc_name:"John Doe", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01"  ,meter_serial:'21-090001k' ,prev_reading:0}

    ]

    const bills = [
        {acc_no:"08960", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"00097", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"32098", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"09868", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"09867", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"42683", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"14056", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"02397", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"09753", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"00568", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"16753", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"23001", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"23002", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
        {acc_no:"16234", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
    ]


    const [selectedAccount, setSelectedAccount] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [ticketIsVisible, setTicketIsVisible] = useState(false);
    const [meterreplaceIsVisible, setmeterreplaceIsVisible] = useState(false);
    const [reconnectionIsVisible, setreconnectionIsVisible] = useState(false);
    const [somameterIsVisible, setsomameterIsVisible] = useState(false);
    const [billIsVisible, setbillIsVisible] = useState(false);

    // Function to handle account selection
    const handleAccountSelection = (event) => {
        setSelectedAccount(event.target.value);
    };

    // Function to handle month selection
    const handleMonthSelection = (event) => {
        setSelectedMonth(event.target.value);
    };

    // Generate month options
    const getmonth = () => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        return months.map((month, index) => (
            <option key={index} value={month}>
                {month}
            </option>
        ));
    };


    const selectedAccountData = backendData.find((data) => data.acc_no === selectedAccount);
    const selectedAccountbills = bills.find((data) => data.acc_no === selectedAccount);
    const  user_elements=  backendData.filter((data) => data.username === username);


    const openTicketViewer = () => {
        setTicketIsVisible(true);
    };
    const closeTicketViewer = () => {
        setTicketIsVisible(false);
    };

      const openmeterreplaceViewer = () => {
        setmeterreplaceIsVisible(true);
    };
    const closemeterreplaceViewer = () => {
        setmeterreplaceIsVisible(false);
    };

 const openreconnectionViewer = () => {
        setreconnectionIsVisible(true);
    };
    const closereconnectionViewer = () => {
        setreconnectionIsVisible(false);
    };

 const opensomameterViewer = () => {
        setsomameterIsVisible(true);
    };
    const closesomameterViewer = () => {
        setsomameterIsVisible(false);
    };


 const openbillViewer = () => {
        setbillIsVisible(true);
    };
    const closebillViewer = () => {
        setbillIsVisible(false);
    };




    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [complainNature, setComplainNature] = useState('');
    const [ticketCat, setTicketCat] = useState('');
    const [complaint, setcomplaint] = useState('');
    const [account_number, setaccount_number] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'name') {
            setName(value);
        } else if (name === 'phoneNumber') {
            setPhoneNumber(value);
        } else if (name === 'complainNature') {
            setComplainNature(value);
        } else if (name === 'ticketCat') {
            setTicketCat(value);
        }else if (name === 'complaint') {
            setcomplaint(value);
        }else if (name === 'account_number') {
            setaccount_number(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement logic to handle the submitted complaint
        console.log('Name:', name);
        console.log('Phone Number:', phoneNumber);
        console.log('Nature of Complain:', complainNature);
        console.log('Ticket Category:', ticketCat);
        // Reset the form
        setName('');
        setPhoneNumber('');
        setComplainNature('');
        setcomplaint('');
        setTicketCat('');
        setaccount_number('');
    };



    // Generate ticket category options
    const getTicketCatOptions = () => {
        const categories = [
            'GENERAL',
            'DISCONNECTION',
            'SEWER',
            'LACK OF SERVICE',
            'BILL ISSUES'
        ];



        return categories.map((category, index) => (
            <option key={index} value={category}>
                {category}
            </option>
        ));
    };


    const getreplacementOptions = () => {
        const reasons = [
            'SELECT REASON',
            'METER-LEAK',
            'STUCK-METER',
            'STOLEN'
        ];
        return reasons.map((reason, index) => (
            <option key={index} value={reason}>
                {reason}
            </option>
        ));
    };


        const [selectedFile, setSelectedFile] = useState(null);

        const handleFileChange = (event) => {
            const file = event.target.files[0];
            setSelectedFile(file);
        };


    return (
        <div className="dashboard" >
            <Companyheader />

            <div>


            {/*PROFILE ICON*/}
            <div className="profile-container">


                <div className="column-profile" >

                <div className="profile-image">
                    <img src={profile_icon} alt="Profile" />
                </div>
                <div className="profile-info">
                    {username}
                </div>
                </div>


                <div className="column-account">
                    Select Account :
                    <select id="accSelect" value={selectedAccount} onChange={handleAccountSelection}>
                        <option value="">Select</option>
                        {user_elements.map(data => (
                            <option key={data.acc_no} value={data.acc_no}>{data.acc_no}</option>
                        ))}
                    </select>
                </div>


            </div>
 {/*PROFILE ICON*/}
            </div>

                <div className= "container-dashboard">


                    <div className="column-details">

                             <p><strong> Account Details</strong></p>
                            <p> Account No:  {selectedAccountData?.acc_no || ''}  </p>
                            <p> Account-Name:  {selectedAccountData?.acc_name || ''}  </p>
                            <p> Phone-no:  {selectedAccountData?.phone_no || ''}  </p>
                            <p> Status:  {selectedAccountData?.acc_status || ''}  </p>
                            <p> Tariff:  {selectedAccountData?.acc_tariff || ''}  </p>
                            <p> Scheme:  {selectedAccountData?.scheme_name || ''}  </p>
                            <p> Route::  {selectedAccountData?.route_name || ''}  </p>



                    </div>

                    <div className="column-action">

                        <div className="row">
                            <div className="column-left">
                                <div className="icon-container">
                                    <img src={lipabill} alt="Company Logo" className="logo" />
                                </div>
                            </div>
                            <div className="column-right">
                                <p> <a href="#" onClick={openbillViewer} > View your current bill</a></p>
                                {billIsVisible && (
                                    <div className="billviewer">

                                        <p>  <button onClick={closebillViewer}>Close</button> </p>

                                        <form onSubmit={handleSubmit} className="bill-form">



                                                <p> Account No:  {selectedAccountData?.acc_no || ''}   </p>
                                                <p> Account-Name:  {selectedAccountData?.acc_name || ''}  </p>
                                                <p> Tariff:  {selectedAccountData?.acc_tariff || ''}  </p>
                                                <p> Meter-Rent:  {selectedAccountbills?.meter_rent || ''}  </p>
                                                <p> Sewer-Bill:  {selectedAccountbills?.water_bill || ''}  </p>
                                                <p> Water-Bill:  {selectedAccountbills?.sewer_bill || ''}  </p>
                                                <p> Total-Bill:  </p>
                                            {/*<div className="buttons">*/}

                                            {/*    /!*<button className="back_button" onClick={closeTicketViewer}  ><a href="/"> Back </a> </button>*!/*/}

                                            {/*    <center>*/}
                                            {/*        <button onClick={closebillViewer}  className="submitbutton">Close</button> </center>*/}
                                            {/*</div>*/}


                                        </form>


                                    </div>
                                )}
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
                                    <a href="#" onClick={opensomameterViewer}> submit meter reading</a>
                                    <a href="/somameter"> ( How to read your meter )</a>
                                </p>
                                {somameterIsVisible && (
                                    <div className="ticketviewer">

                                        <p>  <button onClick={closesomameterViewer}>Exit</button> </p>

                                        <form onSubmit={handleSubmit} className="ticket-form">

                                            <label className="account_number">
                                                <span> Account Number: </span>

                                                <input
                                                    type="text"
                                                    name="account_number"
                                                    value={selectedAccountData?.acc_no || ''}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <br />
                                            <label className="name">
                                                <span> Meter-serial:  </span>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={selectedAccountData?.meter_serial || ''}
                                                    onChange={handleChange}
                                                />
                                            </label>

                                            <br />
                                            <label className="name">
                                                <span> Previous reading:  </span>

                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={selectedAccountData?.prev_reading || ''}
                                                    onChange={handleChange}
                                                />
                                            </label>

                                            <br />

                                            <div>
                                                <span> Meter-reading image :</span>
                                                <input type="file" onChange={handleFileChange} name='attachment' />
                                                {selectedFile && (
                                                    <div>
                                                        <p>Selected File: {selectedFile.name}</p>
                                                        <img src={URL.createObjectURL(selectedFile)} alt="Selected" />
                                                    </div>
                                                )}
                                            </div>


                                            <br />


                                            <label className="name">

                                                <input
                                                    type="text"
                                                    name="complaint"
                                                    value={complaint}
                                                    onChange={handleChange}
                                                    placeholder="input current readings"
                                                />
                                            </label>


                                            <br />
                                            <label className="complaint">

                                                <input
                                                    className="complaint"
                                                    type="text"
                                                    name="complaint"
                                                    value={complaint}
                                                    onChange={handleChange}
                                                    placeholder="comments/remarks"
                                                />
                                            </label>
                                            <br />
                                            <br />

                                            <div className="buttons">

                                                {/*<button className="back_button" onClick={closeTicketViewer}  ><a href="/"> Back </a> </button>*/}

                                                <center>
                                                    <button type="submit" className="submitbutton">Submit Readings</button> </center>
                                            </div>


                                        </form>


                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="row">
                            <div className="column-left">
                                <div className="icon-container">
                                    <img src={reconnection} alt="Company Logo" className="logo" />
                                </div>
                            </div>
                            <div className="column-right">
                                <p> <a href="#" onClick={openreconnectionViewer}>Request reconnection</a></p>
                                {reconnectionIsVisible && (
                                    <div className="ticketviewer">

                                        <p>  <button onClick={closereconnectionViewer}>Exit</button> </p>

                                        <form onSubmit={handleSubmit} className="ticket-form">

                                            <label className="account_number">
                                                <span> Account Number: </span>

                                                <input
                                                    type="text"
                                                    name="account_number"
                                                    value={selectedAccountData?.acc_no || ''}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <br />
                                            <label className="name">
                                                <span> Current Status:  </span>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={selectedAccountData?.acc_status || ''}
                                                    onChange={handleChange}
                                                />
                                            </label>

                                            <br />

                                            <label className="complainNature">
                                                <p>  Nature of Complaint: </p>

                                                <select
                                                    className="ticketCat_selection"
                                                    id="ticketCat"
                                                    name="ticketCat"
                                                    value={ticketCat}
                                                    onChange={handleChange}
                                                >
                                                    {getTicketCatOptions()}
                                                </select>

                                            </label>
                                            <br />



                                            <br />
                                            <br />
                                            <label className="complaint">

                                                <input
                                                    className="complaint"
                                                    type="text"
                                                    name="complaint"
                                                    value={complaint}
                                                    onChange={handleChange}
                                                    placeholder="Share your challenge to help us serve you better"
                                                />
                                            </label>
                                            <br />
                                            <br />

                                            <div className="buttons">

                                                {/*<button className="back_button" onClick={closeTicketViewer}  ><a href="/"> Back </a> </button>*/}

                                                <center>
                                                    <button type="submit" className="submitbutton">Submit</button> </center>
                                            </div>


                                        </form>


                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="row">
                            <div className="column-left">
                                <div className="icon-container">
                                    <img src={replacemeter} alt="Company Logo" className="logo" />
                                </div>
                            </div>
                            <div className="column-right">
                                <p> <a href="#" onClick={openmeterreplaceViewer} >Request Meter Replacement</a></p>
                                {meterreplaceIsVisible && (
                                    <div className="ticketviewer">

                                        <p>  <button onClick={closemeterreplaceViewer}>Exit</button> </p>

                                        <form onSubmit={handleSubmit} className="ticket-form">

                                            <label className="account_number">
                                                <span> Account Number: </span>

                                                <input
                                                    type="text"
                                                    name="account_number"
                                                    value={selectedAccountData?.acc_no || ''}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <br />
                                            <label className="name">
                                                <span> current meter serial:  </span>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={selectedAccountData?.meter_serial || ''}
                                                    onChange={handleChange}
                                                    placeholder="enter you full name"
                                                />
                                            </label>

                                            <br />

                                            <label className="complainNature">
                                                <span> Reason: </span>

                                                <select
                                                    className="ticketCat_selection"
                                                    id="ticketCat"
                                                    name="ticketCat"
                                                    value={ticketCat}
                                                    onChange={handleChange}
                                                >
                                                    {getreplacementOptions()}
                                                </select>

                                            </label>

                                            <br />
                                            <label className="complaint">

                                                <input
                                                    className="complaint"
                                                    type="text"
                                                    name="complaint"
                                                    value={complaint}
                                                    onChange={handleChange}
                                                    placeholder=" write any other remarks you want considered during review"
                                                />
                                            </label>
                                            <br />

                                            <div className="buttons">

                                                {/*<button className="back_button" onClick={closeTicketViewer}  ><a href="/"> Back </a> </button>*/}

                                                <center>
                                                    <button type="submit" className="submitbutton">Submit</button> </center>
                                            </div>


                                        </form>


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

                                <p> <a href="#" onClick={openTicketViewer}  > Raise complaint or Leave compliment</a></p>
                                {ticketIsVisible && (
                                    <div className="ticketviewer">

<p>  <button onClick={closeTicketViewer}>Exit</button> </p>

                                        <form onSubmit={handleSubmit} className="ticket-form">

                                            <label className="account_number">
                                                <span> Account Number: </span>

                                                <input
                                                    type="text"
                                                    name="account_number"
                                                    value={selectedAccountData?.acc_no || ''}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <br />
                                            <label className="name">
                                                <span> Full Name:  </span>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={selectedAccountData?.acc_name || ''}
                                                    onChange={handleChange}
                                                    placeholder="enter you full name"
                                                />
                                            </label>
                                            <br />
                                            <label className="phoneNumber">
                                                <span> Phone Number: </span>

                                                <input
                                                    type="text"
                                                    name="phoneNumber"
                                                    value={selectedAccountData?.phone_no || ''}
                                                    onChange={handleChange}
                                                    placeholder="254700000000,0700000000"
                                                />
                                            </label>
                                            <br />

                                            <label className="complainNature">
                                                <p>  Nature of Complaint: </p>

                                                <select
                                                    className="ticketCat_selection"
                                                    id="ticketCat"
                                                    name="ticketCat"
                                                    value={ticketCat}
                                                    onChange={handleChange}
                                                >
                                                    {getTicketCatOptions()}
                                                </select>

                                            </label>
                                            <br />



                                            <br />
                                            <br />
                                            <label className="complaint">

                                                <input
                                                    className="complaint"
                                                    type="text"
                                                    name="complaint"
                                                    value={complaint}
                                                    onChange={handleChange}
                                                    placeholder="Share your challenge to help us serve you better"
                                                />
                                            </label>
                                            <br />
                                            <br />

                                            <div className="buttons">

                                                {/*<button className="back_button" onClick={closeTicketViewer}  ><a href="/"> Back </a> </button>*/}

                                                <center>
                                                <button type="submit" className="submitbutton">Submit</button> </center>
                                            </div>


                                        </form>


                                    </div>
                                )}
                            </div>
                        </div>

                    </div>





                </div>
        </div>
    );
};

export default Dashboard;
