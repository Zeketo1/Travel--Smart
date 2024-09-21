import React from 'react';
import '../../../styles/contact/contantBanner.css';
import question from "../../../assets/banner/question.png";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from "react-icons/md";


const ContactBanner = () => {
    return (
        <div>
            {/* Banner Section */}
            <div className='banner'>
                <div className='txCon'>
                    <p className='txlg'>Have Questions or Need Help? <br /> Get in Touch!</p>
                    <div className='inputContainer'>
                        <input type="text" placeholder="Name" className='inputField' />
                        <input type="email" placeholder="Email" className='inputField' />
                        <textarea placeholder="Question or Comment" className='inputField'></textarea>
                        <button className='sendButton'>Send Us a Message</button>
                    </div>
                </div>
                <img src={question} alt="Question" className='quesimg' />
            </div>

            {/* Contact Info Section */}
            <div className='contactSection'>
                <div className='contactInfo'>

                    <div className='infoBox'>
                        <div className='iconBox'>
                            <FiPhone style={{ color: "#00A7E1", fontSize: "50px" }} />
                        </div>
                        <p>Phone Number</p>
                        <p className='txInfo'>+123 242 144 8098</p>

                    </div>

                    <div className='infoBox'>
                        <div className='iconBox'>
                            <MdOutlineEmail style={{ color: "#00A7E1", fontSize: "50px" }} />
                        </div>
                        <p>Email Address</p>
                        <p className='txInfo'>info@travelsmart.com</p>
                    </div>

                    <div className='infoBox'>
                        <div className='iconBox'>
                            <HiOutlineLocationMarker style={{ color: "#00A7E1", fontSize: "50px" }}/>
                        </div>
                        <p>Location</p>
                        <p className='txInfo'>4517 Washington Ave. <br /> Manchester,
                        Kentucky 39495</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactBanner;
