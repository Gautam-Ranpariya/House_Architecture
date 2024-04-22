import React from 'react';
import './herobanner.scss';
import InputEmail from '../../../shared/components/inputemail';
import SubmitButton from '../../../shared/components/submitbutton';
import { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export default function HeroBanner() {
    const [isLoading, setIsLoading] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const email_pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const throttleTime = 800;
    let lastClickTime = 0;



    // ****************** Email Validation **********************
    const emailValidation = (email) => {
        let isValid = false;
        if ((email === "") || (email.length === 0)) {
            toast.error('Please Enter Your Email ');
            return isValid;
        }
        else if (!email_pattern.test(email)) {
            toast.error('Please Enter a Valid Email Address');
            return isValid;
        }
        isValid = true;
        return isValid;
    };

    // ******************* Email Send *********************************
    const emailSend = (email) => {
        let contact = 
        {
          from_email : email,
        }

        emailjs
            .send('service_awmcvjb', 'template_9bc9rrv', contact, {
                publicKey: 'EmPjANdu-UumsGhwQ',
            })
            .then(
                () => {
                    toast.success(" Thank you for Contacting us !! ");
                    setUserEmail("");
                    setIsLoading(false);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    console.log('****',error);
                    
                },
            );
    }


    const handleClick = (e) => {
        const currentTime = new Date().getTime();
        console.log('button clicked');
        

        if (currentTime - lastClickTime >= throttleTime && !isLoading) {
            setIsLoading(true);
            if (emailValidation(userEmail)) {
                emailSend(userEmail);
            }
            else {
                e.preventDefault();
                setIsLoading(false);
            }
            lastClickTime = currentTime;
        }
    }

    return (
        <div className='mainHeroBanner'>
            <div className="layer"></div>
            <div className="layer2">
                <div className="data">
                    <h1 className='heroBannerHeadingText'>Building a House?</h1>
                    <h4 className='heroBannerSubHeadingText'>You'll get to personalize the details of your house when you're building a house from the ground up—from the layout</h4>
                    <div className="herobannerFlex">
                        <div className='inputemail'>
                            <InputEmail placeholder="Enter email address" onChange={(e) => setUserEmail(e.target.value)} value={userEmail} />
                        </div>
                        <div className="submitButton">
                            <SubmitButton isDisabled={isLoading} onClick={(e) => handleClick(e)} text={isLoading ? 'Loading...' : 'Submit'} />
                        </div>
                    </div>
                    <div className='imagelinks'>
                        <p>image from <a href="abc">freepik</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
