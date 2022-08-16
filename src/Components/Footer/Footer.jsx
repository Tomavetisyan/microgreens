import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Footer.css'

export default function App() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <section className='icons'>
                <a className='btn btn-outline-light btn-floating m-1' href='https://m.facebook.com/microgreeny2022/' role='button'>
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                    <i className="fab fa-twitter"></i>
                </a>
                <a className='btn btn-outline-light btn-floating m-1' href='https://www.instagram.com/microgreeny2022/?hl=en' role='button'>
                    <i className="fab fa-instagram"></i>
                </a>
                <a className='btn btn-outline-light btn-floating m-1' href='https://www.tiktok.com/@microgreenygirl?lang=en' role='button'>
                    <i className="fa-brands fa-tiktok"></i>
                </a>
            </section>

            <section className='newsletter'>
                <form action=''>
                    <div className=''>
                        <div className=''>
                            <p className=''>
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>
                        <div >
                            <input type="text" className="text" placeholder='Email Address'/>
                            <input type="submit" value="Submit"></input>
                        </div>
                    </div>
                </form>
            </section>

            <section className='mb-4'>
                <p>
                    Insert text here
                </p>
            </section>

            <section className='links'>
                <div className='links-container'>
                    <div >
                        <h5 className='text-uppercase'>Links</h5>

                        <ul className=''>
                            <li>
                                <a href='#!' className='text-white'>
                                    Link 1
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Link 2
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Link 3
                                </a>
                            </li>
                            <li>
                                <a href='#!' className='text-white'>
                                    Link 4
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

        <div className='copyright' style={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}>
            <a className='text-white' href=''>
                © Microgreeny 2021. All rights reserved.
            </a>
        </div>
        </div>

    
  );
}