import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './ProductPage.module.css';
import profnastilImg from '../assets/images/products/profnastil.jpg';
import profnastilC8Img from '../assets/images/products/profnastil-c8.jpg';
import profnastilC21Img from '../assets/images/products/profnastil-c21.jpg';
import profnastilHC35Img from '../assets/images/products/profnastil-hc35.jpg';
import profnastilHC44Img from '../assets/images/products/profnastil-hc44.jpg';
import profnastilH57Img from '../assets/images/products/profnastil-h57.jpg';
import profnastilH60Img from '../assets/images/products/profnastil-h60.jpg';
import profnastilH75Img from '../assets/images/products/profnastil-h75.jpg';
import profnastilH114_646Img from '../assets/images/products/profnastil-h114-646.jpg';
import profnastilH114_807Img from '../assets/images/products/profnastil-h114-807.jpg';
import profnastilCKH153Img from '../assets/images/products/profnastil-ckh153.jpg';
import profnastilH153Img from '../assets/images/products/profnastil-h153.jpg';
import profnastilH158Img from '../assets/images/products/profnastil-h158.jpg';
import colorPaletteProfnastilImg from '../assets/images/products/color-palette-profnastil.jpg';
import sandwichImg from '../assets/images/products/sandwich.jpg';
import sandwichStenovayaBazaltImg from '../assets/images/products/sandwich-stenovaya-bazalt.jpg';
import sandwichKrovelnayaBazaltImg from '../assets/images/products/sandwich-krovelnaya-bazalt.jpg';
import sandwichStenovayaPirImg from '../assets/images/products/sandwich-stenovaya-pir.jpg';
import sandwichKrovelnayaPirImg from '../assets/images/products/sandwich-krovelnaya-pir.jpg';
import fasonnieImg from '../assets/images/products/fasonnie.jpg';
import snegozaderImg from '../assets/images/products/snegozader.jpg';
import vodostokImg from '../assets/images/products/vodostok.png';

/**
 * Получение приблизительного цвета RAL по коду
 * Это упрощенная версия, для точных цветов нужен API или база данных RAL
 */
