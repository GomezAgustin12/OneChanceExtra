import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppLayout from './views/layout';

// import { getUser } from '../data/user/actions';
import { Loader } from './components';
import {Home, Login} from './views';

// import { AdminHome, Clients } from '../views/admin-views';
// import { UserHome } from '../views/user-views';
// import { Register, Login } from '../views';

const AppRoutes = () => {
  const isAdmin = true; //HAY QUE SACAR ESTA VARIABLE CUANDO SE IMPLEMENTE EL MANEJO DE ROLES
  const user = true

  return (
    <Router>
			<Suspense fallback={<Loader />}>
				{!user ? (
					<>
						<Route exact path="/" component={Login} />
						<Route exact path="/register" component={Register} />
					</>
				) : (
					<AppLayout>
						{role === 'admin' ? (
							<>
								<Route exact path="/" component={Appointments} />
								<Route exact path="/patients" component={Patients} />
							</>
						) : (
							<Route exact path="/" component={Details} />
						)}
					</AppLayout>
				)}
			</Suspense>
    </Router>
  );
};

export default AppRoutes;
