import { useEffect, useState } from 'react';

import style from './password.module.scss';

const Password = ({
  pass,
  setPass,
  repeatPass,
  setRepeatPass,
  setPassErrorMain,
}) => {
  const [passError, setPassError] = useState('');
  const [passDirty, setPassDirty] = useState(false);
  const [repeatPassError, setRepeatPassError] = useState('');
  const [repeatPassDirty, setRepeatPassDirty] = useState(false);
  const mainError =
    !passError &&
    !repeatPassError &&
    pass.length >= 5 &&
    repeatPassDirty &&
    passDirty &&
    repeatPass.length >= 5;

  useEffect(() => {
    setPassErrorMain(mainError);
  }, [mainError]);

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
    } else {
      setRepeatPassError('');
    }
    if (e.target.value !== pass) {
      setRepeatPassError('Пароли не совпадают');
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
