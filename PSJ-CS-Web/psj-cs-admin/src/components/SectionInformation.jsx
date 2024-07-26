import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Info from '../assets/png/info.png'

function SectionInformation() {
  return (
    <section className='container my-5 p-3'>
        <h3 className='text-center text-dark fw-bold my-3'>Portal Informasi</h3>
            <Row className='d-flex col-12 col-md-10 mx-auto text-light justify-content-around flex-wrap'>
            <Col xs='12' md='5' className='m-3 p-0'>
                <div className='card-neu rounded-0 shadow-lg w-100'>
                <div className="card-neu-details d-flex justify-content-between">
                        <div className='img-wrap col-2'>
                            <img src={Info} className='img-fluid w-100' />
                        </div>
                        <div className="col-10">
                            <h3 className='fw-semibold border-bottom border-3 border-danger'>Info 1</h3>
                            <p className='text-card'>Lorem Ipsum</p>
                        </div>
                    </div>
                    <Link to='/article' className="card-neu-button text-center text-light">Info Selengkapnya</Link>
                </div>
            </Col>
            <Col xs='12' md='5' className='m-3 p-0'>
                <div className='card-neu rounded-0 shadow-lg w-100'>
                <div className="card-neu-details d-flex justify-content-between">
                        <div className='img-wrap col-2'>
                            <img src={Info} className='img-fluid w-100' />
                        </div>
                        <div className="col-10">
                            <h3 className='fw-semibold border-bottom border-3 border-danger'>Info 2</h3>
                            <p className='text-card'>Lorem Ipsum.</p>
                        </div>
                    </div>
                    <Link to='/article' className="card-neu-button text-center text-light">Info Selengkapnya</Link>
                </div>
            </Col>
   
            </Row>
    </section>
  )
}

export default SectionInformation
