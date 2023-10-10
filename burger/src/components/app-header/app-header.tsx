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
        <Link to="/feed" className={`${headerStyles.menu}`}>
          <p className={`${headerStyles.menuText}`}>Портфолио</p>
        </Link>
        <Link to="/feed" className={`${headerStyles.menu}`}>
          <p className={`${headerStyles.menuText}`}>Услуги и цены</p>
        </Link>
        <Link to="/feed" className={`${headerStyles.menu}`}>
          <p className={`${headerStyles.menuText}`}>Контакты</p>
        </Link>
      </div>
      <Link to="/" className={`${headerStyles.logo}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="62.000000pt"
          height="78.000000pt"
          viewBox="0 0 62.000000 78.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,78.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M138 717 c12 -14 20 -406 8 -425 -5 -9 15 -12 86 -12 82 0 95 -2 106
          -20 13 -21 42 -28 42 -10 0 6 -4 10 -10 10 -5 0 -10 5 -10 10 0 6 11 10 25 10
          22 0 25 4 25 36 l0 35 -27 -21 c-35 -27 -41 -13 -19 45 32 84 124 159 172 141
          27 -10 11 -88 -37 -184 l-44 -87 -80 -42 c-96 -52 -155 -109 -155 -152 0 -35
          12 -45 45 -37 36 9 87 57 147 139 29 40 60 77 68 84 8 7 12 13 7 13 -4 0 11
          36 33 80 44 88 59 155 41 189 -38 70 -196 -46 -226 -168 -12 -46 -12 -46 -60
          -49 -26 -2 -51 0 -56 5 -14 14 -23 377 -10 401 11 21 10 22 -35 22 -36 0 -44
          -3 -36 -13z m285 -519 c-103 -138 -145 -177 -177 -165 -12 5 -13 12 -5 35 13
          37 39 61 113 106 62 37 85 45 69 24z"
            />
          </g>
        </svg>
      </Link>
    </header>
  );
}

export default AppHeader;
