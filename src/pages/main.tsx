import SliderMain from "../components/slider/slider";
import styles from "./mainPage-styles.module.css";

function MainPage() {
  return (
    <div className={styles.app}>
      <div className={`${styles.main}`}>
        <SliderMain />{" "}
        <div>
          <p className={`${styles.aboutusText}`}>
            <h2>
              Добро пожаловать в LJinterior – ваш партнер в создании невероятных
              интерьеров в Казани!
            </h2>{" "}
            Уже более 6 лет мы вместе создаем для вас интерьеры мечты, за нашими
            плечами огромный путь не только проектной работы, но и ведения
            строек, ведь именно в процессе реализации приобретается реальный
            опыт, и именно тут происходит та магия, ради которой мы и работаем -
            когда картинка, рожденная у тебя в голове превращается в реальный
            интерьер, в котором начинают жить реальные люди и благодарят тебя за
            это! Это волшебно! <br /> <br /> <br />
            <br />
          </p>{" "}
        </div>
        <div className={styles.boxWithImage}>
          <div className={styles.mainImg}>
            {" "}
            <img
              src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/LA8J/Y29tV79gk/SHI91121.jpg"
              width="auto"
              height="100%"
              alt="girls"
            />{" "}
          </div>
          <p className={`${styles.aboutusText}`}>
            <h3>Интерьер дома вашей мечты начинается с нас!</h3> Уже более 7 лет{" "}
            <br /> <br /> <br />
            <br />
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
