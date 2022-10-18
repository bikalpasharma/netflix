import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Profile from './components/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (userAuth) => {
      if(userAuth){
        //login
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      } else {
        //logout
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        { !user ? (
          <Login/>
        ) : (
          <Routes>
            <Route exact path='/' element={<HomeScreen/>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>   
        )
}   
      </Router>
    </div>
  );
}

export default App;
