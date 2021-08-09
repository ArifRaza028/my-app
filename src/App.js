import React from 'react';
import './App.css';
import Home from './customer/Home';
import Doctordashboard from './customer/Doctordashboard';
import Appointments from './customer/Appointments';
import ScheduleTiming from './customer/ScheduleTiming';
import Mypatients from './customer/Mypatients';
import Patientsprofile from './customer/Patientsprofile';
import Chatdoctor from './customer/Chatdoctor';
import Invoices from './customer/Invoices';
import Doctorprofilesetting from './customer/Doctorprofilesetting';
import Reviews from './customer/Reviews';
import Doctorregister from './customer/Doctorregister';
/* import Mapgrid from './customer/Mapgrid'; */
/* import Maplist from './customer/Maplist'; */
import Search from './customer/Search';
import Doctorprofile from './customer/Doctorprofile';
import Booking from './customer/Booking';
import Checkout from './customer/Checkout';
import Bookingsuccess from './customer/Bookingsuccess';
import Patientdashboard from './customer/Patientdashboard';
import Favourites from './customer/Favourites';
import Chat from './customer/Chat';
import Profilesettings from './customer/Profilesettings';
import Changepassword from './customer/Changepassword';
import Voicecall from './customer/Voicecall';
import Videocall from './customer/Videocall';
import Calendar from './customer/Calendar';
/* import Components from './pages/Components'; */
import Invoiceview from './customer/Invoiceview';
/* import Blankpage from './customer/Blankpage'; */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './customer/Login';
import Register from './customer/Register';
import Forgotpassword from './customer/Forgotpassword';
/* import Bloglist from './customer/Bloglist';
import Bloggrid from './customer/Bloggrid';
import Blogdetails from './customer/Blogdetails'; */
import Termcondition from './customer/Termcondition';
import Privacypolicy from './customer/Privacypolicy';
import Home1 from './admin/Home1';
import Appointmentlist from './admin/Appointmentlist';
import Specialities from './admin/Specialities';
import Doctorlist from './admin/Doctorlist';
import Patientlist from './admin/Patientlist';
import Review from './admin/Review';
import Transactionslist from './admin/Transactionslist';
import Settings from './admin/Settings';
import Invoicereport from './admin/Invoicereport';
import Profile from './admin/Profile';
import Login1 from './customer/Login1';
import Register1 from './customer/Register1';
import Forgotpassword1 from './customer/Forgotpassword1';
import Lockscreen from './customer/Lockscreen';
import Error404 from './customer/Error404';
import Error500 from './customer/Error500';
/* import Blankpage1 from './customer/Blankpage1'; */
/* import Components1 from './pages/Components1'; */
/* import Formbasicinput from './customer/Formbasicinput';
import Forminputgroups from './customer/Forminputgroups';
import Formhorizontal from './customer/Formhorizontal';
import Formvertical from './customer/Formvertical';
import Formmask from './customer/Formmask';
import Formvalidation from './customer/Formvalidation';
import Tablesbasic from './customer/Tablesbasic'; */
/* import Datatables from './customer/Datatables'; */
import Socialmedia from './customer/Socialmedia';
import Addprescription from './customer/Addprescription';
import Editprescription from './customer/Editprescription';
import Addbilling from './customer/Addbilling';
import Invoice from './customer/Invoice';
import Editbilling from './customer/Editbilling';
import Doctorchangepassword from './customer/Doctorchangepassword';
import Header from './customer/Header';
import Footer from './customer/Footer';


