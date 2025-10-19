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

      {/* Секция каталога */}
      <section id="catalog" className={styles.catalogSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наша продукция</h2>
          <div className={styles.catalogGrid}>
            {/* Сэндвич-панели */}
            <div className={styles.catalogCard}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Сэндвич-панели</h3>
                <p className={styles.cardDescription}>
                  Современные строительные материалы для быстрого возведения зданий
                </p>
                <a href="/catalog/sandwpan" className={styles.cardButton}>
                  Подробнее
                </a>
              </div>
            </div>

            {/* Профнастил */}
            <div className={styles.catalogCard}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Профнастил</h3>
                <p className={styles.cardDescription}>
                  Надежный материал для кровли и облицовки фасадов
                </p>
                <a href="/catalog/profnastil" className={styles.cardButton}>
                  Подробнее
                </a>
              </div>
            </div>

            {/* Фасонные элементы */}
            <div className={styles.catalogCard}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Фасонные элементы</h3>
                <p className={styles.cardDescription}>
                  Доборные элементы для завершения кровельных работ
                </p>
                <a href="/catalog/fasonelement" className={styles.cardButton}>
                  Подробнее
                </a>
              </div>
            </div>

            {/* Снегозадержатели */}
            <div className={styles.catalogCard}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Снегозадержатели</h3>
                <p className={styles.cardDescription}>
                  Системы безопасности для защиты от схода снега с крыши
                </p>
                <a href="/catalog/snegozader" className={styles.cardButton}>
                  Подробнее
                </a>
              </div>
            </div>

            {/* Водосточные системы */}
            <div className={styles.catalogCard}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Водосточные системы</h3>
                <p className={styles.cardDescription}>
                  Эффективный отвод воды для защиты вашего здания
                </p>
                <a href="/catalog/vodostsist" className={styles.cardButton}>
                  Подробнее
                </a>
              </div>
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
