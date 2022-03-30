import React, { useEffect, Suspense, useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { AuthContext } from './context/authContext/AuthContext';

import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

import Layout from './containers/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';

import { withErrorHandler } from './hoc/withErrorHandler';
// import withRouter from './hoc/withRouter';

const App = () => {
  const { user, dispatch } = useContext(AuthContext);
  let routes = (
    <div className='wrapper d-flex flex-column justify-content-center align-items-center'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );

  if (user) {
    routes = (
      <Layout>
        <div className='p-3'>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate replace to="/dashboard" />} />
          </Routes>
        </div>
      </Layout>
    );
  }

  return (
    <>
      {routes}
      {/* <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense> */}
      {/* <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout> */}
    </>
  );
}

export default withErrorHandler(App);
// export default withRouter(App);
