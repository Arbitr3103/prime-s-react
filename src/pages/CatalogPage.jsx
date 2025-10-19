import { Link } from 'react-router-dom';
import styles from './CatalogPage.module.css';

/**
 * Страница каталога продукции
 */
function CatalogPage() {
  const products = [
    {
      id: 'sandwpan',
      title: 'Сэндвич-панели',
      description: 'Современные строительные материалы для быстрого возведения зданий. Отличная теплоизоляция и прочность.',
      features: ['Высокая теплоизоляция', 'Быстрый монтаж', 'Долговечность']
    },
    {
      id: 'profnastil',
      title: 'Профнастил',
      description: 'Надежный материал для кровли и облицовки фасадов. Широкий выбор профилей и цветов.',
      features: ['Устойчивость к коррозии', 'Различные профили', 'Большой выбор цветов']
    },
    {
      id: 'fasonelement',
      title: 'Фасонные элементы',
      description: 'Доборные элементы для завершения кровельных работ. Обеспечивают герметичность и эстетичный вид.',
      features: ['Точная геометрия', 'Защита от протечек', 'Эстетичный вид']
    },
    {
      id: 'snegozader',
      title: 'Снегозадержатели',
      description: 'Системы безопасности для защиты от схода снега с крыши. Надежная защита людей и имущества.',
      features: ['Безопасность', 'Надежное крепление', 'Различные типы']
    },
    {
      id: 'vodostsist',
      title: 'Водосточные системы',
      description: 'Эффективный отвод воды для защиты вашего здания. Предотвращение разрушения фундамента и фасада.',
      features: ['Эффективный водоотвод', 'Долговечность', 'Простой монтаж']
    }
  ];

  return (
    <div className={styles.catalogPage}>
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Каталог продукции</h1>
          <p className={styles.pageDescription}>
            Полный ассортимент строительных материалов для вашего проекта
          </p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.container}>
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.cardContent}>
                  <h2 className={styles.productTitle}>{product.title}</h2>
                  <p className={styles.productDescription}>{product.description}</p>
                  
                  <div className={styles.features}>
                    <h3 className={styles.featuresTitle}>Преимущества:</h3>
                    <ul className={styles.featuresList}>
                      {product.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contacts" className={styles.contactButton}>
                    Связаться с нами
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CatalogPage;
