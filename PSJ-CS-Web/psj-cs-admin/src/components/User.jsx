import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

const url = 'http:'+(window.location.href).split(':')[1]+':5000'

function User() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [currentRow, setCurrentRow] = useState({ Id: null, email: '', password: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    dataUser();
  }, []);

  useEffect(() => {
    // Initialize DataTable
    if (data.length > 0) {
      $('#userTable').DataTable();
    }
    // Cleanup on component unmount
    return () => {
      if ($.fn.dataTable.isDataTable('#userTable')) {
        $('#userTable').DataTable().destroy();
      }
    };
  }, [data]);

  async function getData() {
    return fetch(url+'/api/user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json());
  }

  const dataUser = async () => {
    const response = await getData();
    setData(response.data);
  };

  async function updatePwd(data) {
    return fetch(url+'/api/user/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((data) => data.json());
  }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

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
      id_user: currentRow.Id,
      pwd: currentRow.password,
    };
    const response = await updatePwd(data);
    console.log(response);
    setEditing(false);
    handleClose();
    dataUser();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      handleUpdateRow();
    }
  };

  return (
    <div className="container my-5">
      <table id="userTable" className="table mt-3 mb-5">
        <thead>
          <tr>
            <th>ID</th>
            <th className="expand">Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.Id}>
              <td>{row.Id}</td>
              <td className="expand">{row.email}</td>
              <td>{row.password}</td>
              <td>
                <Button variant="warning" onClick={() => handleEditRow(row)}>Edit</Button>
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
          <Form onSubmit={handleSubmit}>
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
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                name="password"
                value={currentRow.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" type="submit">
                {editing ? 'Update' : 'Add'}
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default User;

// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// function User() {
//   const [data, setData] = useState([]);
//   const [show, setShow] = useState(false);
//   const [currentRow, setCurrentRow] = useState({ Id: null, email: '', password: '' });
//   const [editing, setEditing] = useState(false);

//   useEffect(() => {
//     dataUser();
//   }, []);

//   async function getData() {
//     return fetch('http://172.20.10.5:5000/api/user/', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//       .then(data => data.json())
//   }

//   const dataUser = async () => {
//     const response = await getData()
//     // console.log(response.data)
//     setData(response.data)
//   }

//   async function updatePwd(data) {
//     return fetch('http://172.20.10.5:5000/api/user/', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(data)
//     })
//     .then(data => data.json())
//   }

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentRow({ ...currentRow, [name]: value });
//   };

//   // const handleAddRow = () => {
//   //   setData([...data, { ...currentRow, id: data.length + 1 }]);
//   //   setCurrentRow({ id: null, email: '', password: '' });
//   //   handleClose();
//   // };

//   const handleEditRow = (row) => {
//     setCurrentRow(row);
//     setEditing(true);
//     handleShow();
//   };

//   const handleUpdateRow = async () => {
//     const data = {
//       id_user: currentRow.Id,
//       pwd: currentRow.password
//     }
//     const response = await updatePwd(data)
//     console.log(response)
//     // setData(data.map(row => (row.id === currentRow.id ? currentRow : row)));
//     // setCurrentRow({ id: null, email: '', password: '' });
//     setEditing(false);
//     handleClose();
//     dataUser()
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (editing) {
//       handleUpdateRow();
//     }
//   };

//   return (
//     <div className="container my-5">
//       <table className="table mt-3 mb-5">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th className="expand">Email</th>
//             <th>Password</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map(row => (
//             <tr key={row.Id}>
//               <td>{row.Id}</td>
//               <td className="expand">{row.email}</td>
//               <td>{row.password}</td>
//               <td>
//                 <Button variant="warning" onClick={() => handleEditRow(row)}>Edit</Button>
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
//           <Form onSubmit={handleSubmit}>
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
//             <Form.Group className="mb-3" controlId="formPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="password"
//                 value={currentRow.password}
//                 onChange={handleInputChange}
//                 placeholder="Enter password"
//                 required
//               />
//             </Form.Group>
//             <Modal.Footer>
//               <Button variant="secondary" onClick={handleClose}>Close</Button>
//               <Button variant="primary" type="submit">
//                 {editing ? 'Update' : 'Add'}
//               </Button>
//             </Modal.Footer>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }

// export default User;
