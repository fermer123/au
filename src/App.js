import { useState } from 'react';
import style from './App.module.scss';
import Button from './components/button/button';
import Email from './components/email/email';
import Header from './components/header/header';
import Location from './components/location/location';
import Password from './components/password/password';

function App() {
  const [mainError, setMainError] = useState(false);

  const [passError, setPassError] = useState('');
  const [passDirty, setPassDirty] = useState(false);
  const [repeatPassError, setRepeatPassError] = useState('');
  const [repeatPassDirty, setRepeatPassDirty] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);

  return (
    <div className={style.App}>
      <Header />
      <Location />
      <Password
        passError={passError}
        setPassError={setPassError}
        passDirty={passDirty}
        setPassDirty={setPassDirty}
        repeatPassError={repeatPassError}
        setRepeatPassError={setRepeatPassError}
        repeatPassDirty={repeatPassDirty}
        setRepeatPassDirty={setRepeatPassDirty}
        setMainError={setMainError}
      />
      <Email
        emailError={emailError}
        setEmailError={setEmailError}
        emailDirty={emailDirty}
        setEmailDirty={setEmailDirty}
      />
      <Button />
    </div>
  );
}

export default App;
