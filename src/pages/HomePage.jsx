import styles from './HomePage.module.css';

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
          <div className={styles.projectsNote}>
            <p>Здесь будет слайдер с фотографиями выполненных объектов</p>
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
                {/* Здесь будет изображение профнастила */}
              </div>
              <h3 className={styles.cardTitle}>Профнастил</h3>
              <a href="/catalog/profnastil" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </a>
            </div>

            {/* Сэндвич-панели */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                {/* Здесь будет изображение сэндвич-панелей */}
              </div>
              <h3 className={styles.cardTitle}>Сэндвич панели</h3>
              <a href="/catalog/sandwpan" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </a>
            </div>

            {/* Фасонные элементы */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                {/* Здесь будет изображение фасонных элементов */}
              </div>
              <h3 className={styles.cardTitle}>Фасонные элементы</h3>
              <a href="/catalog/fasonelement" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </a>
            </div>

            {/* Снегозадержатель трубчатый */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                {/* Здесь будет изображение снегозадержателя */}
              </div>
              <h3 className={styles.cardTitle}>Снегозадержатель трубчатый</h3>
              <a href="/catalog/snegozader" className={styles.cardButton}>
                ПОДРОБНЕЕ
              </a>
            </div>

            {/* Водосточная система */}
            <div className={styles.catalogCard}>
              <div className={styles.cardImage}>
                {/* Здесь будет изображение водосточной системы */}
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
