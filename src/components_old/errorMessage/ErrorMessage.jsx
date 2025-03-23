import css from './ErrorMessage.module.css';
const ErrorMessage = () => {
  return (
    <div className={css.error}>
      <h2>Error</h2>
      <p>Please wait a few minutes before you try again.</p>
    </div>
  );
};

export default ErrorMessage;
