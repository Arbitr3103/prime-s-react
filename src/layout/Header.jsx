import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

/**
 * Компонент шапки сайта
 * Включает логотип, навигацию и мобильное меню
 */
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          {/* Логотип */}
          <Link to="/" className={styles.logo}>
            <span className={styles.logoText}>PRIME-S</span>
          </Link>

          {/* Навигация для десктопа */}
          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>Главная</Link>
            <Link to="/catalog" className={styles.navLink}>Каталог</Link>
            <Link to="/contacts" className={styles.navLink}>Контакты</Link>
            <Link to="/about" className={styles.navLink}>О компании</Link>
          </nav>

          {/* Кнопка мобильного меню */}
          <button 
            className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Меню"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <nav className={styles.mobileNav}>
            <Link to="/" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Главная
            </Link>
            <Link to="/catalog" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Каталог
            </Link>
            <Link to="/contacts" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Контакты
            </Link>
            <Link to="/about" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              О компании
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