function App() {
  return (
 <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Doctordashboard' component={Doctordashboard} />
          <Route exact path='/Appointments' component={Appointments} />
          <Route exact path='/ScheduleTiming' component={ScheduleTiming} />
          <Route exact path='/Mypatients' component={Mypatients} />
          <Route exact path='/Patientsprofile' component={Patientsprofile} />
          <Route exact path='/Chatdoctor' component={Chatdoctor} />
          <Route exact path='/Invoices' component={Invoices} />
          <Route exact path='/Doctorprofilesetting' component={Doctorprofilesetting} />
          <Route exact path='/Reviews' component={Reviews} />
          <Route exact path='/Doctorregister' component={Doctorregister} />
          {/* <Route exact path='/Mapgrid' component={Mapgrid} />
          <Route exact path='/Maplist' component={Maplist} /> */}
          <Route exact path='/Search' component={Search} />
          <Route exact path='/Doctorprofile' component={Doctorprofile} />
          <Route exact path='/Booking' component={Booking} />
          <Route exact path='/Checkout' component={Checkout} />
          <Route exact path='/Bookingsuccess' component={Bookingsuccess} />
          <Route exact path='/Patientdashboard' component={Patientdashboard} />
          <Route exact path='/Favourites' component={Favourites} />
          <Route exact path='/Chat' component={Chat} />
          <Route exact path='/Profilesettings' component={Profilesettings} />
          <Route exact path='/Changepassword' component={Changepassword} />
          <Route exact path='/Voicecall' component={Voicecall} />
          <Route exact path='/Videocall' component={Videocall} />
          <Route exact path='/Calendar' component={Calendar} />
          {/*  <Route exact path='/Components' component={Components} /> */}
          <Route exact path='/Invoiceview' component={Invoiceview} />
          {/* <Route exact path='/Blankpage' component={Blankpage} /> */}
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Register' component={Register} />
          <Route exact path='/Forgotpassword' component={Forgotpassword} />
          {/* <Route exact path='/Bloglist' component={Bloglist} />
          <Route exact path='/Bloggrid' component={Bloggrid} />
          <Route exact path='/Blogdetails' component={Blogdetails} /> */}
          <Route exact path='/Termcondition' component={Termcondition} />
          <Route exact path='/Privacypolicy' component={Privacypolicy} />
          <Route exact path='/Home1' component={Home1} />
          <Route exact path='/Appointmentlist' component={Appointmentlist} />
          <Route exact path='/Specialities' component={Specialities} />
          <Route exact path='/Doctorlist' component={Doctorlist} />
          <Route exact path='/Patientlist' component={Patientlist} />
          <Route exact path='/Review' component={Review} />
          <Route exact path='/Transactionslist' component={Transactionslist} />
          <Route exact path='/Settings' component={Settings} />
          <Route exact path='/Invoicereport' component={Invoicereport} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact path='/Login1' component={Login1} />
          <Route exact path='/Register1' component={Register1} />
          <Route exact path='/Forgotpassword1' component={Forgotpassword1} />
          <Route exact path='/Lockscreen' component={Lockscreen} />
          <Route exact path='/Error404' component={Error404} />
          <Route exact path='/Error500' component={Error500} />
          {/* <Route exact path='/Blankpage1' component={Blankpage1} /> */}
          {/*  <Route exact path='/Components1' component={Components1} /> */}
          {/* <Route exact path='/Formbasicinput' component={Formbasicinput} />
          <Route exact path='/Forminputgroups' component={Forminputgroups} />
          <Route exact path='/Formhorizontal' component={Formhorizontal} />
          <Route exact path='/Formvertical' component={Formvertical} />
          <Route exact path='/Formmask' component={Formmask} />
          <Route exact path='/Formvalidation' component={Formvalidation} />
          <Route exact path='/Tablesbasic' component={Tablesbasic} />
          <Route exact path='/Datatables' component={Datatables} /> */}
          <Route exact path='/Socialmedia' component={Socialmedia} />
          <Route exact path='/Addprescription' component={Addprescription} />
          <Route exact path='/Editprescription' component={Editprescription} />
          <Route exact path='/Addbilling' component={Addbilling} />
          <Route exact path='/Invoice' component={Invoice} />
          <Route exact path='/Editbilling' component={Editbilling} />
          <Route exact path='/Doctorchnagepassword' component={Doctorchangepassword} />
          <Route exact path='/Header' component={Header} />
          <Route exact path='/Footer' component={Footer} />
          
          
          


        </Switch>
      </Router>
    </div>

  );
}

export default App;





















