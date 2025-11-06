import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import profnastilImg from "../assets/images/products/profnastil.jpg"; // Профнастил - черный волнистый
import sandwichImg from "../assets/images/products/sandwich.jpg"; // Сэндвич-панели - слоистая панель
import fasonnieImg from "../assets/images/products/fasonnie.jpg"; // Фасонные элементы - угловой элемент
import snegozaderImg from "../assets/images/products/snegozader.jpg"; // Снегозадержатель - трубки
import vodostokImg from "../assets/images/products/vodostok.png"; // Водосточная система
import project1 from "../assets/images/projects/project1.jpg";
import project2 from "../assets/images/projects/project2.jpg";
import project3 from "../assets/images/projects/project3.jpg";
import project4 from "../assets/images/projects/project4.jpg";
import project5 from "../assets/images/projects/project5.jpg";
import project6 from "../assets/images/projects/project6.jpg";

/**
 * Главная страница сайта
 */
function HomePage() {
  return (
    <div className={styles.homePage}>
      {/* Hero секция */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>ПраймСтрой</h1>
            <p className={styles.heroSubtitle}>
              КАЧЕСТВО, НАДЕЖНОСТЬ И ДОВЕРИЕ
            </p>
            <p className={styles.heroDescription}>
              Реализация сэндвич - панелей, профнастила, доборных элементов.
              Изделия из металла за 1 день!
            </p>
          </div>
        </div>
      </section>

      {/* Секция "Наши объекты" с каруселью */}
      <ProjectsCarousel />

      {/* Секция каталога */}
      <section id="catalog" className={styles.catalogSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>КАТАЛОГ ПРОДУКЦИИ</h2>

          {/* Верхний ряд: 3 товара (как на оригинале): Сэндвич панели, Водосточная система, Снегозадержатель */}
          <div className={styles.catalogTopRow}>
            {/* Сэндвич-панели */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                <img src={sandwichImg} alt="Сэндвич панели" />
              </div>
              <h3 className={styles.cardTitle}>Сэндвич панели</h3>
              <Link to="/catalog/sandwpan" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </Link>
            </div>

            {/* Водосточная система */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                <img src={vodostokImg} alt="Водосточная система" />
              </div>
              <h3 className={styles.cardTitle}>Водосточная система</h3>
              <Link to="/catalog/vodostsist" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </Link>
            </div>

            {/* Снегозадержатель трубчатый */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                <img src={snegozaderImg} alt="Снегозадержатель трубчатый" />
              </div>
              <h3 className={styles.cardTitle}>Снегозадержатель трубчатый</h3>
              <Link to="/catalog/snegozader" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </Link>
            </div>
          </div>

          {/* Нижний ряд: 2 товара: Профнастил, Фасонные элементы */}
          <div className={styles.catalogBottomRow}>
            {/* Профнастил */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                <img src={profnastilImg} alt="Профнастил" />
              </div>
              <h3 className={styles.cardTitle}>Профнастил</h3>
              <Link to="/catalog/profnastil" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </Link>
            </div>

            {/* Фасонные элементы */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                <img src={fasonnieImg} alt="Фасонные элементы" />
              </div>
              <h3 className={styles.cardTitle}>Фасонные элементы</h3>
              <Link to="/catalog/fasonelement" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Почему выбирают нас" */}
      <section className={styles.whyUsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleWhite}>Почему выбирают нас</h2>
          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>1</div>
              <p className={styles.whyUsText}>
                Большой выбор металлопроката в наличии
              </p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>2</div>
              <p className={styles.whyUsText}>
                Вся наша продукция имеет сертификацию
              </p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>3</div>
              <p className={styles.whyUsText}>
                Гибкие цены, персональный подход
              </p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>4</div>
              <p className={styles.whyUsText}>
                Загрузка без длительных очередей
              </p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>5</div>
              <p className={styles.whyUsText}>
                Опытные специалисты с 10 летним стажем
              </p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>6</div>
              <p className={styles.whyUsText}>
                Свой автопарк транспорта для доставок
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "О компании" */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>О компании</h2>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              ООО ПраймСтрой – компания, работающая на рынке строительных материалов с опытом более 10 лет. За это время команда приобрела и приумножила опыт работы по поставке сэндвич - панелей, а также по профилированным листам работающих по Поволжье, другим регионам России. Логистика и отточенный менеджмент позволяют с успехом достигать намеченных целей, современное производство – решать поставленные задачи качественно и в срок. На сегодняшний день ООО ПраймСтрой обеспечена долгосрочными договорами на поставку продукции от завода производителей. География наших продаж ежегодно расширяется.
            </p>
            <p className={styles.aboutText}>С Уважением, ООО ПраймСтрой</p>
          </div>
        </div>
      </section>

      {/* Секция контактов (как на оригинале) */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.contactHeading}>Наши контакты</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactGrid}>
              <div className={styles.contactColumn}>
                <p className={styles.contactText}>Офис :</p>
                <p className={styles.contactText}>
                  г. Набережные Челны, ул. Машиностроительная 39/4,
                  <br />2 этаж, офис 7, офис 8
                </p>

                <p className={styles.contactText}>Отдел продаж :</p>
                <p className={styles.contactText}>Тел : +7(986) - 826- 7777</p>
                <p className={styles.contactText}>Тел : +7(986) - 822- 7777</p>
                <a href="mailto:info@prime-s.ru" className={styles.contactText} style={{ textDecoration: 'underline' }}>
                  E-mail : info@prime-s.ru
                </a>

                <p className={styles.contactText}>Отдел бухгалтерии :</p>
                <a href="mailto:buh@prime-s.ru" className={styles.contactText} style={{ textDecoration: 'underline' }}>
                  E-mail : buh@prime-s.ru
                </a>

                <p className={styles.contactText}>ИНН 1650441170</p>
              </div>

              <div className={styles.contactColumn}>
                <p className={styles.contactText} style={{ fontWeight: 'bold' }}>Режим работы :</p>
                <p className={styles.contactText}>Пн - Пт : 8:00 - 17:00</p>
                <p className={styles.contactText}>Сб : 8:00 - 14:00</p>
                <p className={styles.contactText}>Перерыв с 12:00 - 12:30</p>
              </div>
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <a
                className={styles.messengerLink}
                href="https://api.whatsapp.com/send/?phone=79872647000&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: '12px' }}
              >
                Whatsapp
              </a>
              <a
                className={styles.messengerLink}
                href="https://t.me/z1ganshin"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

/**
 * Карусель объектов: крупные изображения, скролл-снэп, автоскролл
 */
function ProjectsCarousel() {
  const viewportRef = useRef(null);
  const items = [project1, project2, project3, project4, project5, project6];

  const scrollBySlides = (dir) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const width = viewport.clientWidth * 0.9;
    viewport.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <section className={styles.projectsCarouselSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>НАШИ ОБЪЕКТЫ</h2>
      </div>
      <div className={styles.carouselWrapper}>
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          aria-label="Назад"
          onClick={() => scrollBySlides(-1)}
        >
          ‹
        </button>
        <div ref={viewportRef} className={styles.carouselViewport}>
          <div className={styles.carouselTrack}>
            {items.map((src, i) => (
              <div className={styles.slide} key={i}>
                <img src={src} alt={`Объект ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          aria-label="Вперёд"
          onClick={() => scrollBySlides(1)}
        >
          ›
        </button>
      </div>
    </section>
  );
}
