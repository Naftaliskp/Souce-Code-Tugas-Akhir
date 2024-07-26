import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Info from '../assets/png/info.png'

const url = 'http:'+(window.location.href).split(':')[1]+':5000'

function SectionInformation() {
    const [data, setData] = useState([]);

    useEffect(() => {
        dataInformasi();
    }, []);
    
    async function getData() {
        return fetch(url+'/api/informasi/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(data => data.json())
    }

    const dataInformasi = async () => {
        const response = await getData()
        // console.log(response.data)
        setData(response.data)
    }

    const handleCheckInfoRow = (id_informasi) => {
        navigate('/article?id='+id_informasi)
        // setData(data.filter(row => row.id !== id));
        // dataInformasi();
    };
    return (
        <section className='container my-5 p-3'>
            <h3 className='text-center text-dark fw-bold my-3'>Portal Informasi</h3>
                <Row className='d-flex col-12 col-md-10 mx-auto text-light justify-content-around flex-wrap'>
                {data.map(row => (
                    <Col xs='12' md='5' className='m-3 p-0'>
                        <div className='card-neu rounded-0 shadow-lg w-100'>
                        <div className="card-neu-details d-flex justify-content-between">
                                <div className='img-wrap col-2'>
                                    <img src={Info} className='img-fluid w-100' />
                                </div>
                                <div className="col-10">
                                    <h3 className='fw-semibold border-bottom border-3 border-danger'>{row.judul}</h3>
                                    <p className='text-card'>{row.isi.substr(0,200)} ...</p>
                                </div>
                            </div>
                            <Link to={'/article?id='+row.id} className="card-neu-button text-center text-light">Info Selengkapnya</Link>
                        </div>
                    </Col>
                ))}

                </Row>
        </section>
    )
}

export default SectionInformation
