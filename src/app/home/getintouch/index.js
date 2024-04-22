import React, { useState } from 'react';
import './getintouch.scss';
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import SubmitButton from '../../../shared/components/submitbutton';
import emailjs from '@emailjs/browser';
import ValidationUser from '../../../shared/common/validationuser';
import { toast } from 'react-toastify';
import InputEmail from '../../../shared/components/inputemail';

export default function GetInTouch() {

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false);
  let throttleTime = 800;
  let lastTime = 0;


  // *************** SEND MAIL *****************
  const sendEmail = (name, email, message) => {
    const templateParams = {
      from_name: name,
      from_email: email,
      message: message
    }

    emailjs
      .send('service_y5djflf', 'template_1u7m6jf', templateParams, {
        publicKey: 'yrNnEYQ7LjbD5HXLu',
      })
      .then(
        () => {
          toast.success(" Thank you for connecting us !! ");
          console.log('SUCCESS!');
          setNewUser({
            name: '',
            email: '',
            message: '',
          });
          setIsLoading(false);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }



  const handleChange = (e) => {
    const { name, value } = e.target

    const data = {
      ...newUser,
      [name]: value,
    }
    setNewUser(data);
  }

  const handleClick = (e) => {
    console.log('button click');
    let currentTime = Date.now();

    if (currentTime - lastTime >= throttleTime && !isLoading) {
      setIsLoading(true);
      if (ValidationUser(newUser)) {
        const { name, email, message } = newUser;
        sendEmail(name, email, message);
      }
      else {
        e.preventDefault();
        setIsLoading(false);
      }
    }
    lastTime = currentTime;
  }



  return (
    <>
      <div className='getintouch'>
        <div className="container">
          <div className="innergetintouch">
            <h2>Get In Touch!</h2>
            <div className="vector"></div>
            <h3>WE ARE LOOKING FORWARD TO START A PROJECT WITH YOU! </h3>
            <p>Morbi convallis metus eros, semper efficitur auctor. Etiam sit amet convallis erat. Class aptent taciti sociosqu ad litora torquent per conubia! Maecenas gravida lacus nec dolor suscipit faucibus.</p>
            <div className='contactus'>
              <div className="address">
                <div className="subAddress">
                  <span className="icons">
                    <IoLocationSharp className='icon' />
                  </span>
                  <h4>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</h4>
                </div>
                <div className="subAddress">
                  <span className="icons">
                    <BsFillTelephoneFill className='icon' />
                  </span>
                  <h4>1 (234) 567-891</h4>
                  <h4>1 (234) 987-654</h4>
                </div>
                <div className="subAddress">
                  <span className="icons">
                    <MdOutlineAccessTimeFilled className='icon' />
                  </span>
                  <h4>Mon – Fri …… 10 am – 8 pm</h4>
                  <h4>Sat, Sun …… Closed</h4>
                </div>
              </div>
              <div className="innerForms">
                <div className="input-text-email">
                  <div className="input">
                    <input type="text" name="name" id="name" placeholder='Enter your Name' onChange={(e) => handleChange(e)} value={newUser.name} />
                  </div>
                  <div className="input">
                    <InputEmail placeholder='Enter a valid email address' onChange={(e) => handleChange(e)} value={newUser.email} />
                  </div>
                </div>
                <div className="input">
                  <textarea name="message" id="message" placeholder='Enter your message' rows="5" onChange={(e) => handleChange(e)} value={newUser.message} ></textarea>
                </div>
                <div className="submitButton">
                  <SubmitButton IsDisabled={isLoading} onClick={(e) => handleClick(e)} text={isLoading ? 'Loading...' : 'Submit'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
