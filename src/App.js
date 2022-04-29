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
  const [mainError, setMainError] = useState(false);

  useEffect(() => {
    if (mainEmailError && mainPassError) {
      setMainError(true);
    }
  }, [mainEmailError, mainPassError]);

  return (
    <div className={style.App}>
      <Header />
      <Location />
      <Password setPassErrorMain={setPassErrorMain} />
      <Email setEmailErrorMain={setEmailErrorMain} />
      <Button mainError={mainError} />
    </div>
  );
}

export default App;
