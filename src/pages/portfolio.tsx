import { Link } from "react-router-dom";
import { portfolioInfo2 } from "../utils/data";
import styles from "./pages-styles.module.css";

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <h2>Проекты</h2>
      <div className={styles.portfolioImages}>
        {portfolioInfo2.map((item) => (
          <Link
            to={`/portfolio/${item.id}`}
            key={item.id}
            style={{ textDecoration: "none" }}
          >
            <div className={`${styles.portfolioImage} ${styles.hoverOpacity}`}>
              <img src={item.mainFoto} alt={item.title} />
              <p className={styles.portfolioTitle}>{item.title}</p>
            </div>{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
