import { GENDER_MAP } from "../../constants/global";
import cx from 'classnames'
import './styles.scss'

function Select({ onSelect, className, selected }) {
  return (
    <select className={cx('select', className)} onChange={onSelect}>
      <option value="">Select a gender</option>
      {GENDER_MAP.map((gender) => (
        <option
          key={gender.value}
          value={gender.value}
          selected={gender.value === selected}
        >
          {gender.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
