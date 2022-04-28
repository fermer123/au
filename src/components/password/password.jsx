import { useState } from 'react';

import style from './password.module.scss';

const Password = (props) => {
  const {
    passError,
    setPassError,
    passDirty,
    setPassDirty,
    repeatPassError,
    setRepeatPassError,
    repeatPassDirty,
    setRepeatPassDirty,
    setMainError,
  } = props;
  const [pass, setPass] = useState('');

  const [repeatPass, setRepeatPass] = useState('');

  // const [passError, setPassError] = useState('');

  // const [passDirty, setPassDirty] = useState(false);

  // const [repeatPassError, setRepeatPassError] = useState('');

  // const [repeatPassDirty, setRepeatPassDirty] = useState(false);
  if ((passError && passDirty) || (repeatPassError && repeatPassDirty)) {
    setMainError(true);
  } else {
    setMainError(false);
  }
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
  };

  return (
    <div className={style.password}>
      <div className={style.password_wrapper}>
        <div className={style.password_pass}>Пароль</div>
        <input
          onBlur={blurHandler}
          name='passwordOne'
          type='password'
          value={pass}
          onChange={passwordHandler}
        />
        <div className={style.password_wrapper_hint}>
          Ваш новый пароль должен содержать не менее 5 символов.
        </div>
        {passError && passDirty && (
          <div className={style.password_error}>{passError}</div>
        )}
      </div>

      <div className={style.password_wrapper}>
        <div className={style.password_pass_again}>Пароль еще раз</div>
        <input
          onBlur={blurHandler}
          name='passwordTwo'
          type='password'
          value={repeatPass}
          onChange={passwordHandlerRepeat}
        />
        <div className={style.password_wrapper_hint}>
          Повторите пароль, пожалуйста, это обезопасит вас с нами на случай
          ошибки.
        </div>
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
