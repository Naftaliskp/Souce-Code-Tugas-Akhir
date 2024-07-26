import React, { useState, useEffect } from 'react'
import { Col, Row, Form, FloatingLabel } from 'react-bootstrap'
import Contact from '../assets/png/conyact.png'

const url = 'http:'+(window.location.href).split(':')[1]+':5000'

function SectionPengaduan() {
  const [currentRow, setCurrentRow] = useState({ alamat_keluhan: '', keluhan: '' });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };

  async function insertData(data) {
    return fetch(url+'/api/keluhan/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

  const handleAddRow = async (e) => {
    e.preventDefault();
    const data = {
      id_sender: parseInt(sessionStorage.getItem("Id_penghuni")),
      alamat: currentRow.alamat_keluhan,
      keluhan: currentRow.keluhan
    }
    const response = await insertData(data)
    console.log(response);
    if(response.data_inserted == 1) {
      alert('keluhan berhasil dikirim')
    } else {
      alert('keluhan gagal dikirim')
    }
    setCurrentRow({ alamat_keluhan: '', keluhan: '' });
  };

  return (
    <section className='container-fluid bg-danger mt-0 py-5'>
        <Row className='d-flex justify-content-around f-wrap'>
            <Col xs='10' md='5' className='p-3'>
                <h3 className='fw-bold text-light text-center'>Form Pengaduan</h3>
                <h5 className='fw-bold text-light text-center mb-5'>Ajukan keluhan anda kepada kami mengenai pengelolaan cluster kapanpun</h5>
                <Form>
                    <Form.Group className='mb-3'>
                    <Form.Label className='text-light fw-semibold mt-3'>
                        <h6>Alamat Adanya Keluhan</h6>
                    </Form.Label>
                        <Form.Control 
                            type='text' 
                            name="alamat_keluhan"
                            value={currentRow.alamat_keluhan}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                    <Form.Label className='text-light fw-semibold'>
                        <h6>Pesan</h6>
                    </Form.Label>
                            <Form.Control
                            as="textarea"
                            name="keluhan"
                            value={currentRow.keluhan}
                            onChange={handleInputChange}
                            required
                            style={{ height: '100px' }}/>
                    </Form.Group>
                    <Form.Group>
                    <button className='contact' onClick={handleAddRow}>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                            </div>
                        </div>
                        <span>Ajukan</span>
                    </button>
                    </Form.Group>
                </Form>
            </Col>
            <Col xs='8' md='5' className='p-3'>
                <img src={Contact} className='img-fluid' />
            </Col>
        </Row>
    </section>
  )
}

export default SectionPengaduan
