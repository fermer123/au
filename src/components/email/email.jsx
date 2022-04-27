import { useState } from 'react';
import style from './email.module.scss';

const Email = () => {
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const checkbox = () => {
    setChecked(!checked);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.email_wrapper}>
        <div className={style.password_field}>Электронная почта</div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        {emailError && <div className={style.email_error}>неверный E-mail</div>}
      </div>
      <div className={style.password_wrapper}>
        <div className={style.password_agree}>Я согласен</div>
        <input
          className={style.checkbox}
          type='checkbox'
          value={checked}
          onChange={checkbox}
        />
        <div className={style.password_info}>
          принимать актуальную информацию на емейл
        </div>
      </div>
    </div>
  );
};

export default Email;
