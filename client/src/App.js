import './App.css';
import Navbar from './frontend/Navbar';
import { Provider } from 'react-redux';
import store from './redux/store';
import Footer from './frontend/Footer';
import { BrowserRouter, Routes,  Route  } from 'react-router-dom';
//import { Routes } from 'react-router';
import Login from './frontend/Login';
import Signup from './frontend/Signup';
import Home from './frontend/Home';
import About from './frontend/About';
import Electronic from './frontend/Electronic';
import Paper from './frontend/Paper';
import Filing from './frontend/Filing';
import Stationery from './frontend/Stationery';
import CartDetails from './frontend/CartDetails';
import Contact from './frontend/Contact';
//import { Route } from 'react-router';
import Branches from './frontend/Branches';
import BackToTop from "react-back-to-top-button";
import { SlArrowUp } from 'react-icons/sl';
import ScrollButton from './frontend/ScrollButton';
import { Fragment } from 'react';
import SendEmail from './frontend/SendEmail';

function App() {
  return (
    <>
      {/* <br></br> */}
      <Provider store={store}>



        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/register' element={<Signup/>}/>
            <Route exact path='/about' element={<About />} />
            <Route exact path='/electronic' element={<Electronic />} />
            <Route exact path='/paper' element={<Paper />} />
            <Route exact path='/filing' element={<Filing />} />
            <Route exact path='/stationery' element={<Stationery />} />
            <Route exact path='/cart' element={<CartDetails />} />
            <Route exact path='/branches' element={<Branches />} />
            <Route exact path = '/contact' element = {<Contact/>}/>
            {/*<Route exact path='/login' element={<Login />}/>*/}
          </Routes>
        </BrowserRouter>
      </Provider>

      <Footer></Footer>

      
      <Fragment>
        <ScrollButton />
      </Fragment>
    </>

  );
}

export default App;
