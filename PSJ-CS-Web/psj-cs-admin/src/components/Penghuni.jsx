import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

const url = 'http:'+(window.location.href).split(':')[1]+':5000'

function Penghuni() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({ id: null, email: '', nama: '', cluster: '', blok: '', no: '', tagihan: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    dataPenghuni();
  }, []);

  useEffect(() => {
    // Initialize DataTable
    if (data.length > 0) {
      $('#penghuniTable').DataTable();
    }
    // Cleanup on component unmount
    return () => {
      if ($.fn.dataTable.isDataTable('#penghuniTable')) {
        $('#penghuniTable').DataTable().destroy();
      }
    };
  }, [data]);

  async function getData() {
    return fetch(url+'/api/penghuni/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json());
  }

  const dataPenghuni = async () => {
    const response = await getData();
    setData(response.data);
  };

  async function updateData(data) {
    return fetch(url+'/api/penghuni/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(data => data.json());
  }

  async function insertData(data) {
    return fetch(url+'/api/penghuni/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(data => data.json());
  }

  async function deleteData(id) {
    return fetch(url+'/api/penghuni/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
    .then(data => data.json());
  }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };

  const handleAddRow = async () => {
    const data = {
      id_penghuni: currentRow.Id_penghuni,
      email: currentRow.email,
      nama: currentRow.nama,
      cluster: currentRow.cluster,
      blok: currentRow.blok,
      no_rumah: currentRow.no,
      tagihan_ipl: currentRow.tagihan
    };
    const response = await insertData(data);
    console.log(response);
    setCurrentRow({ id: null, email: '', nama: '', cluster: '', blok: '', no: '', tagihan: '' });
    handleClose();
    dataPenghuni();
  };

  const handleEditRow = (row) => {
    setCurrentRow(row);
    setEditing(true);
    handleShow();
  };

  const handleUpdateRow = async () => {
    const data = {
      id_penghuni: currentRow.Id_penghuni,
      email: currentRow.email,
      nama: currentRow.nama,
      cluster: currentRow.cluster,
      blok: currentRow.blok,
      no_rumah: currentRow.no,
      tagihan_ipl: currentRow.tagihan
    };
    const response = await updateData(data);
    console.log(response);
    setEditing(false);
    handleClose();
    dataPenghuni();
  };

  const handleDeleteRow = async (id_penghuni) => {
    const response = await deleteData({ id_penghuni });
    dataPenghuni();
  };

  return (
    <div className="container my-5">
      <Button variant="primary" onClick={handleShow}>Tambah Data Penghuni</Button>
      <table id="penghuniTable" className="table mt-3 mb-5">
        <thead>
          <tr>
            <th>ID</th>
            <th className="expand">Email</th>
            <th className="expand">Nama</th>
            <th>Cluster</th>
            <th>Blok</th>
            <th>No Rumah</th>
            <th>Tagihan IPL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.Id_penghuni}>
              <td>{row.Id_penghuni}</td>
              <td>{row.email}</td>
              <td className="expand">{row.nama}</td>
              <td>{row.cluster}</td>
              <td>{row.blok}</td>
              <td>{row.no}</td>
              <td>{row.tagihan}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditRow(row)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDeleteRow(row.Id_penghuni)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? 'Edit Row' : 'Add Row'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={currentRow.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formNama">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={currentRow.nama}
                onChange={handleInputChange}
                placeholder="Enter nama"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCluster">
              <Form.Label>Cluster</Form.Label>
              <Form.Control
                type="text"
                name="cluster"
                value={currentRow.cluster}
                onChange={handleInputChange}
                placeholder="Enter cluster"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBlok">
              <Form.Label>Blok</Form.Label>
              <Form.Control
                type="text"
                name="blok"
                value={currentRow.blok}
                onChange={handleInputChange}
                placeholder="Enter blok"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formno">
              <Form.Label>No Rumah</Form.Label>
              <Form.Control
                type="text"
                name="no"
                value={currentRow.no}
                onChange={handleInputChange}
                placeholder="Enter no rumah"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formtagihan">
              <Form.Label>Tagihan IPL</Form.Label>
              <Form.Control
                type="number"
                name="tagihan"
                value={currentRow.tagihan}
                onChange={handleInputChange}
                placeholder="Enter tagihan IPL"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={editing ? handleUpdateRow : handleAddRow}>
            {editing ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Penghuni;

// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// function Penghuni() {
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const [currentRow, setCurrentRow] = useState({ id: null, email: '', nama: '', cluster: '', blok: '', no: '', tagihan: '' });
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     dataPenghuni();
//   }, []);

//   async function getData() {
//     return fetch('http://172.20.10.5:5000/api/penghuni/', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(data => data.json())
//   }

//   const dataPenghuni = async () => {
//     const response = await getData()
//     // console.log(response.data)
//     setData(response.data)
//   }

//   async function updateData(data) {
//     return fetch('http://172.20.10.5:5000/api/penghuni/', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(data => data.json())
//   }

//   async function insertData(data) {
//     return fetch('http://172.20.10.5:5000/api/penghuni/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(data => data.json())
//   }

//   async function deleteData(id) {
//     return fetch('http://172.20.10.5:5000/api/penghuni/', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(id)
//     })
//     .then(data => data.json())
//   }

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentRow({ ...currentRow, [name]: value });
//   };

//   const handleAddRow = async () => {
//     const data = {
//       id_penghuni: currentRow.Id_penghuni,
//       email: currentRow.email,
//       nama: currentRow.nama,
//       cluster: currentRow.cluster,
//       blok: currentRow.blok,
//       no_rumah: currentRow.no,
//       tagihan_ipl: currentRow.tagihan
//     }
//     const response = await insertData(data)
//     console.log(response)
//     // setData([...data, { ...currentRow, id: data.length + 1 }]);
//     setCurrentRow({ id: null, email: '', nama: '', cluster: '', blok: '', no: '', tagihan: '' });
//     handleClose();
//     dataPenghuni()
//   };

//   const handleEditRow = (row) => {
//     setCurrentRow(row);
//     setEditing(true);
//     handleShow();
//   };

//   const handleUpdateRow = async () => {
//     const data = {
//       id_penghuni: currentRow.Id_penghuni,
//       email: currentRow.email,
//       nama: currentRow.nama,
//       cluster: currentRow.cluster,
//       blok: currentRow.blok,
//       no_rumah: currentRow.no,
//       tagihan_ipl: currentRow.tagihan
//     }
//     const response = await updateData(data)
//     console.log(response)
//     // setData(data.map(row => (row.id === currentRow.id ? currentRow : row)));
//     // setCurrentRow({ id: null, email: '', nama: '', cluster: '', blok: '', no: '', tagihan: '' });
//     setEditing(false);
//     handleClose();
//     dataPenghuni();
//   };

//   const handleDeleteRow = async (id_penghuni) => {
//     const response = await deleteData({id_penghuni})
//     // setData(data.filter(row => row.id !== id));
//     dataPenghuni();
//   };

//   return (
//     <div className="container my-5">
//       <Button variant="primary" onClick={handleShow}>Tambah Data Penghuni</Button>
//       <table className="table mt-3 mb-5">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th className="expand">Email</th>
//             <th className="expand">Nama</th>
//             <th>Cluster</th>
//             <th>Blok</th>
//             <th>No Rumah</th>
//             <th>Tagihan IPL</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(row => (
//             <tr key={row.Id_penghuni}>
//               <td>{row.Id_penghuni}</td>
//               <td>{row.email}</td>
//               <td className="expand">{row.nama}</td>
//               <td>{row.cluster}</td>
//               <td>{row.blok}</td>
//               <td>{row.no}</td>
//               <td>{row.tagihan}</td>
//               <td>
//                 <Button variant="warning" onClick={() => handleEditRow(row)}>Edit</Button>
//                 <Button variant="danger" onClick={() => handleDeleteRow(row.Id_penghuni)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{editing ? 'Edit Row' : 'Add Row'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group className="mb-3" controlId="formEmail">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 value={currentRow.email}
//                 onChange={handleInputChange}
//                 placeholder="Enter email"
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formNama">
//               <Form.Label>Nama</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="nama"
//                 value={currentRow.nama}
//                 onChange={handleInputChange}
//                 placeholder="Enter nama"
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formCluster">
//               <Form.Label>Cluster</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="cluster"
//                 value={currentRow.cluster}
//                 onChange={handleInputChange}
//                 placeholder="Enter cluster"
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formBlok">
//               <Form.Label>Blok</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="blok"
//                 value={currentRow.blok}
//                 onChange={handleInputChange}
//                 placeholder="Enter blok"
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formno">
//               <Form.Label>No Rumah</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="no"
//                 value={currentRow.no}
//                 onChange={handleInputChange}
//                 placeholder="Enter no rumah"
//                 required
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="formtagihan">
//               <Form.Label>Tagihan IPL</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="tagihan"
//                 value={currentRow.tagihan}
//                 onChange={handleInputChange}
//                 placeholder="Enter tagihan IPL"
//                 required
//               />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//           <Button variant="primary" onClick={editing ? handleUpdateRow : handleAddRow}>
//             {editing ? 'Update' : 'Add'}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Penghuni;

// import React from 'react'
// import { Link } from 'react-router-dom';
// import { Row, Col, Button } from 'react-bootstrap'
// import Office from '../assets/png/office.png'

// function BannerFeature() {
//   return (
//     <section className='container-fluid bg-danger bg-rain banner-feature py-3 mb-3'>
//       <Row className='d-flex justify-content-center col-11 mx-auto py-3 f-wrap'>
//             <Col xs='12' md='6'>
//                 <h3 className='text-light fw-bold my-3'>Selamat datang di situs resmi Penghuni Cluster Puri Surya Jaya! </h3>
//                 <h6 className='text-wrap text-light'> Kami hadir untuk memberikan kemudahan dan kenyamanan bagi seluruh penghuni melalui berbagai layanan digital yang dapat diakses dengan mudah. Di sini, Anda dapat: </h6>
//                 <p className='text-wrap text-light'> Cek IPL (Iuran Pengelolaan Lingkungan)</p>
//                 <p className='text-wrap text-light'> Form Pengaduan</p>
//                 <p className='text-wrap text-light'> Chatbot Customer Service</p>
//                 <h5 className='text-wrap text-light'>Mari bersama-sama menjadikan Cluster Puri Surya Jaya sebagai tempat tinggal yang nyaman dan harmonis.</h5>

//                 <Link to='/cek' className='btn btn-primary btn-md col-10 col-sm-6 col-md-6 mt-4'>Cek IPL</Link>
//             </Col>
//             <Col xs='12' md='6'>
//             <img className='rounded float-right' src={Office} />
//             </Col>
//         </Row>
//     </section>
//   )
// }

// export default BannerFeature
