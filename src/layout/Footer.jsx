import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import styles from './Footer.module.css';

/**
 * Компонент Яндекс карты
 */
function YandexMap() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Динамическая загрузка Яндекс карт API
    if (!window.ymaps) {
      const script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
      script.async = true;
      script.onload = () => {
        window.ymaps.ready(() => {
          if (mapRef.current) {
            const map = new window.ymaps.Map(mapRef.current, {
              center: [55.713872, 52.406429], // г. Набережные Челны, ул. Машиностроительная 39/4
              zoom: 16,
              controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
            });

            // Добавляем маркер
            const placemark = new window.ymaps.Placemark(
              [55.713872, 52.406429],
              {
                balloonContent: 'ООО ПраймСтрой<br>г. Набережные Челны, ул. Машиностроительная 39/4, 2 этаж, офис 7, офис 8'
              },
              {
                preset: 'islands#blueDotIcon'
              }
            );

            map.geoObjects.add(placemark);
          }
        });
      };
      document.head.appendChild(script);
    } else {
      window.ymaps.ready(() => {
        if (mapRef.current) {
          const map = new window.ymaps.Map(mapRef.current, {
            center: [55.713872, 52.406429],
            zoom: 16,
            controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
          });

          const placemark = new window.ymaps.Placemark(
            [55.713872, 52.406429],
            {
              balloonContent: 'ООО ПраймСтрой<br>г. Набережные Челны, ул. Машиностроительная 39/4, 2 этаж, офис 7, офис 8'
            },
            {
              preset: 'islands#blueDotIcon'
            }
          );

          map.geoObjects.add(placemark);
        }
      });
    }
  }, []);

  return <div ref={mapRef} className={styles.mapContainer} />;
}

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
        </div>

        {/* Яндекс карта */}
        <div className={styles.mapSection}>
          <YandexMap />
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
