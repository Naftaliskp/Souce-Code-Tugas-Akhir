import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import Penghuni from '../../components/Penghuni'
import Loading from '../../components/loader/Loading'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import useToken from '../../useToken';

const MySwal = withReactContent(Swal);

function Dashboard() {
  const navigate = useNavigate();
  // const { session } = useSelector(state => state.userSession);
  const [isLoading, setIsLoading] = useState(true);
  const { token, setToken } = useToken()

    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        if (!token || token !== "T0k3N4dm00n") {
          MySwal.fire({
              icon: 'warning',
              title: 'Maaf, untuk dapat lanjut anda harus login dan memiliki akses admin terlebih dahulu!',
              showConfirmButton: true,
              didClose: () => {
                  navigate('/login');
              }
          });
      }
    }, [token, navigate]);
  return (
    <>
        { isLoading ? (
          <Loading/>
        ): (
          <>
            {/* <Penghuni/> */}
            Dashboard
            <h3>Anda telah berhasil login sebagai Admin</h3>
          </>
        ) }
    </>
  )
}
export default Dashboard