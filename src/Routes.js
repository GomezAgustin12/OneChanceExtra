import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppLayout from './views/layout';
import { Loader } from './components';
import { Login, Register} from './views';
import { RecruterHome } from "./views/RecrutersViews";
import { StudentHome } from "./views/StudentsViews";


const AppRoutes = () => {
  const { user : { role }, isLogin } = useSelector(state => state.user)


  return (
    <Router>
			<Suspense fallback={<Loader />}>
				{!isLogin ? (
					<>
						<Route exact path="/" component={Login} />
						<Route exact path="/register" component={Register} />
					</>
				) : (
					<AppLayout>
						{role === 'recruter' ? (
							<>
								<Route exact path="/" component={RecruterHome} />
							</>
						) : (
							<Route exact path="/" component={StudentHome} />
						)}
					</AppLayout>
				)}
			</Suspense>
    </Router>
  );
};

export default AppRoutes;
