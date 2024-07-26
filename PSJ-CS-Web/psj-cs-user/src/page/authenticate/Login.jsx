import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getSession } from '../../redux/action/userSession'
import { Container, Row, Card, Col, Form, Button } from 'react-bootstrap'
import Logo from '../../assets/image/psj-logo.png'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import PropTypes from 'prop-types';
import useToken from '../../useToken'
// import { BASE_URL } from '../../env/env'

const url = 'http:'+(window.location.href).split(':')[1]+':5000'

async function loginUser(credentials) {
    return fetch(url+'/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(false);
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const { token, setToken } = useToken();
    
    if(token) {
        navigate('/');
    }

    useEffect( () => {
        window.scrollTo(0, 0);
    },[] )

    const handleLogin = async e => {
        e.preventDefault();
        const response = await loginUser({
            email,
            pwd: password
        });
        if (response.token) {
            setToken(response);
        } else {
            navigate('/login')
        }
        
    }

  return (
    <>
        <Container fluid className='authenticate py-5' >
                <Row>
                    <Card className='col-12 col-sm-10 mx-auto rounded shadow-lg' >
                        <Row className='d-flex justify-content-start'>
                            <Col xs={10} md={5} className='p-3 mx-auto'>
                                <div className='text-center my-3'>
                                    <img src={Logo} width='150' />
                                    <h1 className='fw-bolder text-dark mt-2'>LOGIN</h1>
                                </div>
                                <Form onSubmit={ handleLogin } >
                                    <Form.Group className='mb-5'>
                                        <div className='group'>
                                            <input required type='email' onChange={ e => setEmail(e.target.value) } className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Email</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-4'>
                                        <div className='group'>
                                            <input required type='password' onChange={ e => setPassword(e.target.value) } className='input w-100' />
                                            <span className='highlight'></span>
                                            <span className='bar w-100'></span>
                                            <label className='label-input'>Password</label>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mb-5'>
                                        <Link>
                                        <p className='text-danger'>Lupa Password?</p>
                                        </Link>
                                        <Button variant='danger' type='submit' className='w-100 mb-2'>Log in</Button>
                                        {/* <Link to='/' className='btn btn-danger w-100 mb-2'>Sign-in</Link> */}
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Row>
        </Container>

    </>
)
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login