import React, { useState } from 'react';
import '../css/ticket.css';

const Raiseticket = () => {
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

  return (
      <div className="container-center">
        <div className="container-Raiseticket">
          <h3> <center> Share your issue with us </center>  </h3>

          <form onSubmit={handleSubmit} className="ticket-form">
            <label className="account_number">
              <span> Account Number: </span>

              <input
                  type="text"
                  name="account_number"
                  value={account_number}
                  onChange={handleChange}
              />
            </label>
            <br />
            <label className="name">
              <span> Full Name:  </span>
              <input
                  type="text"
                  name="name"
                  value={name}
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
                  value={phoneNumber}
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

              <button className="back_button"  ><a href="/"> Back </a> </button>


              <button type="submit" className="submit_button">Submit</button>
            </div>


          </form>


        </div>
      </div>
  );
};

export default Raiseticket;
