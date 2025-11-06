import { useParams, Link } from 'react-router-dom';
import styles from './ProductPage.module.css';
import profnastilImg from '../assets/images/products/profnastil.jpg';
import sandwichImg from '../assets/images/products/sandwich.jpg';
import fasonnieImg from '../assets/images/products/fasonnie.jpg';
import snegozaderImg from '../assets/images/products/snegozader.jpg';
import vodostokImg from '../assets/images/products/vodostok.png';

/**
 * Данные о продуктах
 */
const productsData = {
  profnastil: {
    title: 'Профнастил',
    image: profnastilImg,
    description: 'Надежный материал для кровли и облицовки фасадов. Широкий выбор профилей и цветов.',
    features: [
      'Устойчивость к коррозии',
      'Различные профили',
      'Большой выбор цветов',
      'Долговечность',
      'Легкий монтаж'
    ],
    applications: [
      'Кровельные работы',
      'Облицовка фасадов',
      'Заборы и ограждения',
      'Внутренняя отделка'
    ]
  },
  sandwpan: {
    title: 'Сэндвич-панели',
    image: sandwichImg,
    description: 'Современные строительные материалы для быстрого возведения зданий. Отличная теплоизоляция и прочность.',
    features: [
      'Высокая теплоизоляция',
      'Быстрый монтаж',
      'Долговечность',
      'Энергоэффективность',
      'Широкий выбор размеров'
    ],
    applications: [
      'Строительство складов',
      'Промышленные здания',
      'Торговые центры',
      'Офисные здания'
    ]
  },
  fasonelement: {
    title: 'Фасонные элементы',
    image: fasonnieImg,
    description: 'Доборные элементы для завершения кровельных работ. Обеспечивают герметичность и эстетичный вид.',
    features: [
      'Точная геометрия',
      'Защита от протечек',
      'Эстетичный вид',
      'Долговечность',
      'Простой монтаж'
    ],
    applications: [
      'Завершение кровельных работ',
      'Оформление углов',
      'Защита стыков',
      'Декоративные элементы'
    ]
  },
  snegozader: {
    title: 'Снегозадержатель трубчатый',
    image: snegozaderImg,
    description: 'Системы безопасности для защиты от схода снега с крыши. Надежная защита людей и имущества.',
    features: [
      'Безопасность',
      'Надежное крепление',
      'Различные типы',
      'Устойчивость к нагрузкам',
      'Коррозионная стойкость'
    ],
    applications: [
      'Защита от схода снега',
      'Безопасность кровли',
      'Защита водосточных систем',
      'Предотвращение повреждений'
    ]
  },
  vodostsist: {
    title: 'Водосточная система',
    image: vodostokImg,
    description: 'Эффективный отвод воды для защиты вашего здания. Предотвращение разрушения фундамента и фасада.',
    features: [
      'Эффективный водоотвод',
      'Долговечность',
      'Простой монтаж',
      'Различные диаметры',
      'Коррозионная стойкость'
    ],
    applications: [
      'Отвод воды с кровли',
      'Защита фундамента',
      'Защита фасада',
      'Предотвращение затоплений'
    ]
  }
};

/**
 * Страница детальной информации о продукте
 */
function ProductPage() {
  const { productId } = useParams();
  const product = productsData[productId];

  if (!product) {
    return (
      <div className={styles.productPage}>
        <div className={styles.container}>
          <h1>Продукт не найден</h1>
          <Link to="/catalog" className={styles.backLink}>
            Вернуться в каталог
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.productPage}>
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <Link to="/catalog" className={styles.backLink}>
            ← Вернуться в каталог
          </Link>
          <h1 className={styles.pageTitle}>{product.title}</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.productContent}>
            <div className={styles.productImage}>
              <img src={product.image} alt={product.title} />
            </div>

            <div className={styles.productInfo}>
              <h2 className={styles.sectionTitle}>Описание</h2>
              <p className={styles.description}>{product.description}</p>

              <h2 className={styles.sectionTitle}>Преимущества</h2>
              <ul className={styles.featuresList}>
                {product.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>

              <h2 className={styles.sectionTitle}>Применение</h2>
              <ul className={styles.applicationsList}>
                {product.applications.map((application, index) => (
                  <li key={index} className={styles.applicationItem}>
                    {application}
                  </li>
                ))}
              </ul>

              <div className={styles.contactSection}>
                <h2 className={styles.sectionTitle}>Заинтересованы?</h2>
                <p className={styles.contactText}>
                  Свяжитесь с нами для получения подробной информации и расчета стоимости
                </p>
                <Link to="/contacts" className={styles.contactButton}>
                  Связаться с нами
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;

