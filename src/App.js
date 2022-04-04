import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import dispatchToProps from './Redux/dispatchToProps';
import stateToProps from './Redux/stateToProps';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </>
);
export default connect(stateToProps, dispatchToProps)(App);
