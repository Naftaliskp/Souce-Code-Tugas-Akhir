import React from 'react'
import { Row } from 'react-bootstrap'
import { FaCopyright } from 'react-icons/fa'
import './Footer.css' // Import the custom CSS file

function Footer() {
  return (
    <footer className='footer mt-auto py-3 bg-transparant-dark'>
        <Row className='container-fluid text-light'>
            <p className='text-light text-center w-100 mb-0'>
              Copyright <FaCopyright /> PT JAYALAND | All Right Reserved
            </p>
        </Row>
    </footer>
  )
}

export default Footer