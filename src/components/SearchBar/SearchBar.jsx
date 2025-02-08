import { Field, Form, Formik } from 'formik';
import toast from 'react-hot-toast';

const SearchBar = ({ handleChangeQuery, query }) => {
  const onSubmit = values => {
    if (!values.query) {
      toast.error('Enter the name of the movie to search for it');
      return;
    }
    handleChangeQuery(values.query.trim());
  };

  const initialValues = {
    query,
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};
export default SearchBar;
