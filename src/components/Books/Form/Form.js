import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../Redux/Books/Books';
import './Form.css';

const Form = ({ id }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const dispatch = useDispatch();
  const categories = [
    'Action', 'Classics', 'Detective', 'Romance', 'Fiction', 'History', 'Science',
  ];
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!type.length) return;
        const book = {
          id, title, type, author,
        };
        dispatch(addBook(book));
        setTitle('');
        setAuthor('');
        setType('');
      }}
    >
      <h2>ADD NEW BOOK</h2>
      <input
        type="text"
        placeholder="Book title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
      />
      <input
        type="text"
        placeholder="Book author"
        onChange={(e) => setAuthor(e.target.value)}
        value={author}
        required
      />
      <select
        value={type.length ? type : 'Category'}
        onChange={(e) => setType(e.target.value)}
        name="categories"
      >
        <option className="selected" value="Category" disabled>Category</option>
        {
        categories.map((category) => <option key={category} value={category}>{category}</option>)
      }
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  );
};
Form.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Form;
