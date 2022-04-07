import { Route, Routes } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { booksLoad } from './Redux/Books/Books';
import Navbar from './components/Navbar/Navbar';
import dispatchToProps from './Redux/dispatchToProps';
import stateToProps from './Redux/stateToProps';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(booksLoad());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route exact path="categories" element={<Categories />} />
      </Routes>
    </>
  );
};
export default connect(stateToProps, dispatchToProps)(App);
