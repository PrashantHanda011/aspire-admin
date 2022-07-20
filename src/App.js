import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import LoginPage from './new-components/LoginPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import NavSidebar from './new-components/NavSidebar';
import ArtistPage from './components/Artists/ArtistPage';
import UserPage from './components/Users/UserPage';
import AddArtistForm from './components/Artists/AddArtistForm';
import BlogPage from './components/Blogs/BlogPage';
import AddBlogForm from './components/Blogs/AddBlogForm';
import PaymentPage from './components/Payments/PaymentPage';
import ArtistDetails from './components/Artists/ArtistDetails';
import EmployeeDetails from './components/Blogs/EmployeeDetails';
import ArtistPayment from './components/Artists/ArtistPayment';
import Addcoursepage from './components/Artists/Addcoursepage';
import AddEmployeeAccount from './components/Blogs/AddEmployeeAccount';
import ViewCoursePage from './components/Artists/Courses/ViewCoursePage'
import Edituniversity from './components/Artists/University/Edituniversity';
import Editcourse from './components/Artists/Courses/Editcourse';
import EditBlog from './components/Blogs/allblogs/EditBlog';
import ViewSingleUser from './components/Users/ViewSingleUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import Property from './new-components/Property/Property';
import Career from './new-components/Career/Career';
import Blogs from './new-components/Blogs/Blogs';

export const history = createHistory();
const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={LoginPage} />
        <NavSidebar>
          <Route path='/property' exact component={Property} />
          <Route path='/career' exact component={Career} />
          <Route path='/blogs' exact component={Blogs} />

       
               </NavSidebar>
      </Switch>
    </Router>
  );
};

export default App;
