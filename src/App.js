import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import ContextProvider from './ContextProvider/ContextProvider';
import { Placeholder } from 'react-bootstrap';
import PlaceOrder from './components/PlaceOrder/Book';
import Book from './components/PlaceOrder/Book';
import UseAuth from './Hooks/UseAuth';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyBooking from './components/MyBooking/MyBooking';
import ManageOrder from './components/ManageOrder/ManageOrder';
import AddTour from './components/AddTour/AddTour';


function App() {
 
  return (
    <div className="App">
      <ContextProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
         <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
        <PrivateRoute path='/tours/:id'>
           <Book></Book>
        </PrivateRoute>
        <Route path='/myBooking'>
          <MyBooking></MyBooking>
        </Route>
        <Route path='/manageBooking'>
          <ManageOrder></ManageOrder>
        </Route>
        <Route path='/addTour'>
        <AddTour></AddTour>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
