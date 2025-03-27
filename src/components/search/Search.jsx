import css from './Search.module.css';
import { Field, Formik, Form } from 'formik';
import { FiSearch } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

const showToast = () => {
  toast.custom(<div className={css.toast}>Enter a query to search movies</div>);
};

const Search = ({ onSearch }) => {
  const handleSubmit = values => {
    if (!values.query.trim()) {
      showToast();
      return;
    }
    onSearch(values.query);
  };

  return (
    <div className={css.search}>
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
            placeholder='Search movies'
          />
          <button type='submit'>
            <FiSearch />
          </button>
        </Form>
      </Formik>
      <Toaster
        toastOptions={{
          removeDelay: 500,
        }}
      />
    </div>
  );
};

export default Search;
