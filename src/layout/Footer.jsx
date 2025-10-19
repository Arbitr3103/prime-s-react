import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

/**
 * Компонент подвала сайта
 * Включает логотип, контакты и социальные сети
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Логотип и описание */}
          <div className={styles.footerSection}>
            <Link to="/" className={styles.logo}>
              PRIME-S
            </Link>
            <p className={styles.description}>
              Производство и продажа строительных материалов
            </p>
          </div>

          {/* Навигация */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Навигация</h3>
            <nav className={styles.footerNav}>
              <Link to="/" className={styles.footerLink}>Главная</Link>
              <Link to="/catalog" className={styles.footerLink}>Каталог</Link>
              <Link to="/contacts" className={styles.footerLink}>Контакты</Link>
              <Link to="/about" className={styles.footerLink}>О компании</Link>
            </nav>
          </div>

          {/* Контакты */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Контакты</h3>
            <div className={styles.contacts}>
              <a href="tel:+79872647000" className={styles.contactLink}>
                +7 (987) 264-70-00
              </a>
            </div>
          </div>

          {/* Социальные сети */}
          <div className={styles.footerSection}>
            <h3 className={styles.sectionTitle}>Мы в соцсетях</h3>
            <div className={styles.socialLinks}>
              <a 
                href="https://api.whatsapp.com/send/?phone=79872647000&text&type=phone_number&app_absent=0" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                WhatsApp
              </a>
              <a 
                href="https://t.me/z1ganshin" 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} PRIME-S. Все права защищены.
          </p>
          <p className={styles.developer}>
            Разработано <a href="https://oceanit.pro/" target="_blank" rel="noopener noreferrer">DEEP OCEAN IT</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
