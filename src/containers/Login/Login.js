import React, { useContext, useEffect } from 'react';

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

import { axiosAuth } from '../../hoc/withErrorHandler';
import * as api from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';

// import withErrorHandler from '../../hoc/withErrorHandler';

const Login = (props) => {
    const { dispatch, error, isFetching } = useContext(AuthContext);
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
        // terms: yup.bool().required().oneOf([true], "term must be accepted"),
    });
    useEffect(() => {

    }, []);

    console.log('login');
    // const handleSubmit = ()

    return (
        <div className="login-wrapper p-4 rounded-3">
            <Formik
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    api.login(values, dispatch, axiosAuth);
                    // setTimeout(() => {
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    // }, 4000);
                }}
                initialValues={{
                    email: "2012srv@gmail.com",
                    password: "2012srv",
                    terms: false,
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group md="" controlId="validationFormik01">
                            <Form.Label className='mb-1'>Email address</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Registered email address"
                                    value={values.email}
                                    onChange={(e) => handleChange(e)}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={!!errors.email}
                                />
                            </InputGroup>
                            {/* <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group controlId="validationFormik02" className="pt-2">
                            <Form.Label className='mb-1'>Password</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                    isValid={touched.password && !errors.password}
                                />
                            </InputGroup>
                            {/* <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback> */}
                        </Form.Group>
                        {/* <Form.Group className="pt-2">
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                id="validationFormik0"
                            />
                        </Form.Group> */}
                        {error && <p>gfdgfdg</p>}
                        <Button size="lg" type="submit" disabled={isFetching} className="mt-3">Login</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login;