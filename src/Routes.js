import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Loader } from './components';
import { Login, Registerrecruiter, RegisterStudent } from './views';
import {
  MyPosts,
  RecruiterHome,
  RecruiterLayout,
} from './views/recruitersViews';
import {
  StudentHome,
  StudentProfile,
  StudentLayout,
} from './views/StudentsViews';
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
  }, []);

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
          <>
            {user.AppRole === 'recruiter' && (
              <RecruiterLayout>
                <Route exact path='/' component={RecruiterHome} />
                <Route exact path='/myposts' component={MyPosts} />
              </RecruiterLayout>
            )}
            {user.AppRole === 'student' && (
              <StudentLayout>
                <Route exact path='/' component={StudentHome} />
                <Route exact path='/perfil' component={StudentProfile} />
              </StudentLayout>
            )}
          </>
        )}
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
