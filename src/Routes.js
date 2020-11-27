import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppLayout from './views/layout';
import { Loader } from './components';
import { Login, Register, Registerrecruiter, RegisterStudent } from './views';
import { recruiterHome } from './views/recruitersViews';
import { StudentHome } from './views/StudentsViews';

const AppRoutes = () => {
  const { isLogin } = useSelector(state => state.user);
  const role = 'student';

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
            {role === 'recruiter' ? (
              <>
                <Route exact path='/' component={recruiterHome} />
              </>
            ) : (
              <Route exact path='/' component={StudentHome} />
            )}
          </AppLayout>
        )}
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
