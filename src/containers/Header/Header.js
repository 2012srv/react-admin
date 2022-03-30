import React, { useContext, useState } from "react";

import classes from './Header.module.css';
import { axiosAuth } from '../../hoc/withErrorHandler';

import * as api from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = (props) => {
    const { dispatch } = useContext(AuthContext);
    const [modalshow, setModalShow] = useState(false);

    const assignedClasses = [classes.Header];
    if (props.collapsed) {
        assignedClasses.push(classes.Collapsed);
    }

    const doLogout = () => {
        setModalShow(true);
    }

    console.log('header');
    return (
        <>
            <Modal show={modalshow} onHide={() => setModalShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Logout!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to logout now?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => api.logOff(dispatch, axiosAuth)}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={() => setModalShow(false)}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
            <header className={assignedClasses.join(' ')} >
                header
                <button onClick={doLogout}>Logout</button>
            </header>
        </>
    )
}

export default Header;

