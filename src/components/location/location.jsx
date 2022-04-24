import style from './location.module.scss';

const Location = () => {
  return (
    <div className={style.location}>
      <div className={style.location_city}>
        <div className={style.city}>Ваш город</div>
        <select></select>
      </div>
      <div className={style.location_university}>
        <div className={style.university}>Ваш университет</div>
        <select></select>
      </div>
    </div>
  );
};

export default Location;
