import { useState } from 'react';
import style from './password.module.scss';

const Password = () => {
  const [pass, setPass] = useState('');
  const [repeatPass, setRepeatPass] = useState('');
  return (
    <div className={style.password}>
      <div className={style.password_wrapper}>
        <div>Пароль</div>
        <input
          type='password'
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <div className={style.password_wrapper}>
        <div>Пароль еще раз</div>
        <input
          type='password'
          value={repeatPass}
          onChange={(e) => setRepeatPass(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Password;
