import styles from './AboutPage.module.css';

/**
 * Страница "О компании"
 */
function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>О компании</h1>
          <p className={styles.pageDescription}>
            PRIME-S — ваш надежный партнер в строительстве
          </p>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          {/* Основная информация */}
          <div className={styles.infoBlock}>
            <h2 className={styles.blockTitle}>Кто мы</h2>
            <div className={styles.blockContent}>
              <p className={styles.text}>
                PRIME-S — это компания, специализирующаяся на производстве и продаже 
                высококачественных строительных материалов. Мы работаем на рынке строительных 
                материалов и предлагаем широкий ассортимент продукции для промышленного 
                и гражданского строительства.
              </p>
              <p className={styles.text}>
                Наша компания зарекомендовала себя как надежный поставщик качественных 
                материалов, который ценит каждого клиента и стремится к долгосрочному 
                сотрудничеству.
              </p>
            </div>
          </div>

          {/* Наша продукция */}
          <div className={styles.infoBlock}>
            <h2 className={styles.blockTitle}>Наша продукция</h2>
            <div className={styles.blockContent}>
              <div className={styles.productsGrid}>
                <div className={styles.productItem}>
                  <h3 className={styles.productTitle}>Сэндвич-панели</h3>
                  <p className={styles.productText}>
                    Современные строительные материалы для быстрого возведения зданий 
                    с отличной теплоизоляцией
                  </p>
                </div>
                <div className={styles.productItem}>
                  <h3 className={styles.productTitle}>Профнастил</h3>
                  <p className={styles.productText}>
                    Надежный материал для кровли и облицовки фасадов с широким выбором 
                    профилей и цветов
                  </p>
                </div>
                <div className={styles.productItem}>
                  <h3 className={styles.productTitle}>Фасонные элементы</h3>
                  <p className={styles.productText}>
                    Доборные элементы для завершения кровельных работ и обеспечения 
                    герметичности
                  </p>
                </div>
                <div className={styles.productItem}>
                  <h3 className={styles.productTitle}>Снегозадержатели</h3>
                  <p className={styles.productText}>
                    Системы безопасности для защиты от схода снега с крыши
                  </p>
                </div>
                <div className={styles.productItem}>
                  <h3 className={styles.productTitle}>Водосточные системы</h3>
                  <p className={styles.productText}>
                    Эффективный отвод воды для защиты здания от разрушения
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Наши преимущества */}
          <div className={styles.infoBlock}>
            <h2 className={styles.blockTitle}>Наши преимущества</h2>
            <div className={styles.blockContent}>
              <div className={styles.advantagesGrid}>
                <div className={styles.advantageItem}>
                  <div className={styles.advantageIcon}>✓</div>
                  <h3 className={styles.advantageTitle}>Качество</h3>
                  <p className={styles.advantageText}>
                    Все материалы соответствуют ГОСТам и имеют необходимые сертификаты
                  </p>
                </div>
                <div className={styles.advantageItem}>
                  <div className={styles.advantageIcon}>✓</div>
                  <h3 className={styles.advantageTitle}>Цены</h3>
                  <p className={styles.advantageText}>
                    Конкурентные цены благодаря прямым поставкам от производителя
                  </p>
                </div>
                <div className={styles.advantageItem}>
                  <div className={styles.advantageIcon}>✓</div>
                  <h3 className={styles.advantageTitle}>Сроки</h3>
                  <p className={styles.advantageText}>
                    Оперативная обработка заказов и быстрая доставка
                  </p>
                </div>
                <div className={styles.advantageItem}>
                  <div className={styles.advantageIcon}>✓</div>
                  <h3 className={styles.advantageTitle}>Консультации</h3>
                  <p className={styles.advantageText}>
                    Профессиональная помощь в подборе материалов для вашего проекта
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Призыв к действию */}
          <div className={styles.ctaBlock}>
            <h2 className={styles.ctaTitle}>Готовы начать сотрудничество?</h2>
            <p className={styles.ctaText}>
              Свяжитесь с нами для получения консультации и расчета стоимости
            </p>
            <a href="/contacts" className={styles.ctaButton}>
              Связаться с нами
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