function getRALColor(code) {
  // Базовые цвета по диапазонам RAL
  const ralColors = {
    // Желтые (1000-1999)
    1004: '#E5BE01', 1005: '#CDA434', 1006: '#A48F7A', 1007: '#9D9101', 1011: '#8C6B3F',
    1012: '#E6D717', 1013: '#E5D68E', 1014: '#E5C616', 1015: '#D5AF4F', 1017: '#E5B539',
    1018: '#F5D033', 1019: '#F5C500', 1020: '#F5A623', 1021: '#F5A500', 1023: '#F5A500',
    1024: '#E5A500', 1026: '#F5A500', 1027: '#E5A500', 1028: '#F5A500', 1032: '#F5A500',
    1033: '#E5A500', 1034: '#F5A500', 1035: '#E5A500', 1037: '#F5A500',
    // Красные (2000-2999, 3000-3999)
    2000: '#CD5C5C', 2001: '#CD5C5C', 2002: '#CD5C5C', 2003: '#CD5C5C', 2004: '#CD5C5C',
    2008: '#CD5C5C', 2009: '#CD5C5C', 2010: '#CD5C5C', 2011: '#CD5C5C', 2012: '#CD5C5C',
    2013: '#CD5C5C', 3000: '#8B0000', 3001: '#8B0000', 3002: '#8B0000', 3003: '#8B0000',
    3004: '#8B0000', 3005: '#8B0000', 3007: '#8B0000', 3009: '#8B0000', 3011: '#8B0000',
    3012: '#8B0000', 3013: '#8B0000', 3014: '#8B0000', 3015: '#8B0000', 3016: '#8B0000',
    3017: '#8B0000', 3018: '#8B0000', 3020: '#8B0000', 3022: '#8B0000', 3024: '#8B0000',
    3026: '#8B0000', 3027: '#8B0000', 3028: '#8B0000', 3031: '#8B0000', 3032: '#8B0000',
    3033: '#8B0000',
    // Фиолетовые (4000-4999)
    4001: '#8B008B', 4002: '#8B008B', 4003: '#8B008B', 4004: '#8B008B', 4005: '#8B008B',
    4006: '#8B008B', 4007: '#8B008B', 4008: '#8B008B', 4009: '#8B008B', 4010: '#8B008B',
    4011: '#8B008B', 4012: '#8B008B',
    // Синие (5000-5999)
    5000: '#1E90FF', 5001: '#1E90FF', 5002: '#1E90FF', 5003: '#1E90FF', 5004: '#1E90FF',
    5005: '#1E90FF', 5007: '#1E90FF', 5008: '#1E90FF', 5009: '#1E90FF', 5010: '#1E90FF',
    5011: '#1E90FF', 5012: '#1E90FF', 5013: '#1E90FF', 5014: '#1E90FF', 5015: '#1E90FF',
    5017: '#1E90FF', 5018: '#1E90FF', 5019: '#1E90FF', 5020: '#1E90FF', 5021: '#1E90FF',
    5022: '#1E90FF', 5023: '#1E90FF', 5024: '#1E90FF', 5025: '#1E90FF', 5026: '#1E90FF',
    // Зеленые (6000-6999)
    6000: '#228B22', 6001: '#228B22', 6002: '#228B22', 6003: '#228B22', 6004: '#228B22',
    6005: '#228B22', 6006: '#228B22', 6007: '#228B22', 6008: '#228B22', 6009: '#228B22',
    6010: '#228B22', 6011: '#228B22', 6012: '#228B22', 6013: '#228B22', 6014: '#228B22',
    6015: '#228B22', 6016: '#228B22', 6017: '#228B22', 6018: '#228B22', 6019: '#228B22',
    6020: '#228B22', 6021: '#228B22', 6022: '#228B22', 6024: '#228B22', 6025: '#228B22',
    6026: '#228B22', 6027: '#228B22', 6028: '#228B22', 6029: '#228B22', 6032: '#228B22',
    6033: '#228B22', 6034: '#228B22', 6035: '#228B22', 6036: '#228B22', 6037: '#228B22',
    6038: '#228B22',
    // Серые (7000-7999)
    7000: '#808080', 7001: '#808080', 7002: '#808080', 7003: '#808080', 7004: '#808080',
    7005: '#808080', 7006: '#808080', 7008: '#808080', 7009: '#808080', 7010: '#808080',
    7011: '#808080', 7012: '#808080', 7013: '#808080', 7015: '#808080', 7016: '#808080',
    7021: '#808080', 7022: '#808080', 7023: '#808080', 7024: '#808080', 7026: '#808080',
    7030: '#808080', 7031: '#808080', 7032: '#808080', 7033: '#808080', 7034: '#808080',
    7035: '#808080', 7036: '#808080', 7037: '#808080', 7038: '#808080', 7039: '#808080',
    7040: '#808080', 7042: '#808080', 7043: '#808080', 7044: '#808080', 7045: '#808080',
    7046: '#808080', 7047: '#808080', 7048: '#808080'
  };
  
  return ralColors[code] || '#CCCCCC';
}

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
    ],
    subtypes: [
      {
        id: 'profnastil-c8-1051-1000',
        title: 'Профнастил C8 1051/1000',
        image: profnastilC8Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-c21-1051-1000',
        title: 'Профнастил C21 1051/1000',
        image: profnastilC21Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-hc35-1060-1000',
        title: 'Профнастил HC35 1060/1000',
        image: profnastilHC35Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-hc44-1064-1000',
        title: 'Профнастил HC44 1064/1000',
        image: profnastilHC44Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-h57-805-750',
        title: 'Профнастил H57 805/750',
        image: profnastilH57Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-h60-902-845',
        title: 'Профнастил H60 902/845',
        image: profnastilH60Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-h75-800-750',
        title: 'Профнастил H75 800/750',
        image: profnastilH75Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-h114-646-600',
        title: 'Профнастил H114 646/600',
        image: profnastilH114_646Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-h114-807-750',
        title: 'Профнастил H114 807/750',
        image: profnastilH114_807Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-ckh153-826-800',
        title: 'Профнастил CKH153 826/800',
        image: profnastilCKH153Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-h153-965-900',
        title: 'Профнастил H153 965/900',
        image: profnastilH153Img,
        hasDrawing: false
      },
      {
        id: 'profnastil-h158-785-750',
        title: 'Профнастил H158 785/750',
        image: profnastilH158Img,
        hasDrawing: false
      }
    ],
    colorPaletteImage: colorPaletteProfnastilImg
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
    ],
    subtypes: [
      {
        id: '979361485062-sendvich-panel-stenovaya-bazalt',
        title: 'Сэндвич панель стеновая базальт',
        image: sandwichStenovayaBazaltImg,
        hasDrawing: false
      },
      {
        id: 'sendvich-panel-krovelnaya-bazalt',
        title: 'Сэндвич панель кровельная базальт',
        image: sandwichKrovelnayaBazaltImg,
        hasDrawing: true,
        drawingDimensions: {
          height: 41,
          width: 1000
        }
      },
      {
        id: 'sendvich-panel-stenovaya-pir',
        title: 'Сэндвич панель стеновая PIR',
        image: sandwichStenovayaPirImg,
        hasDrawing: false
      },
      {
        id: 'sendvich-panel-krovelnaya-pir',
        title: 'Сэндвич панель кровельная PIR',
        image: sandwichKrovelnayaPirImg,
        hasDrawing: false
      }
    ],
    colorPaletteImage: colorPaletteProfnastilImg
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
  const navigate = useNavigate();
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
          {/* Подтипы продуктов (если есть) */}
          {product.subtypes && product.subtypes.length > 0 && (
            <div className={styles.subtypesSection}>
              <h2 className={styles.sectionTitle}>Типы продукции</h2>
              <div className={styles.subtypesGrid}>
                {product.subtypes.map((subtype, index) => (
                  <Link 
                    key={index} 
                    to={`/catalog/${productId}/tproduct/${subtype.id}`}
                    className={styles.subtypeCard}
                  >
                    <div className={styles.subtypeImage}>
                      <img src={subtype.image} alt={subtype.title} />
                    </div>
                    <h3 className={styles.subtypeTitle}>{subtype.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className={styles.productContent}>
            {!product.subtypes && (
              <div className={styles.productImage}>
                <img src={product.image} alt={product.title} />
              </div>
            )}

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
                <button 
                  onClick={() => navigate('/contacts')} 
                  className={styles.contactButton}
                >
                  Связаться с нами
                </button>
              </div>
            </div>
          </div>

          {/* Палитра цветов (если есть) */}
          {product.colorPaletteImage && (
            <div className={styles.colorPaletteSection}>
              <h2 className={styles.sectionTitle}>Палитра цветов RAL</h2>
              <div className={styles.colorPaletteImageContainer}>
                <img 
                  src={product.colorPaletteImage} 
                  alt="Палитра цветов RAL" 
                  className={styles.colorPaletteImage}
                />
              </div>
            </div>
          )}
          {product.colorPalette && product.colorPalette.length > 0 && !product.colorPaletteImage && (
            <div className={styles.colorPaletteSection}>
              <h2 className={styles.sectionTitle}>Палитра цветов RAL</h2>
              <div className={styles.colorPaletteGrid}>
                {product.colorPalette.map((colorCode, index) => (
                  <div key={index} className={styles.colorSwatch} title={`RAL ${colorCode}`}>
                    <div 
                      className={styles.colorSquare}
                      style={{ backgroundColor: getRALColor(colorCode) }}
                    />
                    <span className={styles.colorCode}>{colorCode}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ProductPage;

