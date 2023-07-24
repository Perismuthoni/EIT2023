// import React, { useState } from 'react';
// import '../css/ViewBillPage.css';
// import Footer from './footer';
// import Companyheader from './header';
//
//
//
// const ViewBillPage = () => {
//
//     const backendData = [
//         {  username: 'LKINYUA',acc_no:"08960", acc_name:"Lee kinyua", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//         {  username: 'LKINYUA',acc_no:" 00097", acc_name:"Lee kinyua", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//         {  username: 'LKINYUA',acc_no:"32098", acc_name:"Lee kinyua", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//
//         {  username: 'MJOHNSON',acc_no:"09868", acc_name:"Michael Johnson", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//         {  username: 'MJOHNSON',acc_no:"09867", acc_name:"Michael Johnson", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//
//         { username: 'OCLARK',acc_no:"42683", acc_name:"Olivia Clark", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//
//         { username: 'WWANGU',acc_no:"14056", acc_name:" William Wangu", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//
//         { username: 'SOMONDI',acc_no:"02397", acc_name:"Sophia Omondi", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//         { username: 'SOMONDI',acc_no:"09753", acc_name:"Sophia Omondi", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//
//         { username: 'IWANJIRU',acc_no:"00568", acc_name:"Isabella Wanjiru", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//
//         { username: 'DJOHN',acc_no:"16753", acc_name:"John Doe", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//         { username: 'DJOHN',acc_no:"23001", acc_name:"John Doe", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//         { username: 'DJOHN',acc_no:"23002", acc_name:"John Doe", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" },
//         { username: 'DJOHN',acc_no:"16234", acc_name:"John Doe", phone_no:"0701103297", acc_status:"ACTIVE", acc_tariff:"COMMERCIAL ", scheme_name:"RUIRU", route_name:"RUIRI-01" }
//
//     ]
//
//     const bills = [
//         {acc_no:"08960", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"00097", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"32098", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"09868", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"09867", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"42683", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"14056", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"02397", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"09753", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"00568", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"16753", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"23001", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"23002", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//         {acc_no:"16234", meter_rent:50,water_bill:360,sewer_bill:300,total_bill:0},
//     ]
//
//
//     const [selectedAccount, setSelectedAccount] = useState('');
//     const [selectedMonth, setSelectedMonth] = useState('');
//
//     // Function to handle account selection
//     const handleAccountSelection = (event) => {
//         setSelectedAccount(event.target.value);
//     };
//
//     // Function to handle month selection
//     const handleMonthSelection = (event) => {
//         setSelectedMonth(event.target.value);
//     };
//
//     // Generate month options
//     const getmonth = () => {
//         const months = [
//             'January',
//             'February',
//             'March',
//             'April',
//             'May',
//             'June',
//             'July',
//             'August',
//             'September',
//             'October',
//             'November',
//             'December'
//         ];
//
//         return months.map((month, index) => (
//             <option key={index} value={month}>
//                 {month}
//             </option>
//         ));
//     };
//
//
//     const selectedAccountData = backendData.find((data) => data.acc_no === selectedAccount);
//
//
//     return (
//         <div className="div">
//             <div className="ViewBillPage">
//
//
//                 <header>
//                     <center>View bill</center>
//                 </header>
//
//
//                 {backendData.map(element =>
//
//                     <div className= "container-ViewBillPage">
//
//                     <div className="column parameters ">
//
//
//                         <div className="selections">
//                             <label htmlFor="account-select">Select Account: </label>
//                             <select id="accSelect" value={selectedAccount} onChange={handleAccountSelection}>
//                                 <option value="">Select</option>
//                                 {backendData.map(data => (
//                                     <option key={data.acc_no} value={data.acc_no}>{data.acc_no}</option>
//                                 ))}
//                             </select>
//                         </div>
//
//                         <div className="selections">
//                             <label htmlFor="month-select">Select Month: </label>
//                             <select
//                                 id="month-select"
//                                 value={selectedMonth}
//                                 onChange={handleMonthSelection}
//                             >
//                                 <option value="">-- Select Month --</option>
//                                 {getmonth()}
//                             </select>
//                         </div>
//
//
//                         <label htmlFor="accSelect">Select Account Number:</label>
//
//
//
//                     <input type="submit" value="Search" />
//
//
//
//                     </div>
//
//
//                     <div className="column form ">
//
//                     <div className="billform">
//                         <Companyheader />
//                         {/*<img src={companyLogo} alt="Company Logo" className="companyheader" />*/}
//
//                         <label> Account No:
//                             <input type="text" name="acc_no" readOnly value={selectedAccountData?.acc_no || ''}/>
//                         </label>
//                         <br/>
//                         <label>  Account-Name:
//                             <input type="text" name="acc_name" readOnly value={selectedAccountData?.acc_name || ''} />
//                         </label>
//                         <br/>
//                         <label>  Phone-no:
//                             <input type="text" name="phone_no" readOnly value={selectedAccountData?.phone_no || ''} />
//                         </label>
//                         <br/>
//                         <label>  Status:
//                             <input type="text" name="acc_status" readOnly value={selectedAccountData?.acc_status || ''} />
//                         </label>
//                         <br/>
//                         <label> Tariff:
//                             <input type="text" name="acc_tariff" readOnly value={selectedAccountData?.acc_tariff || ''} />
//                         </label>
//                         <br/>
//                         <label>  Scheme:
//                             <input type="text" name="scheme_name" readOnly value={selectedAccountData?.scheme_name || ''} />
//                         </label>
//                         <br/>
//                         <label>  Route:
//                             <input type="text" name="route_name" readOnly value={selectedAccountData?.route_name || ''} />
//                         </label>
//
//
//
//                         <label>    </label>
//                     </div>
//
//                     </div>
//
//                 </div>
//
//                 )}
//
//
//
//
//
//             </div>
//
//             <Footer />
//         </div>
//
//
//     );
// };
//
// export default ViewBillPage;
