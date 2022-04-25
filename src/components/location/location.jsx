import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './location.module.scss';

const Location = () => {
  const [unversity, setUnversity] = useState([]);
  const [value, setValue] = useState('');
  useEffect(() => {
    const fetchUniversity = async () => {
      const response = await axios(
        'http://universities.hipolabs.com/search?country=United+Kingdom',
      );
      setUnversity(response.data);
    };
    fetchUniversity();
  }, []);

  const option = unversity.map((e, index) => {
    return <option key={index}>{e.name}</option>;
  });

  return (
    <div className={style.location}>
      <div className={style.location_city}>
        <div className={style.city}>Ваш город</div>
        <select></select>
      </div>
      <div className={style.location_university}>
        <div className={style.university}>Ваш университет</div>
        <select
          className={style.university_select}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          {option}
        </select>
      </div>
    </div>
  );
};

export default Location;
