import style from './password.module.scss';

const Password = () => {
  return (
    <div className={style.password}>
      <div className={style.password_first}>
        <div className={style.password_once}>Пароль</div>
      </div>
      <div className={style.password_second}>
        <div className={style.password_twice}>Пароль еще раз</div>
      </div>
    </div>
  );
};

export default Password;
