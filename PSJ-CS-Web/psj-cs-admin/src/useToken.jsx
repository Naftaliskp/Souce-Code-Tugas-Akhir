import { useState } from 'react';

export default function useToken() {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        console.log('get token '+userToken)
        return userToken
    };
    
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        console.log('save token '+userToken)
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken);
    };

    return {
        setToken: saveToken,
        token
    }
}