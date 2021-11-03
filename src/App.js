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
        <Route path='/tours/:id'>
           <Book></Book>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
