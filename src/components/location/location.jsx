import axios from 'axios';
import { useEffect, useState } from 'react';
import style from './location.module.scss';
const json = require('../../cities.json');

const filteredJson = json.filter((e) => {
  return e.population > 50000;
});

const sortJson = filteredJson.sort();

const max = Math.max.apply(
  null,
  sortJson.map((e) => e.population),
);
const maxIndex = sortJson.findIndex((e) => e.population == max);
const newArr = sortJson.splice(maxIndex, 1).concat(sortJson);

const Location = ({ setLocationErrorMain, value, setValue, city, setCity }) => {
  const [unversity, setUnversity] = useState([]);
  //const [value, setValue] = useState('');
  //const [city, setCity] = useState('');

  useEffect(() => {
    if (value == '' || city == '') {
      setLocationErrorMain(false);
    } else {
      setLocationErrorMain(true);
    }
    console.log(value, city);
  }, [value, city]);

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

  const JSON = newArr.map((e, index) => {
    return <option key={index}>{e.city}</option>;
  });

  return (
    <div className={style.location}>
      <div className={style.location_city}>
        <div className={style.city}>Ваш город</div>
        <select value={city} onChange={(event) => setCity(event.target.value)}>
          {JSON}
        </select>
      </div>
      <div className={style.location_university}>
        <div className={style.university}>Ваш университет</div>
        <select
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
