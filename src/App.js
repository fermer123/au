import { useState } from 'react';
import style from './App.module.scss';
import Button from './components/button/button';
import Email from './components/email/email';
import Header from './components/header/header';
import Location from './components/location/location';
import Password from './components/password/password';

function App() {
  const [mainError, setMainError] = useState(false);

  return (
    <div className={style.App}>
      <Header />
      <Location />
      <Password setError={setMainError} />
      <Email setError={setMainError} />
      <Button mainError={mainError} />
    </div>
  );
}

export default App;
