import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from '../../components/loader/Loading';
import SectionPengaduan from '../../components/SectionPengaduan';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import useToken from '../../useToken';

const MySwal = withReactContent(Swal);

function Pengaduanpage() {
    const navigate = useNavigate();
    const { session } = useSelector(state => state.userSession);
    const [isLoading, setIsLoading] = useState(true);

    const { token, setToken } = useToken();

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
        setIsLoading(false);
    }, 1500);

    if (!token) {
      MySwal.fire({
          icon: 'warning',
          title: 'Maaf, untuk dapat lanjut anda harus login terlebih dahulu!',
          showConfirmButton: true,
          didClose: () => {
              navigate('/login');
          }
      });
    }
}, [token, navigate]);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <SectionPengaduan />
                </>
            )}
        </>
    );
}

export default Pengaduanpage;
