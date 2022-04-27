import { useState } from 'react';
import style from './email.module.scss';

const Email = () => {
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('Неверный E-mail');
  const [emailDirty, setEmailDirty] = useState(false);

  const checkbox = () => {
    setChecked(!checked);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value.toLowerCase()))) {
      setEmailError('Неверный E-mail');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.email_wrapper}>
        <div className={style.password_field}>Электронная почта</div>
        <input
          name='email'
          onBlur={(e) => blurHandler()}
          value={email}
          onChange={(e) => emailHandler(e)}
        />
        {emailError && emailDirty && (
          <div className={style.email_error}>неверный E-mail</div>
        )}
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
