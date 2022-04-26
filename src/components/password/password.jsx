import { useState } from 'react';
import style from './password.module.scss';

const Password = () => {
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  const [passError, setPassEmailError] = useState(false);
  const [repeatPassError, setRepeatPassError] = useState(false);
  return (
    <div className={style.password}>
      <div className={style.password_wrapper}>
        <div>Пароль</div>
        <input
          type='password'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        {passError && (
          <div className={style.password_error}>
            Используйте не менее 5символов
          </div>
        )}
      </div>
      <div className={style.password_wrapper}>
        <div>Пароль еще раз</div>
        <input
          type='password'
          value={repeatPass}
          onChange={(e) => setRepeatPass(e.target.value)}
        />
        {repeatPassError && (
          <div className={style.password_error}>Пароли не совпадают</div>
        )}
      </div>
    </div>
  );
};

export default Password;
