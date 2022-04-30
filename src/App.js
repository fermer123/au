import { useEffect, useState } from 'react';
import style from './App.module.scss';
import Button from './components/button/button';
import Email from './components/email/email';
import Header from './components/header/header';
import Location from './components/location/location';
import Password from './components/password/password';

function App() {
  const [mainEmailError, setEmailErrorMain] = useState(false);
  const [mainPassError, setPassErrorMain] = useState(false);
  const [mainLocationError, setLocationErrorMain] = useState(false);
  const [mainError, setMainError] = useState(false);

  const [value, setValue] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (mainEmailError && mainPassError && mainLocationError) {
      setMainError(true);
    } else {
      setMainError(false);
    }
  }, [mainEmailError, mainPassError]);

  return (
    <div className={style.App}>
      <Header />
      <Location
        setLocationErrorMain={setLocationErrorMain}
        value={value}
        setValue={setValue}
        city={city}
        setCity={setCity}
      />
      <Password setPassErrorMain={setPassErrorMain} />
      <Email setEmailErrorMain={setEmailErrorMain} />
      <Button mainError={mainError} />
    </div>
  );
}

export default App;
