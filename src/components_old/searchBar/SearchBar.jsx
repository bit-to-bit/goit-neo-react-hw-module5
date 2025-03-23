import css from './SearchBar.module.css';
import { Field, Formik, Form } from 'formik';
import { FiSearch } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = values => {
    if (values.query.trim() == '') {
      toast.loading('Enter a query to search for images', {
        duration: 3000,
        position: 'top-center',
        style: {
          background: '#4E64E0',
          color: '#fff',
        },
      });
      return;
    }
    onSearch(values.query);
  };

  return (
    <header className={css.header}>
      <Formik
        initialValues={{
          query: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field
            type='text'
            name='query'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
          <button type='submit'>
            <FiSearch />
          </button>
        </Form>
      </Formik>
      <Toaster
        containerStyle={{
          top: 96,
        }}
      />
    </header>
  );
};

export default SearchBar;
