import { useState } from 'react';
import style from './email.module.scss';

const Email = ({ setError }) => {
  const [checked, setChecked] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);

  setError((emailDirty && !!emailError) || checked);

  const checkbox = () => {
    setChecked(!checked);
    console.log(!!emailError);
    console.log(emailDirty);
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
        <div className={style.email_field}>Электронная почта</div>
        <input
          name='email'
          onBlur={blurHandler}
          value={email}
          onChange={emailHandler}
        />
        <div className={style.email_hint}>
          Можно изменить адрес, указанный при регистрации.
        </div>
        {emailError && emailDirty && (
          <div className={style.email_error}>неверный E-mail</div>
        )}
      </div>
      <div className={style.email_wrapper}>
        <div className={style.email_agree}>Я согласен</div>
        <input
          className={style.checkbox}
          type='checkbox'
          value={checked}
          onChange={checkbox}
        />
        <div className={style.email_info}>
          принимать актуальную информацию на емейл
        </div>
      </div>
    </div>
  );
};

export default Email;
