import React, { useState, useEffect, useContext, useMemo } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { AuthContext } from '../context/authContext/AuthContext';
import { logOut } from "../context/authContext/AuthActions";

import axios from 'axios';

export const axiosBase = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const axiosAuth = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

let isAlreadyFetchingAccessToken = false;
let subscribers = [];

axiosAuth.interceptors.request.use(req => {
    const accessToken = localStorage.getItem('token');
    req.headers.token = 'Bearer ' + accessToken;
    return req;
});
axiosAuth.interceptors.response.use(response => {
    return response;
}, (error) => {
    // console.log(1);
    const { config, response: { status } } = error;
    const originalRequest = config;

    if (status === 401) {
        if (!isAlreadyFetchingAccessToken) {
            const refreshToken = localStorage.getItem('refreshToken');
            isAlreadyFetchingAccessToken = true;
            axios.post(process.env.REACT_APP_BASE_URL + "auth/refresh", { token: refreshToken }).then((res) => {
                isAlreadyFetchingAccessToken = false;
                localStorage.setItem('token', res.data.accessToken);
                onAccessTokenFetched(res.data.accessToken);
            });
        }
        const retryOriginalRequest = new Promise((resolve) => {
            addSubscriber(token => {
                originalRequest.headers.token = 'Bearer ' + token;
                resolve(axiosAuth(originalRequest));
            })
        })
        return retryOriginalRequest
    }
    return Promise.reject(error)
});

function onAccessTokenFetched(token) {
    subscribers = subscribers.filter(callback => callback(token))
}
function addSubscriber(callback) {
    subscribers.push(callback)
}


// HOC
export const withErrorHandler = (WrappedComponent) => {
    return props => {
        const [error, setError] = useState(null);
        const { dispatch, user } = useContext(AuthContext);

        const resInterceptor = axiosAuth.interceptors.response.use(
            res => {
                return res;
            },
            error => {
                // console.log(2);
                const errorData = error.response ? error.response.data : error;
                setError(errorData);
                return Promise.reject(errorData);
            }
        );

        useEffect(() => {
            return () => {
                axiosAuth.interceptors.response.eject(resInterceptor);
            };
        }, [resInterceptor]);

        const errorConfirmedHandler = () => {
            setError(null);
            if (error.status === 403) {
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                dispatch(logOut());
            }
        };

        return (
            <>
                <Modal show={!!error && !!user} onHide={errorConfirmedHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Error!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{error ? error.msg : null}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={errorConfirmedHandler}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
                {useMemo(() => <WrappedComponent {...props} />, [props])}
            </>
        );
    };
};
