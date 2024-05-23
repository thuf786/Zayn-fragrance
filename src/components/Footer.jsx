import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function Footer() {
  return (
    <>
            <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5 mt-5'>
                <div style={{ width: "400px" }}>
                    <h4 style={{ fontFamily: "-moz-initial" }}>
                    <i class="fa-brands fa-squarespace me-3"></i>Our Promise</h4>
                    <h6>We make emotive, uncomplicated fragrances designed to make you feel good.
Discover a unique range of bath, body, & skincare essentials with captivating fragrances at Bella Vita Luxury - a luxury lifestyle personal care brand that celebrates responsible luxury & thoughtful skincare.</h6>
                </div>
                <div>
                    <h4 style={{ fontFamily: "Times-New-Roman" }}>Links</h4>
                    <Link to={'/'} style={{ textDecoration: 'none' }}><h6>Home</h6></Link>
                    <Link to={'/login'} style={{ textDecoration: 'none' }}><h6>Login</h6></Link>
                    <Link to={'/register'} style={{ textDecoration: 'none' }}><h6>Register</h6></Link>
                </div>
                <div>
                    <h4 style={{ fontFamily: "Times-New-Roman" }}>Support</h4>
                    <h6>Privacy Policy</h6>
                    <h6>Refund & Return Policy</h6>
                    <h6>Terms & Conditions</h6>
                </div>
                <div>
                    <h4 style={{ fontFamily: "Times-New-Roman" }}>Sign Up</h4>
                    <div className='d-flex'>
                        <input type="text" placeholder='Enter Your Email' className='form-control' />
                        <Button variant="warning ms-2">Submit</Button>{' '}
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly fs-4 mt-3'>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <p>&copy; Copyright 2024.Select Your  Fragrance Co.</p>
            </div>
        </>
  )
}

export default Footer