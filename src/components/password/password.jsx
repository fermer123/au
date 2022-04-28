import { useState } from 'react';

import style from './password.module.scss';

const Password = () => {
  const [pass, setPass] = useState('');

  const [repeatPass, setRepeatPass] = useState('');

  const [passError, setPassError] = useState('Используйте не менее 5 символов');

  const [passDirty, setPassDirty] = useState(false);

  const [repeatPassError, setRepeatPassError] = useState('Пароли не совпадают');

  const [repeatPassDirty, setRepeatPassDirty] = useState(false);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'passwordOne':
        setPassDirty(true);

        break;

      case 'passwordTwo':
        setRepeatPassDirty(true);

        break;
    }
  };

  const passwordHandler = (e) => {
    setPass(e.target.value);

    if (e.target.value.length < 5) {
      setPassError('Используйте не менее 5 символов');
    } else {
      setPassError('');
    }
  };

  const passwordHandlerRepeat = (e) => {
    setRepeatPass(e.target.value);

    if (e.target.value.length < 5) {
      setRepeatPassError('Используйте не менее 5 символов');
    }

    if (e.target.value !== pass) {
      setRepeatPassError('Пароли не совпадают');
    } else {
      setRepeatPassError('');
    }

    console.log(pass);

    console.log(repeatPass);
  };

  return (
    <div className={style.password}>
      <div className={style.password_wrapper}>
        <div>Пароль</div>

        <input
          onBlur={blurHandler}
          name='passwordOne'
          type='password'
          value={pass}
          onChange={passwordHandler}
        />

        {passError && passDirty && (
          <div className={style.password_error}>{passError}</div>
        )}
      </div>

      <div className={style.password_wrapper}>
        <div>Пароль еще раз</div>

        <input
          onBlur={blurHandler}
          name='passwordTwo'
          type='password'
          value={repeatPass}
          onChange={passwordHandlerRepeat}
        />

        {passError && passDirty && (
          <div className={style.password_error}>{passError}</div>
        )}

        {repeatPassError && repeatPassDirty && (
          <div className={style.password_error}>{repeatPassError}</div>
        )}
      </div>
    </div>
  );
};

export default Password;
