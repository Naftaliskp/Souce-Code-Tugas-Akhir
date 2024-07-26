import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

const url = 'http:'+(window.location.href).split(':')[1]+':5000'

function Keluhan() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({ id: null, sender: '', alamat: '', keluhan: '', status: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    dataKeluhan();
  }, []);

  useEffect(() => {
    // Initialize DataTable
    if (data.length > 0) {
      $('#keluhanTable').DataTable();
    }
    // Cleanup on component unmount
    return () => {
      if ($.fn.dataTable.isDataTable('#keluhanTable')) {
        $('#keluhanTable').DataTable().destroy();
      }
    };
  }, [data]);

  async function getData() {
    return fetch(url+'/api/keluhan/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json());
  }

  async function updateStatus(data) {
    return fetch(url+'/api/keluhan/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

  const dataKeluhan = async () => {
    const response = await getData();
    setData(response.data);
  };

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setEditing(false);
    setCurrentRow({ id: null, sender: '', alamat: '', keluhan: '', status: 'pending' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentRow({ ...currentRow, [name]: value });
  };

  const handleEditRow = (row) => {
    setCurrentRow(row);
    setEditing(true);
    handleShow();
  };

  const handleUpdateRow = async () => {
    const data = {
      id_keluhan: currentRow.id,
      status: currentRow.status,
    };
    const response = await updateStatus(data);
    setEditing(false);
    handleClose();
    dataKeluhan();
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return { backgroundColor: 'yellow', color: 'black' };
      case 'Proses':
        return { backgroundColor: 'blue', color: 'white' };
      case 'Done':
        return { backgroundColor: 'green', color: 'white' };
      case 'Decline':
        return { backgroundColor: 'red', color: 'white' };
      default:
        return {};
    }
  };

  return (
    <div className="container mt-5">
      <table id="keluhanTable" className="table mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sender</th>
            <th>Alamat</th>
            <th className="expand">Keluhan</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.nama}</td>
              <td>{row.alamat}</td>
              <td className="expand">{row.keluhan}</td>
              <td style={getStatusStyle(row.status)}>{row.status}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditRow(row)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editing ? 'Edit Status' : 'Add Row'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {!editing && (
              <>
                <Form.Group className="mb-3" controlId="formSender">
                  <Form.Label>Sender</Form.Label>
                  <Form.Control
                    type="text"
                    name="sender"
                    value={currentRow.sender}
                    onChange={handleInputChange}
                    placeholder="Enter sender"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAlamat">
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type="text"
                    name="alamat"
                    value={currentRow.alamat}
                    onChange={handleInputChange}
                    placeholder="Enter alamat"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formKeluhan">
                  <Form.Label>Keluhan</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="keluhan"
                    value={currentRow.keluhan}
                    onChange={handleInputChange}
                    placeholder="Enter keluhan"
                    required
                  />
                </Form.Group>
              </>
            )}
            <Form.Group className="mb-3" controlId="formStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={currentRow.status}
                onChange={handleInputChange}
              >
                <option value="Pending">Pending</option>
                <option value="Proses">Proses</option>
                <option value="Done">Done</option>
                <option value="Decline">Decline</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateRow}>
            {editing ? 'Update' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Keluhan;

// import React, { useState, useEffect } from 'react';
// import { Table, Modal, Button, Form } from 'react-bootstrap';

// function Keluhan() {
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const [currentRow, setCurrentRow] = useState({ id: null, sender: '', alamat: '', keluhan: '', status: '' });
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     dataKeluhan();
//   }, []);

//   async function getData() {
//     return fetch('http://172.20.10.5:5000/api/keluhan/', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(data => data.json())
//   }

//   const dataKeluhan = async () => {
//     const response = await getData()
//     // console.log(response.data)
//     setData(response.data)
//   }

//   async function updateStatus(data) {
//     return fetch('http://172.20.10.5:5000/api/keluhan/', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(data => data.json())
//   }

//   const handleShow = () => setShow(true);
//   const handleClose = () => {
//     setShow(false);
//     setEditing(false);
//     setCurrentRow({ id: null, sender: '', alamat: '', keluhan: '', status: 'pending' });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentRow({ ...currentRow, [name]: value });
//   };

//   // const handleAddRow = () => {
//   //   setData([...data, { ...currentRow, id: data.length + 1 }]);
//   //   setCurrentRow({ id: null, sender: '', alamat: '', keluhan: '', status: 'pending' });
//   //   handleClose();
//   // };

//   const handleEditRow = (row) => {
//     setCurrentRow(row);
//     setEditing(true);
//     handleShow();
//   };

//   const handleUpdateRow = async () => {
//     const data = {
//       id_keluhan: currentRow.id,
//       status: currentRow.status
//     }
//     const response = await updateStatus(data)
//     console.log(response)
//     // setData(data.map(row => (row.id === currentRow.id ? { ...row, status: currentRow.status } : row)));
//     // setCurrentRow({ id: null, sender: '', alamat: '', keluhan: '', status: 'Pending' });
//     setEditing(false);
//     handleClose();
//     dataKeluhan()
//   };


//   const getStatusStyle = (status) => {
//     switch (status) {
//       case 'Pending':
//         return { backgroundColor: 'yellow', color: 'black' };
//       case 'Proses':
//         return { backgroundColor: 'blue', color: 'white' };
//       case 'Done':
//         return { backgroundColor: 'green', color: 'white' };
//       case 'Decline':
//         return { backgroundColor: 'red', color: 'white' };
//       default:
//         return {};
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <table className="table mt-3">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Sender</th>
//             <th>Alamat</th>
//             <th className="expand">Keluhan</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(row => (
//             <tr key={row.id}>
//               <td>{row.id}</td>
//               <td>{row.nama}</td>
//               <td>{row.alamat}</td>
//               <td className="expand">{row.keluhan}</td>
//               <td style={getStatusStyle(row.status)}>{row.status}</td>
//               <td>
//                 <Button variant="warning" onClick={() => handleEditRow(row)}>Edit</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{editing ? 'Edit Status' : 'Add Row'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             {!editing && (
//               <>
//                 <Form.Group className="mb-3" controlId="formSender">
//                   <Form.Label>Sender</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="sender"
//                     value={currentRow.sender}
//                     onChange={handleInputChange}
//                     placeholder="Enter sender"
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formAlamat">
//                   <Form.Label>Alamat</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="alamat"
//                     value={currentRow.alamat}
//                     onChange={handleInputChange}
//                     placeholder="Enter alamat"
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formKeluhan">
//                   <Form.Label>Keluhan</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={3}
//                     name="keluhan"
//                     value={currentRow.keluhan}
//                     onChange={handleInputChange}
//                     placeholder="Enter keluhan"
//                     required
//                   />
//                 </Form.Group>
//               </>
//             )}
//             <Form.Group className="mb-3" controlId="formStatus">
//               <Form.Label>Status</Form.Label>
//               <Form.Control
//                 as="select"
//                 name="status"
//                 value={currentRow.status}
//                 onChange={handleInputChange}
//               >
//                 <option value="Pending">Pending</option>
//                 <option value="Proses">Proses</option>
//                 <option value="Done">Done</option>
//                 <option value="Decline">Decline</option>
//               </Form.Control>
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>Close</Button>
//           <Button variant="primary" onClick={handleUpdateRow}>
//             {editing ? 'Update' : 'Add'}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default Keluhan;
