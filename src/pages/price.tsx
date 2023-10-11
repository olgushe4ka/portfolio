import styles from "./pages-styles.module.css";

function Price() {
  return (
    <>
      <div className={`${styles.main} `}>
        <div>
          <div className={styles.pricePage}>
            <h2 className={styles.pricePageTitle}>ПОЛНЫЙ ДИЗАЙН-ПРОЕКТ</h2>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>01</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                СОЗДАНИЕ ТЗ, ОБМЕР
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Анкетирование, просмотр референсов, переработка анкеты в ТЗ
                </li>
                <li className={styles.pricePageStepBoxLi}>
                  Замеры помещения и сбор информации, обмерный план
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>02</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                ПРОЕКТИРОВАНИЕ ПРОСТРАНСТВА, КОЛЛАЖИ
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Разработка планировки на плоскости
                </li>
                <li className={styles.pricePageStepBoxLi}>
                  Разработка концептуальных коллажей помещений
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>03</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                ВИЗУАЛИЗАЦИИ
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Визуализации каждого помещения
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>04</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                СХЕМЫ РЕАЛИЗАЦИИ, КОМПЛЕКТАЦИЯ
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Полный комплект чертежей для реализации проекта + чертежи
                  мебели
                </li>
                <li className={styles.pricePageStepBoxLi}>
                  Разработка файла комплектации (сводные ведомости)
                </li>
              </ul>
            </div>
            <div className={styles.pricePagePriceBox}>
              <p>Стоимость </p>{" "}
              <p className={styles.pricePagePriceBoxAmmount}> 2000 руб</p>{" "}
              <p>/кв.м.</p>
            </div>
          </div>

          <div className={styles.pricePage}>
            <h2 className={styles.pricePageTitle}>
              КОНЦЕПТУАЛЬНЫЙ ДИЗАЙН-ПРОЕКТ
            </h2>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>01</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                СОЗДАНИЕ ТЗ, ОБМЕР
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Анкетирование, просмотр референсов, переработка анкеты в ТЗ
                </li>
                <li className={styles.pricePageStepBoxLi}>
                  Замеры помещения и сбор информации, обмерный план
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>02</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                ПРОЕКТИРОВАНИЕ ПРОСТРАНСТВА
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Разработка планировки на плоскости
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>03</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>КОЛЛАЖИ</h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Разработка концептуальных коллажей
                </li>
              </ul>
            </div>
            <div className={styles.pricePageStepBox}>
              <p className={styles.pricePageNumber}>04</p>{" "}
              <h3 className={styles.pricePageStepBoxDescription}>
                СХЕМЫ РЕАЛИЗАЦИИ
              </h3>
              <ul className={styles.pricePageStepBoxUl}>
                <li className={styles.pricePageStepBoxLi}>
                  Полный комплект чертежей для реализации проекта
                </li>
              </ul>
            </div>
            <div className={styles.pricePagePriceBox}>
              <p>Стоимость </p>{" "}
              <p className={styles.pricePagePriceBoxAmmount}> 1600 руб</p>{" "}
              <p>/кв.м.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
