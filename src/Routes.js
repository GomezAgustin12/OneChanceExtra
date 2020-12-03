import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppLayout from './views/layout';
import { Loader } from './components';
import { Login, Registerrecruiter, RegisterStudent } from './views';
import { recruiterHome } from './views/recruitersViews';
import { StudentHome, StudentProfile } from './views/StudentsViews';
import { decodeUser } from './utils';
import { fetchUsersRequest, logedin } from './redux';
import axios from 'axios';
import { url } from './const';

const AppRoutes = () => {
  const {
    isLogin,
    user: { user },
    // { AppRole },
  } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('token') === null) return;
    dispatch(fetchUsersRequest());

    const auxUser = decodeUser();
    axios.get(`${url}/users/${auxUser.id}`).then(response => {
      if (response.data.AppRole === 'student') {
        axios
          .get(`${url}/estudiantes?user.id=${response.data._id}`)
          .then(res => {
            dispatch(logedin(res.data[0]));
          });
      }
      if (response.data.AppRole === 'recruiter') {
        axios.get(`${url}/recluters?user.id=${response.data._id}`).then(res => {
          dispatch(logedin(res.data[0]));
        });
      }
    });
  }, [isLogin, dispatch]);

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        {!isLogin ? (
          <>
            <Route exact path='/' component={Login} />
            <Route exact path='/registerStudent' component={RegisterStudent} />
            <Route
              exact
              path='/registerrecruiter'
              component={Registerrecruiter}
            />
          </>
        ) : (
          <AppLayout>
            {user.AppRole === 'recruiter' && (
              <>
                <div>Soy Recluter</div>
                <Route exact path='/' component={recruiterHome} />
              </>
            )}
            {user.AppRole === 'student' && (
              <>
                <div>Soy Estudiante</div>
                <Route exact path='/' component={StudentHome} />
                <Route exact path='/perfil' component={StudentProfile} />
              </>
            )}
          </AppLayout>
        )}
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
