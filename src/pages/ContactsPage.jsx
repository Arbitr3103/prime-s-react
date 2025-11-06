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
              <div className={styles.phoneNumbers}>
                <a href="tel:+79868267777" className={styles.contactLink}>
                  +7 (986) 826-77-77
                </a>
                <a href="tel:+79868227777" className={styles.contactLink}>
                  +7 (986) 822-77-77
                </a>
              </div>
              <p className={styles.cardDescription}>
                Звоните в рабочее время с 9:00 до 18:00
              </p>
            </div>

            {/* WhatsApp */}
            <div className={styles.contactCard}>
              <div className={styles.cardIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="#25D366"/>
                </svg>
              </div>
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
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#0088cc"/>
                  <path d="M5.491 11.74l11.57-4.461c.537-.194 1.006.131.832.943l.002-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.18-.357.295.6.99l2.074-2.033 4.31 3.205c.791.445 1.357.214 1.56-.75l2.695-12.695c.211-.89-.406-1.293-1.01-.92l-13.99 5.28z" fill="#ffffff"/>
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
