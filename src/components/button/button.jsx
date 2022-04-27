import { useState } from 'react';

import style from './button.module.scss';

const Button = () => {
  const [data, setData] = useState('');

  const check = () => {
    let months = [
      'Января',

      'Февраля',

      'Марта',

      'Апреля',

      'Мая',

      'Июня',

      'Июля',

      'Августа',

      'Сентября',

      'Октября',

      'Ноября',

      'Декабря',
    ];

    let now = new Date(),
      year = now.getFullYear(),
      month = now.getMonth().toString(),
      day = now.getDate(),
      hour = now.getHours(),
      minute = now.getMinutes(),
      seconds = now.getSeconds(),
      message = 'последние изменения';

    message +=
      ' ' +
      day +
      ' ' +
      months[month] +
      ' ' +
      year +
      ' в' +
      ' ' +
      hour +
      ':' +
      minute +
      ':' +
      seconds;

    console.log(day);

    setData(message);
  };

  return (
    <div className={style.wrapper}>
      <button className={style.btn} onClick={check}>
        Изменить
      </button>

      <div className={style.wrapper_date}>{data}</div>
    </div>
  );
};

export default Button;
