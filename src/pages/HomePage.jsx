import styles from './HomePage.module.css';
import profnastilImg from '../assets/images/products/profnastil.jpg'; // Профнастил - черный волнистый
import sandwichImg from '../assets/images/products/sandwich.png'; // Сэндвич-панели - слоистая панель
import fasonnieImg from '../assets/images/products/fasonnie.jpg'; // Фасонные элементы - угловой элемент
import snegozaderImg from '../assets/images/products/snegozader.jpg'; // Снегозадержатель - трубки
import vodostokImg from '../assets/images/products/vodostok.jpg'; // Водосточная система
import project1 from '../assets/images/projects/project1.jpg';
import project2 from '../assets/images/projects/project2.jpg';
import project3 from '../assets/images/projects/project3.jpg';
import project4 from '../assets/images/projects/project4.jpg';
import project5 from '../assets/images/projects/project5.jpg';
import project6 from '../assets/images/projects/project6.jpg';

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
              Реализация сэндвич - панелей, профнастила, доборных элементов. Изделия из металла за 1 день!
            </p>
          </div>
        </div>
      </section>

      {/* Секция "Наши объекты" */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>НАШИ ОБЪЕКТЫ</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <img src={project1} alt="Объект 1" className={styles.projectImage} />
            </div>
            <div className={styles.projectCard}>
              <img src={project2} alt="Объект 2" className={styles.projectImage} />
            </div>
            <div className={styles.projectCard}>
              <img src={project3} alt="Объект 3" className={styles.projectImage} />
            </div>
            <div className={styles.projectCard}>
              <img src={project4} alt="Объект 4" className={styles.projectImage} />
            </div>
            <div className={styles.projectCard}>
              <img src={project5} alt="Объект 5" className={styles.projectImage} />
            </div>
            <div className={styles.projectCard}>
              <img src={project6} alt="Объект 6" className={styles.projectImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Секция каталога */}
      <section id="catalog" className={styles.catalogSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>КАТАЛОГ ПРОДУКЦИИ</h2>
          <div className={styles.catalogGrid}>
            {/* Профнастил */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                <img src={profnastilImg} alt="Профнастил" />
              </div>
              <h3 className={styles.cardTitle}>Профнастил</h3>
              <a href="/catalog/profnastil" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </a>
            </div>

            {/* Сэндвич-панели */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                <img src={sandwichImg} alt="Сэндвич панели" />
              </div>
              <h3 className={styles.cardTitle}>Сэндвич панели</h3>
              <a href="/catalog/sandwpan" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </a>
            </div>

            {/* Фасонные элементы */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                <img src={fasonnieImg} alt="Фасонные элементы" />
              </div>
              <h3 className={styles.cardTitle}>Фасонные элементы</h3>
              <a href="/catalog/fasonelement" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </a>
            </div>

            {/* Снегозадержатель трубчатый */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                <img src={snegozaderImg} alt="Снегозадержатель трубчатый" />
              </div>
              <h3 className={styles.cardTitle}>Снегозадержатель трубчатый</h3>
              <a href="/catalog/snegozader" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </a>
            </div>

            {/* Водосточная система */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                <img src={vodostokImg} alt="Водосточная система" />
              </div>
              <h3 className={styles.cardTitle}>Водосточная система</h3>
              <a href="/catalog/vodostsist" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </a>
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
              <p className={styles.whyUsText}>Большой выбор металлопроката в наличии</p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>2</div>
              <p className={styles.whyUsText}>Вся наша продукция имеет сертификацию</p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>3</div>
              <p className={styles.whyUsText}>Гибкие цены, персональный подход</p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>4</div>
              <p className={styles.whyUsText}>Собственное производство</p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>5</div>
              <p className={styles.whyUsText}>Быстрая доставка по региону</p>
            </div>
            <div className={styles.whyUsItem}>
              <div className={styles.whyUsNumber}>6</div>
              <p className={styles.whyUsText}>Свой парк грузового транспорта</p>
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
              PRIME-S — надежный поставщик качественных строительных материалов. 
              Мы специализируемся на производстве и продаже сэндвич-панелей, профнастила, 
              фасонных элементов и комплектующих для кровли.
            </p>
            <p className={styles.aboutText}>
              Наша цель — предоставить клиентам высококачественную продукцию 
              по конкурентным ценам с оперативной доставкой.
            </p>
          </div>
        </div>
      </section>

      {/* Секция контактов */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Свяжитесь с нами</h2>
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <h3 className={styles.contactTitle}>Телефон</h3>
                <a href="tel:+79872647000" className={styles.contactLink}>
                  +7 (987) 264-70-00
                </a>
              </div>
              <div className={styles.contactItem}>
                <h3 className={styles.contactTitle}>Мессенджеры</h3>
                <div className={styles.messengers}>
                  <a 
                    href="https://api.whatsapp.com/send/?phone=79872647000&text&type=phone_number&app_absent=0"
                    className={styles.messengerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a 
                    href="https://t.me/z1ganshin"
                    className={styles.messengerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
