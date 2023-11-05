import styles from "./pages-styles.module.css";

function AboutUsPage() {
  return (
    <div className={styles.aboutusMain}>
      <div className={styles.aboutus}>
        <div className={styles.aboutusImg}>
          <img
            src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/LA8J/Y29tV79gk/SHI90452.jpg"
            width="auto"
            height="100%"
            alt="girls"
          />
        </div>{" "}
        <div>
          <p className={`${styles.aboutusText}`}>
            Всем привет! 👋🏻 <br /> <br />
            Мы - Лейсан, Юля и Айгуль - именно эти лица стоят за всеми нашими
            интерьерами.
            <br /> <br />
            Кто -то мечтал об этой профессии с самого детства, а кто-то прошел
            через свой ремонт, и понял, что больше без запаха штукатурки и
            постоянных творческих мозговых штурмов жить не может 😂
            <br /> <br />
            Уже более 7 лет мы вместе создаем для вас интерьеры мечты, за нашими
            плечами огромный путь не только проектной работы, но и ведения
            строек, ведь именно в процессе реализации приобретается реальный
            опыт, и именно тут происходит та магия, ради которой мы и работаем -
            когда картинка, рожденная у тебя в голове превращается в реальный
            интерьер, в котором начинают жить реальные люди и благодарят тебя за
            это! Это волшебно!💫 <br /> <br />
            <br />
          </p>
          <p className={`${styles.aboutusText}`}>Мы перфекционисты! </p>
          <ul>
            <li>
              не любим рисовать картинки «в стол», нам важно, чтобы каждый наш
              проект был реализован
            </li>
            <li> очень любим решать сложные задачи</li>
            <li>
              любим когда все четко и по полочкам постоянно оптимизируем свой
              рабочий процесс
            </li>
            <li> постоянно растем, развиваемся и обучаемся</li>
            <li> очень трудолюбивы, и делаем обычно даже больше, чем должны</li>
          </ul>
          <p className={`${styles.aboutusText}`}>
            А самое главное, что мы слушаем и слышим каждого клиента, благодаря
            чему каждый проект получается уникальным и индивидуальным! И хотя у
            нас схожие вкусы и взгляды, мы очень много спорим по каждому узлу,
            но именно в этих спорах и рождается истина - то самое верное и
            правильное решение! Мы обожаем свою работу!
          </p>{" "}
        </div>
      </div>{" "}
      <div className={styles.girlPhotos}>
        <div className={styles.girlPhoto}>
          <img
            src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/LA8J/Y29tV79gk/SHI90397.jpg"
            alt="girl"
          />
          <h5>Юлия Тонгузова</h5> <p>главный дизайнер</p>
        </div>
        <div className={styles.girlPhoto}>
          <img
            src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/LA8J/Y29tV79gk/SHI90638.jpg"
            alt="girl"
          />
          <h5>Лейсан Калимуллина</h5> <p>главный дизайнер</p>
        </div>
        <div className={styles.girlPhoto}>
          <img
            src="https://thumb.cloud.mail.ru/weblink/thumb/xw1/LA8J/Y29tV79gk/SHI90844.jpg"
            alt="girl"
          />
          <h5>Айгуль Серодеденко</h5>{" "}
          <p>комплектатор, декоратор, организатор пространства</p>
        </div>
      </div>
      <p className={`${styles.aboutusTextCenter}`}> Мы обожаем свою работу! ❤️</p>
    </div>
  );
}

export default AboutUsPage;
