import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getCookie } from '../cookie/cookie'
import cookieCutter from 'cookie-cutter'
import { clearSession, getSession, } from '../redux/action/userSession'
import { Nav, Navbar, NavDropdown, Container,  Form, Button } from 'react-bootstrap'
import Logo from '../assets/image/psj-logo.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { FaSignInAlt, FaPenAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'

const MySwal = withReactContent(Swal)

const linkStyle = { color: '#dc3545', fontWeight: 'bold', borderBottom: '3px solid #dc3545', backgroundColor: '#FFFFFF' }
function Navigation() {

// const { token, setToken } = useToken();

 const navigate = useNavigate()
 const dispatch = useDispatch();
 const {session} = useSelector( state => state.userSession );

  const logout = () => {
    MySwal.fire({
      title: 'Yakin ingin keluar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, keluar!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(clearSession(getCookie('token')));
        cookieCutter.set("token","",{ expires: new Date(0) });
        MySwal.fire({
          icon: 'success',
          title: 'Berhasil Logout!'
        }
        )
        navigate('/login');
      }
    })

}


  return (
    <Navbar collapseOnSelect expand="md" variant="light" className='bg-light border-bottom border-5 shadow-md border-danger py-3 position-sticky top-0' style={{ zIndex: '9' }}>
    <Container>
      <NavLink to='/'>
            <img src={Logo} width='100px' />
      </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="d-flex w-100 align-items-center justify-content-end">
              <NavLink to="/" style={({isActive}) => (isActive ? linkStyle : undefined)} className='nav-item text-danger mb-1 mx-3' >  Beranda </NavLink>

              <NavLink to="/FormPengaduan" style={({isActive}) => (isActive ? linkStyle : undefined)} className='nav-item text-danger mb-1 mx-3' > Form Pengaduan  </NavLink>
                {/* <NavLink className='nav-item text-dark p-2 me-3' to="#pricing">Profile</NavLink> */}
                { !session ? (
                <NavLink to='/login' className='btn btn-danger' ><FaSignInAlt className='me-2'/>Login</NavLink>
                ): (
                <Nav.Link onClick={ () => logout() } className='btn btn-danger text-light'><FaSignOutAlt className='me-2 '/>Logout</Nav.Link>
                ) }
                
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Navigation