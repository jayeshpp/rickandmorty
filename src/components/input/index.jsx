import cx from "classnames";
import "./styles.scss";

function Input({ className, ...props }) {
  return <input className={cx("input", className)} {...props} />;
}

export default Input;
