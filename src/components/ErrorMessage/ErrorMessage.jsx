import css from "./ErrorMessage.module.css";
const ErrorMessage = ({ message }) => {
  return <p className={css.errorMessage}>{message}</p>;
};
export default ErrorMessage;
