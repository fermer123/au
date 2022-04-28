import { useState } from 'react';
import style from './header.module.scss';

const Header = () => {
  const [status, setStatus] = useState(false);
  const [change, setChange] = useState('');

  const handlerIn = (e) => {
    setChange(e.target.value);
  };

  const handlerBtn = () => {
    if (!status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  return (
    <div className={style.header}>
      <div className={style.header_person}>Здравствуйте, Человек №3596941</div>
      <button onClick={handlerBtn} className={style.header_change_status}>
        Сменить статус
      </button>

      {status ? (
        <div className={style.header_change_field}>
          <input placeholder={change} onChange={handlerIn} />
        </div>
      ) : change ? (
        <div className={style.header_change_field}>{change}</div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Header;
