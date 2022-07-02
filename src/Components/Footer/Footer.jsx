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
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                    <i class="fab fa-twitter"></i>
                </a>
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                    <i class="fab fa-google"></i>
                </a>
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                    <i class="fab fa-instagram"></i>
                </a>
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                    <i class="fab fa-github"></i>
                </a>
            </section>

            <section className='newsletter'>
                <form action=''>
                    <div className='row d-flex justify-content-center'>
                        <div className=''>
                            <p className=''>
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>
                        <div >
                            <input type="text" className="text" />
                            <i className="">Email Address</i>
                        </div>
                    </div>
                </form>
            </section>

            <section className='mb-4'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                sequi voluptate quas.
            </p>
            </section>

            <section className=''>
            <MDBRow>
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
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
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
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
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
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
                </MDBCol>

                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                <h5 className='text-uppercase'>Links</h5>

                <ul className='list-unstyled mb-0'>
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
                </MDBCol>
            </MDBRow>
            </section>
        </div>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2020 Copyright:
            <a className='text-white' href='https://mdbootstrap.com/'>
            MDBootstrap.com
            </a>
        </div>
        </div>

    
  );
}