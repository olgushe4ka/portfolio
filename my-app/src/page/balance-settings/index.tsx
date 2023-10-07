import React from 'react';
import headerStyles from "./styles.module.css"

function AppHeader() {
  return (
    <header className={headerStyles.header + ' pl-15 pr-15 pb-0 pt-0'}>
      <div className={headerStyles.boxLeft}></div>
      <p className="text text_type_main-small">Личный кабинет</p>
    </header>
  );
}

export default AppHeader;