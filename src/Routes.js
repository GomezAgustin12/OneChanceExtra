import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppLayout from './views/layout';
import { Loader } from './components';
import { Login, Register } from './views';
import { RecruterHome } from './views/RecrutersViews';
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
            <Route exact path='/register' component={Register} />
            <Route exact path='/register#1' component={Register} />
          </>
        ) : (
          <AppLayout>
            {role === 'recruter' ? (
              <>
                <Route exact path='/' component={RecruterHome} />
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
