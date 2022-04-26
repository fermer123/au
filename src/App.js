import style from './App.module.scss';
import Email from './components/email/email';
import Header from './components/header/header';
import Location from './components/location/location';
import Password from './components/password/password';

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Location />
      <Password />
      <Email />
    </div>
  );
}

export default App;
