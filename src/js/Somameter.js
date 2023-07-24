import React from 'react';
import '../css/somameter.css';
import meterreader from "../images/meterreader.jpeg";
import somameter from "../images/meterstandard.png";





function Somameter() {
    return (
        <div className="somameter">
            <h1> <strong>How to read your meter</strong></h1>

            <div className="row">
                <p className="paragraph">
                    Although we try to read meters and send bills based on an actual reading,
                    sometimes it’s not possible because the meter’s fitted inside your property or behind locked gates.
                </p>

            </div>
            <br></br>
            <div className="container">

                <div className="meter-reader">
                    <img src={meterreader} alt="Company Logo" className="logo" />
                </div>

                <p className="meter-reader-paragraph">
                    If we estimate your bill, it can sometimes be higher or lower than your actual water usage,
                    particularly if you’ve recently had a meter fitted and there’s no reading history to guide us.
                    If you receive an estimated bill but would like,
                    a bill based on a meter reading, simply send us a meter reading and we’ll re-calculate your bill.
                </p>

            </div>

            <div>
                <h2> <strong>How to read your meter</strong></h2>

<p className="paragraph">
    Reading your meter’s easy. It’ll either be a standard or digital meter as shown below.
    Remember to include any zeros on the meter when taking a reading.
</p>

            </div>
            <div>

                <h2> <strong> Standard meters</strong></h2>
                <p className="paragraph">
                    If you have an older style meter, your display will have black digits on a white background.
                    These indicate the cubic metres used and will be what you submit in your reading.
                    Tell us the first five digits only, so in the example shown, the meter reading would be 00158.
                </p>
                <div className="read-meter">
                    <img src={somameter} alt="Company Logo" className="logo" />
                </div>


            </div>

            <div>

                <h2> <strong>  How to send us your meter readings </strong></h2>
                <p className="paragraph">
                    The easiest way to submit your reading is through <a href="/somameter"> jisomee meter </a> .
                    You can input your reading, create your own up to date bill, and also change your payment plan
                    all in the click of a button.
                </p>
                    <br></br>


                    <p className="paragraph">
                If you would prefer to speak to someone,
                you can request a free call back from us, or you can speak to us on 0700000000.
                </p>

            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>

    )
}

export default Somameter;
