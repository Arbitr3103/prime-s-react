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
            {/* Телефон 1 */}
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>📞</div>
              <h2 className={styles.cardTitle}>Телефон</h2>
              <a href="tel:+79868267777" className={styles.contactLink}>
                +7 (986) 826-77-77
              </a>
              <p className={styles.cardDescription}>
                Звоните в рабочее время с 9:00 до 18:00
              </p>
            </div>

            {/* Телефон 2 */}
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>📞</div>
              <h2 className={styles.cardTitle}>Телефон</h2>
              <a href="tel:+79868227777" className={styles.contactLink}>
                +7 (986) 822-77-77
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
                href="https://api.whatsapp.com/send/?phone=79868267777&text&type=phone_number&app_absent=0"
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
              <div className={styles.cardIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
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

            {/* Email */}
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>📧</div>
              <h2 className={styles.cardTitle}>Email</h2>
              <a 
                href="mailto:info@prime-s.ru"
                className={styles.contactLink}
              >
                info@prime-s.ru
              </a>
              <p className={styles.cardDescription}>
                Отправьте нам письмо с вашим вопросом
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
