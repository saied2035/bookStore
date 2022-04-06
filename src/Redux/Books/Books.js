// const SAVE_BOOK = 'bookStore/Books/SAVE_BOOK';
const BOOK_ADDED = 'bookStore/Books/BOOK_ADDED';
const BOOK_REMOVED = 'bookStore/Books/BOOK_REMOVED';
// const REQUEST_FAILED = 'bookStore/Books/REQUEST_FAILED';

export const addBook = (book) => ({ type: BOOK_ADDED, payload: book });

export const removeBook = (index) => ({ type: BOOK_REMOVED, payload: index });

const initialState = {
  books: [
    {
      id: 1, title: 'book1', type: 'Fiction', author: 'author1',
    },
    {
      id: 2, title: 'book2', type: 'Action', author: 'author2',
    },
    {
      id: 3, title: 'book3', type: 'Classics', author: 'author3',
    },
    {
      id: 4, title: 'book4', type: 'Romance', author: 'author4',
    },
  ],
};

const booksReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case BOOK_ADDED:
      return { ...state, books: [...state.books, action.payload] };
    case BOOK_REMOVED:
      return {
        ...state,
        books: [...state.books.slice(0, action.payload), ...state.books.slice(action.payload + 1)],
      };
    default:
      return state;
  }
};
export default booksReducer;
