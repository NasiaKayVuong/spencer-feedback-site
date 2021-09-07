import React, { Fragment } from 'react';
import Signup from './authentication/Signup';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './authentication/Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './authentication/ForgotPassword';
import UpdateProfile from './authentication/UpdateProfile';
import Feedback from './Forms/Feedback';
import Contact from './Forms/Contact';
import Home from './Home';
import Header from './layout/Header';
import Footer from './layout/Footer';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <main className='py-3'>
          <AuthProvider>
            <Switch>
              <PrivateRoute path='/dashboard' component={Dashboard} />
              <PrivateRoute path='/update-profile' component={UpdateProfile} />
              <PrivateRoute path='/feedback-form' component={Feedback} />
              <Route exact path='/' component={Home} />
              <Route path='/contact-us' component={Contact} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </main>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
