import styles from './ContactsPage.module.css';

/**
 * Страница контактов
 */
function ContactsPage() {
  return (
    <div className={styles.contactsPage}>
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Контакты</h1>
          <p className={styles.pageDescription}>
            Свяжитесь с нами удобным для вас способом
          </p>
        </div>
      </section>

      <section className={styles.contactsSection}>
        <div className={styles.container}>
          <div className={styles.contactsGrid}>
            {/* Телефон */}
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>📞</div>
              <h2 className={styles.cardTitle}>Телефон</h2>
              <a href="tel:+79872647000" className={styles.contactLink}>
                +7 (987) 264-70-00
              </a>
              <p className={styles.cardDescription}>
                Звоните в рабочее время с 9:00 до 18:00
              </p>
            </div>

            {/* WhatsApp */}
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>💬</div>
              <h2 className={styles.cardTitle}>WhatsApp</h2>
              <a 
                href="https://api.whatsapp.com/send/?phone=79872647000&text&type=phone_number&app_absent=0"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать в WhatsApp
              </a>
              <p className={styles.cardDescription}>
                Быстрая связь через мессенджер
              </p>
            </div>

            {/* Telegram */}
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>✈️</div>
              <h2 className={styles.cardTitle}>Telegram</h2>
              <a 
                href="https://t.me/z1ganshin"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать в Telegram
              </a>
              <p className={styles.cardDescription}>
                Оперативная связь в любое время
              </p>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>Режим работы</h2>
            <div className={styles.infoContent}>
              <p className={styles.infoText}>
                <strong>Понедельник - Пятница:</strong> 9:00 - 18:00
              </p>
              <p className={styles.infoText}>
                <strong>Суббота - Воскресенье:</strong> Выходной
              </p>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h2 className={styles.infoTitle}>Как с нами связаться</h2>
            <div className={styles.infoContent}>
              <p className={styles.infoText}>
                Вы можете связаться с нами по телефону в рабочее время или написать в мессенджеры WhatsApp и Telegram. 
                Мы ответим на все ваши вопросы и поможем подобрать необходимые материалы.
              </p>
              <p className={styles.infoText}>
                Для оформления заказа или получения консультации просто выберите удобный способ связи выше.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactsPage;
