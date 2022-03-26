import React, { useEffect, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';
import withRouter from './HOC/withRouter/withRouter';

const App = (props) => {

  useEffect(() => {
    console.log(props);
    // props.onTryAutoSignup();
  }, []);

  let routes = (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/logout" render={props => <Logout {...props} />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );

  if (props.isAuthenticated) {
    routes = (
      <Routes>
        {/* <Route path="/checkout" render={props => <Checkout {...props} />} />
        <Route path="/orders" render={props => <Orders {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/auth" render={props => <Auth {...props} />} />
        <Route path="/" exact component={BurgerBuilder} /> */}
        {/* <Redirect to="/" /> */}
      </Routes>
    );
  }

  return (
    <div>
      {routes}
      {/* <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense> */}
      {/* <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout> */}
    </div>
  );
}

export default withRouter(App);
