import headerStyles from "./app-footer.module.css";


function AppFooter() {
  return (
    <footer className={`${headerStyles.footer} `}>
      <p className={`${headerStyles.text} `}>2023 год, Казань</p>
    </footer>
  );
}

export default AppFooter;
