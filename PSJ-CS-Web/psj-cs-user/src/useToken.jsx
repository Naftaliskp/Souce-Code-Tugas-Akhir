import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        console.log('get token '+userToken)
        return userToken
    };
    
    const [token, setToken] = useState(getToken());

    const saveToken = response => {
        console.log('save token '+response.token)
        let data_user = response.data_user
        console.log('save id_penghuni '+data_user.Id_penghuni)
        sessionStorage.setItem('token', JSON.stringify(response.token));
        sessionStorage.setItem('Id_penghuni', JSON.stringify(data_user.Id_penghuni));
        sessionStorage.setItem('blok', JSON.stringify(data_user.blok));
        sessionStorage.setItem('cluster', JSON.stringify(data_user.cluster));
        sessionStorage.setItem('email', JSON.stringify(data_user.email));
        sessionStorage.setItem('nama', JSON.stringify(data_user.nama));
        sessionStorage.setItem('no', JSON.stringify(data_user.no));
        sessionStorage.setItem('tagihan', JSON.stringify(data_user.tagihan));
        setToken(response);
    };

    return {
        setToken: saveToken,
        token
    }
}