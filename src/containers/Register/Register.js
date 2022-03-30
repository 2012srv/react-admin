import React, { useEffect } from 'react';

import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as yup from 'yup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

import { axiosAuth } from '../../hoc/withErrorHandler';

const Register = () => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        terms: yup.bool().required().oneOf([true], "term must be accepted"),
    });

    useEffect(() => {

    }, []);

    console.log('register');

    // const handleSubmit = ()

    return (
        <div className="login-wrapper p-4 rounded-3">
            <Formik
                validationSchema={schema}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 4000);
                }}
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    passwordConfirmation: "",
                    terms: false,
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group md="" controlId="validationFormik05">
                            <Form.Label className='mb-1'>Name</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faUser} />
                                </InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Full name"
                                    value={values.name}
                                    onChange={(e) => handleChange(e)}
                                    isValid={touched.name && !errors.name}
                                    isInvalid={!!errors.name}
                                />
                            </InputGroup>
                            {/* <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group md="" controlId="validationFormik01">
                            <Form.Label className='mb-1'>Email address</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
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
                        <Form.Group controlId="validationFormik03" className="pt-2">
                            <Form.Label className='mb-1'>Confirm Password</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>
                                    <FontAwesomeIcon icon={faLock} />
                                </InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    name="passwordConfirmation"
                                    placeholder="Confirm Password"
                                    value={values.passwordConfirmation}
                                    onChange={handleChange}
                                    isInvalid={!!errors.passwordConfirmation}
                                    isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
                                />
                            </InputGroup>
                            {/* <Form.Control.Feedback type="invalid">
                                {errors.passwordConfirmation}
                            </Form.Control.Feedback> */}
                        </Form.Group>
                        <Form.Group className="pt-2">
                            <Form.Check
                                required
                                name="terms"
                                label="Agree to terms and conditions"
                                onChange={handleChange}
                                isInvalid={!!errors.terms}
                                feedback={errors.terms}
                                id="validationFormik0"
                            />
                        </Form.Group>
                        <Button size="lg" type="submit" disabled={isSubmitting} className="mt-3">Sign Up</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Register;