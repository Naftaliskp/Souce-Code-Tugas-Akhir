import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

const url = 'http:'+(window.location.href).split(':')[1]+':5000'

function Informasi() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({ id: null, judul: '', tanggal: '', isi: '' });
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dataInformasi();
  }, []);

  useEffect(() => {
    // Initialize DataTable
    if (data.length > 0) {
      $('#informasiTable').DataTable();
    }
    // Cleanup on component unmount
    return () => {
      if ($.fn.dataTable.isDataTable('#informasiTable')) {
        $('#informasiTable').DataTable().destroy();
      }
    };
  }, [data]);

  async function getData() {
    return fetch(url+'/api/informasi/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json());
  }

  async function insertData(data) {
    return fetch(url+'/api/informasi/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

  async function deleteData(id) {
    return fetch(url+'/api/informasi/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id),
    }).then((data) => data.json());
  }

  const dataInformasi = async () => {
    const response = await getData();
    setData(response.data);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };

  const handleAddRow = async () => {
    const newData = {
      judul: currentRow.judul,
      isi: currentRow.isi,
    };
    const response = await insertData(newData);
    setCurrentRow({ id: null, judul: '', tanggal: '', isi: '' });
    handleClose();
    dataInformasi();
  };

  const handleDeleteRow = async (id_informasi) => {
    const response = await deleteData({ id_informasi });
    dataInformasi();
  };

  const handleCheckInfoRow = (id_informasi) => {
    navigate('/article?id=' + id_informasi);
  };

  return (
    <div className="container mt-3 mb-5">
      <Button variant="primary" onClick={handleShow}>
        Tambah Informasi
      </Button>
      <table id="informasiTable" className="table my-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Judul</th>
            <th>Tanggal</th>
            <th className="expand">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.judul}</td>
              <td>{new Date(row.tanggal).toDateString()}</td>
              <td>
                <Button variant="primary" onClick={() => handleCheckInfoRow(row.id)}>Lihat Detail</Button>
                <Button variant="danger" onClick={() => handleDeleteRow(row.id)}>Delete</Button>
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
            <Form.Group className="mb-3" controlId="formJudul">
              <Form.Label>Judul</Form.Label>
              <Form.Control
                type="text"
                name="judul"
                value={currentRow.judul}
                onChange={handleInputChange}
                placeholder="Enter judul"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formIsi">
              <Form.Label>Isi</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="isi"
                value={currentRow.isi}
                onChange={handleInputChange}
                placeholder="Enter isi"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={editing ? handleUpdateRow : handleAddRow}>
            {editing ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Informasi;

// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// function Informasi() {
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const [currentRow, setCurrentRow] = useState({ id: null, judul: '', tanggal: '', isi: '' });
//   const [editing, setEditing] = useState(false);
//   const navigate = useNavigate()

//   useEffect(() => {
//     dataInformasi();
//   }, []);

//   async function getData() {
//     return fetch('http://172.20.10.5:5000/api/informasi/', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(data => data.json())
//   }

//   async function insertData(data) {
//     return fetch('http://172.20.10.5:5000/api/informasi/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(data => data.json())
//   }

//   async function deleteData(id) {
//     return fetch('http://172.20.10.5:5000/api/informasi/', {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(id)
//     })
//     .then(data => data.json())
//   }

//   const dataInformasi = async () => {
//     const response = await getData()
//     // console.log(response.data)
//     setData(response.data)
//   }

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentRow({ ...currentRow, [name]: value });
//   };

//   const handleAddRow = async () => {
//     const data = {
//       judul: currentRow.judul,
//       isi: currentRow.isi,
//       // tanggal: datetime.datetime.now().strftime("%Y-%m-%d")
//     }
//     const response = await insertData(data)
//     console.log(response)
//     // setData([...data, { ...currentRow, id: data.length + 1 }]);
//     setCurrentRow({ id: null, judul: '', tanggal: '', isi: '' });
//     handleClose();
//     dataInformasi();
//   };


//   // const handleUpdateRow = () => {
//   //   setData(data.map(row => (row.id === currentRow.id ? currentRow : row)));
//   //   setCurrentRow({ id: null, judul: '', tanggal: '', isi: '' });
//   //   setEditing(false);
//   //   handleClose();
//   // };

//   const handleDeleteRow = async (id_informasi) => {
//     const response = await deleteData({id_informasi})
//     // setData(data.filter(row => row.id !== id));
//     dataInformasi();
//   };

//   const handleChechInfoRow = (id_informasi) => {
//     navigate('/article?id='+id_informasi)
//     // setData(data.filter(row => row.id !== id));
//     // dataInformasi();
//   };

//   return (
//     <div className="container mt-3 mb-5">
//       <Button variant="primary" onClick={handleShow}>Tambah Informasi</Button>
//       <table id="example" className="table my-3">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Judul</th>
//             <th>Tanggal</th>
//             <th className="expand">Actions</th>
//             {/* <th className="expand">Isi</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>{row.judul}</td>
//               <td>{new Date(row.tanggal).toDateString()}</td>
//               <td>
//                 <Button variant="primary" onClick={() => handleChechInfoRow(row.id)}>Lihat Detail</Button>
//                 <Button variant="danger" onClick={() => handleDeleteRow(row.id)}>Delete</Button>
//               </td>
//               {/* <td className="expand">{row.isi}</td> */}
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
//             <Form.Group className="mb-3" controlId="formJudul">
//               <Form.Label>Judul</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="judul"
//                 value={currentRow.judul}
//                 onChange={handleInputChange}
//                 placeholder="Enter judul"
//                 required
//               />
//             </Form.Group>
//             {/* <Form.Group className="mb-3" controlId="formTanggal">
//               <Form.Label>Tanggal</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="tanggal"
//                 value={currentRow.tanggal}
//                 onChange={handleInputChange}
//                 placeholder="Enter tanggal"
//                 required
//               />
//             </Form.Group> */}
//             <Form.Group className="mb-3" controlId="formIsi">
//               <Form.Label>Isi</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 rows={3}
//                 name="isi"
//                 value={currentRow.isi}
//                 onChange={handleInputChange}
//                 placeholder="Enter isi"
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


// export default Informasi;

// // import React from 'react'
// // import { Link } from 'react-router-dom';
// // import { Row, Col, Button } from 'react-bootstrap'
// // import Office from '../assets/png/office.png'

// // function BannerFeature() {
// //   return (
// //     <section className='container-fluid bg-danger bg-rain banner-feature py-3 mb-3'>
// //       <Row className='d-flex justify-content-center col-11 mx-auto py-3 f-wrap'>
// //             <Col xs='12' md='6'>
// //                 <h3 className='text-light fw-bold my-3'>Selamat datang di situs resmi Penghuni Cluster Puri Surya Jaya! </h3>
// //                 <h6 className='text-wrap text-light'> Kami hadir untuk memberikan kemudahan dan kenyamanan bagi seluruh penghuni melalui berbagai layanan digital yang dapat diakses dengan mudah. Di sini, Anda dapat: </h6>
// //                 <p className='text-wrap text-light'> Cek IPL (Iuran Pengelolaan Lingkungan)</p>
// //                 <p className='text-wrap text-light'> Form Pengaduan</p>
// //                 <p className='text-wrap text-light'> Chatbot Customer Service</p>
// //                 <h5 className='text-wrap text-light'>Mari bersama-sama menjadikan Cluster Puri Surya Jaya sebagai tempat tinggal yang nyaman dan harmonis.</h5>

// //                 <Link to='/cek' className='btn btn-primary btn-md col-10 col-sm-6 col-md-6 mt-4'>Cek IPL</Link>
// //             </Col>
// //             <Col xs='12' md='6'>
// //             <img className='rounded float-right' src={Office} />
// //             </Col>
// //         </Row>
// //     </section>
// //   )
// // }

// // export default BannerFeature
