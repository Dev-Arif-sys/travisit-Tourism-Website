import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
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
      <Routes>
        <Route exact path='/' element={<Home/>} />
        
        <Route path='/home' element={<Home/>} />
          
        <Route path='/login' element={<Login/>} />
         
        <Route path='/tours/:id' element={<PrivateRoute><Book/></PrivateRoute>} />
          
        <Route path='/myBooking' element={<PrivateRoute><MyBooking/></PrivateRoute>} />
          
        <Route path='/manageBooking' element={<PrivateRoute><ManageOrder/></PrivateRoute>} />
          
        <Route path='/addTour' element={<PrivateRoute><AddTour/></PrivateRoute>}/>
      
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
