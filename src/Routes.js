import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppLayout from './views/layout';

// import { getUser } from '../data/user/actions';
import { Loader } from './components';
import Home from './views/home';

// import { AdminHome, Clients } from '../views/admin-views';
// import { UserHome } from '../views/user-views';
// import { Register, Login } from '../views';

const AppRoutes = () => {
  const isAdmin = true; //HAY QUE SACAR ESTA VARIABLE CUANDO SE IMPLEMENTE EL MANEJO DE ROLES

  return (
    <Router>
      <AppLayout>
        <Route exact path='/' component={Home} />
      </AppLayout>
    </Router>
  );
};

export default AppRoutes;
