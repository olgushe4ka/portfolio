import headerStyles from "./app-header.module.css";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <header className={`${headerStyles.header} pl-15 pr-15 pb-0 pt-0`}>
      <div className={`${headerStyles.boxLeft}`}>
        <Link to="/" className={`${headerStyles.menu}`}>
          <p className={`${headerStyles.menuText}`}>Главная</p>
        </Link>
        <Link to="/about" className={`${headerStyles.menu}`}>
          <p className={`${headerStyles.menuText}`}>О нас</p>
        </Link>
        <Link to="/portfolio" className={`${headerStyles.menu}`}>
          <p className={`${headerStyles.menuText}`}>Портфолио</p>
        </Link>
        <Link to="/price" className={`${headerStyles.menu}`}>
          <p className={`${headerStyles.menuText}`}>Услуги и цены</p>
        </Link>
        <Link to="/contacnts" className={`${headerStyles.menu}`}>
          <p className={`${headerStyles.menuText}`}>Контакты</p>
        </Link>
      </div>
      <Link to="/" className={`${headerStyles.logo}`}>
        <img src={require("../../images/logo2.jpg")} alt="логотип" width={100} />
      </Link>
    </header>
  );
}

export default AppHeader;
