import style from './header.module.scss';
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.header_person}>Здравствуйте, Человек №3596941</div>
      <button className={style.header_change_status}>Сменить статус</button>
    </div>
  );
};

export default Header;
