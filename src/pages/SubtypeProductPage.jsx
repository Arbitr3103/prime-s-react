import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './SubtypeProductPage.module.css';
import sandwichImg from '../assets/images/products/sandwich.jpg';
import sandwichStenovayaBazaltImg from '../assets/images/products/sandwich-stenovaya-bazalt.jpg';
import sandwichStenovayaBazaltDrawing1 from '../assets/images/products/sandwich-stenovaya-bazalt-drawing1.jpg';
import sandwichStenovayaBazaltDrawing2 from '../assets/images/products/sandwich-stenovaya-bazalt-drawing2.jpg';
import sandwichKrovelnayaBazaltImg from '../assets/images/products/sandwich-krovelnaya-bazalt.jpg';
import sandwichKrovelnayaBazaltDrawing from '../assets/images/products/sandwich-krovelnaya-bazalt-drawing.jpg';
import sandwichStenovayaPirImg from '../assets/images/products/sandwich-stenovaya-pir.jpg';
import sandwichStenovayaPirDrawing1 from '../assets/images/products/sandwich-stenovaya-pir-drawing1.jpg';
import sandwichStenovayaPirDrawing2 from '../assets/images/products/sandwich-stenovaya-pir-drawing2.jpg';
import sandwichStenovayaPirDrawing3 from '../assets/images/products/sandwich-stenovaya-pir-drawing3.jpg';
import sandwichKrovelnayaPirImg from '../assets/images/products/sandwich-krovelnaya-pir.jpg';
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
import profnastilC8DrawingImg from '../assets/images/products/profnastil-c8-drawing.jpg';
import profnastilC21DrawingImg from '../assets/images/products/profnastil-c21-drawing.jpg';
import profnastilHC35DrawingImg from '../assets/images/products/profnastil-hc35-drawing.jpg';
import profnastilHC44DrawingImg from '../assets/images/products/profnastil-hc44-drawing.jpg';
import profnastilH57DrawingImg from '../assets/images/products/profnastil-h57-drawing.jpg';
import profnastilH60DrawingImg from '../assets/images/products/profnastil-h60-drawing.jpg';
import profnastilH75DrawingImg from '../assets/images/products/profnastil-h75-drawing.jpg';
import profnastilH114_646DrawingImg from '../assets/images/products/profnastil-h114-646-drawing.jpg';
import profnastilH114_807DrawingImg from '../assets/images/products/profnastil-h114-807-drawing.jpg';
import profnastilCKH153DrawingImg from '../assets/images/products/profnastil-ckh153-drawing.jpg';
import profnastilH153DrawingImg from '../assets/images/products/profnastil-h153-drawing.jpg';
import profnastilH158DrawingImg from '../assets/images/products/profnastil-h158-drawing.jpg';

/**
 * Компонент для отображения технического чертежа кровельной панели
 */
function RoofPanelDrawing({ height, width }) {
  const scale = 0.4; // Масштаб для отображения (увеличен для лучшей читаемости)
  const svgWidth = width * scale;
  const svgHeight = 300; // Высота SVG контейнера (увеличена)
  const centerY = svgHeight / 2;
  
  // Профиль кровельной панели (гофрированный) - трапециевидный профиль
  const waveCount = 4; // Количество волн
  const waveWidth = width / waveCount;
  const waveHeight = height;
  
  // Создаем точки для верхнего и нижнего контура
  const topPoints = [];
  const bottomPoints = [];
  
  for (let i = 0; i <= waveCount; i++) {
    const x = i * waveWidth * scale;
    const isPeak = i % 2 === 1;
    const topY = isPeak ? centerY - waveHeight * scale : centerY;
    const bottomY = centerY;
    
    topPoints.push(`${x},${topY}`);
    bottomPoints.push(`${x},${bottomY}`);
  }
  
  // Объединяем точки для замкнутого контура
  const allPoints = [...topPoints, ...bottomPoints.reverse()].join(' ');
  
  return (
    <div className={styles.drawingContainer}>
      <svg 
        width="100%" 
        height={svgHeight} 
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className={styles.drawing}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Паттерн для штриховки изоляции */}
          <pattern id="insulation" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="8" y2="8" stroke="#999" strokeWidth="0.5"/>
            <line x1="8" y1="0" x2="0" y2="8" stroke="#999" strokeWidth="0.5"/>
          </pattern>
          {/* Стрелки для размерных линий */}
          <marker id="arrowhead" markerWidth="12" markerHeight="12" refX="11" refY="3.5" orient="auto">
            <polygon points="0 0, 12 3.5, 0 7" fill="#e74c3c" />
          </marker>
        </defs>
        
        {/* Внешний контур панели */}
        <polygon
          points={allPoints}
          fill="url(#insulation)"
          stroke="#2c3e50"
          strokeWidth="2.5"
        />
        
        {/* Внутренние линии профиля для детализации */}
        {Array.from({ length: waveCount - 1 }).map((_, i) => {
          const x = (i + 1) * waveWidth * scale;
          return (
            <line
              key={i}
              x1={x}
              y1={centerY - waveHeight * scale}
              x2={x}
              y2={centerY}
              stroke="#2c3e50"
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          );
        })}
        
        {/* Размеры */}
        <g className={styles.dimensions}>
          {/* Высота волны (вертикальная размерная линия) */}
          <line
            x1={waveWidth * scale / 2 + 20}
            y1={centerY - waveHeight * scale}
            x2={waveWidth * scale / 2 + 20}
            y2={centerY}
            stroke="#e74c3c"
            strokeWidth="2.5"
            markerEnd="url(#arrowhead)"
            markerStart="url(#arrowhead)"
          />
          <text
            x={waveWidth * scale / 2 + 25}
            y={centerY - waveHeight * scale / 2}
            fill="#e74c3c"
            fontSize="18"
            fontWeight="700"
            dominantBaseline="middle"
          >
            {height} мм
          </text>
          
          {/* Ширина панели (горизонтальная размерная линия) */}
          <line
            x1="0"
            y1={svgHeight - 40}
            x2={svgWidth}
            y2={svgHeight - 40}
            stroke="#e74c3c"
            strokeWidth="2.5"
            markerEnd="url(#arrowhead)"
            markerStart="url(#arrowhead)"
          />
          <text
            x={svgWidth / 2}
            y={svgHeight - 15}
            fill="#e74c3c"
            fontSize="18"
            fontWeight="700"
            textAnchor="middle"
          >
            {width} мм
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Данные о подтипах продуктов
 */
const subtypesData = {
  sandwpan: {
    '979361485062-sendvich-panel-stenovaya-bazalt': {
      title: 'Сэндвич панель стеновая базальт',
      image: sandwichStenovayaBazaltImg,
      hasDrawing: true,
      drawings: [
        sandwichStenovayaBazaltDrawing1,
        sandwichStenovayaBazaltDrawing2
      ],
      description: 'Стеновая сэндвич-панель с утеплителем из базальтовой ваты. Отличная теплоизоляция и звукоизоляция.'
    },
    'sendvich-panel-krovelnaya-bazalt': {
      title: 'Сэндвич панель кровельная базальт',
      image: sandwichKrovelnayaBazaltImg,
      hasDrawing: true,
      drawings: [
        sandwichKrovelnayaBazaltDrawing
      ],
      description: 'Кровельная сэндвич-панель с утеплителем из базальтовой ваты. Специальный профиль для эффективного водоотвода.'
    },
    'sendvich-panel-stenovaya-pir': {
      title: 'Сэндвич панель стеновая PIR',
      image: sandwichStenovayaPirImg,
      hasDrawing: true,
      drawings: [
        sandwichStenovayaPirDrawing1,
        sandwichStenovayaPirDrawing2,
        sandwichStenovayaPirDrawing3
      ],
      description: 'Стеновая сэндвич-панель с утеплителем PIR. Высокая энергоэффективность и долговечность.'
    },
    'sendvich-panel-krovelnaya-pir': {
      title: 'Сэндвич панель кровельная PIR',
      image: sandwichKrovelnayaPirImg,
      hasDrawing: false,
      description: 'Кровельная сэндвич-панель с утеплителем PIR. Высокая энергоэффективность и отличные теплоизоляционные свойства.'
    }
  },
  profnastil: {
    'profnastil-c8-1051-1000': {
      title: 'Профнастил C8 1051/1000',
      image: profnastilC8Img,
      hasDrawing: true,
      drawings: [profnastilC8DrawingImg],
      description: 'Профнастил C8 с полезной шириной 1051 мм и общей шириной 1000 мм. Идеален для облицовки фасадов и заборов.'
    },
    'profnastil-c21-1051-1000': {
      title: 'Профнастил C21 1051/1000',
      image: profnastilC21Img,
      hasDrawing: true,
      drawings: [profnastilC21DrawingImg],
      description: 'Профнастил C21 с полезной шириной 1051 мм и общей шириной 1000 мм. Отлично подходит для кровельных работ.'
    },
    'profnastil-hc35-1060-1000': {
      title: 'Профнастил HC35 1060/1000',
      image: profnastilHC35Img,
      hasDrawing: true,
      drawings: [profnastilHC35DrawingImg],
      description: 'Профнастил HC35 с полезной шириной 1060 мм и общей шириной 1000 мм. Высокий профиль для кровельных работ.'
    },
    'profnastil-hc44-1064-1000': {
      title: 'Профнастил HC44 1064/1000',
      image: profnastilHC44Img,
      hasDrawing: true,
      drawings: [profnastilHC44DrawingImg],
      description: 'Профнастил HC44 с полезной шириной 1064 мм и общей шириной 1000 мм. Максимальная прочность для кровельных конструкций.'
    },
    'profnastil-h57-805-750': {
      title: 'Профнастил H57 805/750',
      image: profnastilH57Img,
      hasDrawing: true,
      drawings: [profnastilH57DrawingImg],
      description: 'Профнастил H57 с полезной шириной 805 мм и общей шириной 750 мм. Высокий профиль для кровельных работ.'
    },
    'profnastil-h60-902-845': {
      title: 'Профнастил H60 902/845',
      image: profnastilH60Img,
      hasDrawing: true,
      drawings: [profnastilH60DrawingImg],
      description: 'Профнастил H60 с полезной шириной 902 мм и общей шириной 845 мм. Максимальная прочность для кровельных конструкций.'
    },
    'profnastil-h75-800-750': {
      title: 'Профнастил H75 800/750',
      image: profnastilH75Img,
      hasDrawing: true,
      drawings: [profnastilH75DrawingImg],
      description: 'Профнастил H75 с полезной шириной 800 мм и общей шириной 750 мм. Высокий профиль для кровельных работ.'
    },
    'profnastil-h114-646-600': {
      title: 'Профнастил H114 646/600',
      image: profnastilH114_646Img,
      hasDrawing: true,
      drawings: [profnastilH114_646DrawingImg],
      description: 'Профнастил H114 с полезной шириной 646 мм и общей шириной 600 мм. Максимальная прочность для кровельных конструкций.'
    },
    'profnastil-h114-807-750': {
      title: 'Профнастил H114 807/750',
      image: profnastilH114_807Img,
      hasDrawing: true,
      drawings: [profnastilH114_807DrawingImg],
      description: 'Профнастил H114 с полезной шириной 807 мм и общей шириной 750 мм. Максимальная прочность для кровельных конструкций.'
    },
    'profnastil-ckh153-826-800': {
      title: 'Профнастил CKH153 826/800',
      image: profnastilCKH153Img,
      hasDrawing: true,
      drawings: [profnastilCKH153DrawingImg],
      description: 'Профнастил CKH153 с полезной шириной 826 мм и общей шириной 800 мм. Специальный профиль для кровельных работ.'
    },
    'profnastil-h153-965-900': {
      title: 'Профнастил H153 965/900',
      image: profnastilH153Img,
      hasDrawing: true,
      drawings: [profnastilH153DrawingImg],
      description: 'Профнастил H153 с полезной шириной 965 мм и общей шириной 900 мм. Максимальная прочность для кровельных конструкций.'
    },
    'profnastil-h158-785-750': {
      title: 'Профнастил H158 785/750',
      image: profnastilH158Img,
      hasDrawing: true,
      drawings: [profnastilH158DrawingImg],
      description: 'Профнастил H158 с полезной шириной 785 мм и общей шириной 750 мм. Высокий профиль для кровельных работ.'
    }
  }
};

/**
 * Страница детальной информации о подтипе продукта
 */
function SubtypeProductPage() {
  const { productId, subtypeId } = useParams();
  const productSubtypes = subtypesData[productId];
  const subtype = productSubtypes?.[subtypeId];
  
  // Состояние для отслеживания текущего отображаемого изображения
  const [currentImage, setCurrentImage] = useState(subtype?.image || null);
  // Состояние для модального окна увеличенного изображения
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  if (!subtype) {
    return (
      <div className={styles.subtypePage}>
        <div className={styles.container}>
          <h1>Подтип продукта не найден</h1>
          <Link to={`/catalog/${productId}`} className={styles.backLink}>
            Вернуться к продукту
          </Link>
        </div>
      </div>
    );
  }

  // Обработчик клика на контейнер чертежа - заменяет основное фото
  const handleDrawingContainerClick = (drawing) => {
    setCurrentImage(drawing);
  };

  // Обработчик клика на чертеж для увеличения в модальном окне
  const handleDrawingZoom = (drawing, e) => {
    e.stopPropagation();
    setModalImage(drawing);
    setIsModalOpen(true);
  };

  // Обработчик клика на основное фото для возврата к исходному
  const handleMainImageClick = () => {
    if (currentImage !== subtype.image) {
      setCurrentImage(subtype.image);
    } else {
      // Если это исходное фото, открываем модальное окно
      setModalImage(currentImage);
      setIsModalOpen(true);
    }
  };

  // Обработчик клика на фото для увеличения
  const handleImageZoom = (e) => {
    e.stopPropagation(); // Предотвращаем всплытие события
    setModalImage(currentImage);
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  // Закрытие модального окна по клику на фон
  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className={styles.subtypePage}>
      <section className={styles.headerSection}>
        <div className={styles.container}>
          <Link to={`/catalog/${productId}`} className={styles.backLink}>
            ← Вернуться к продукту
          </Link>
          <h1 className={styles.pageTitle}>{subtype.title}</h1>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.productDetails}>
            {/* Фото продукта / Чертеж */}
            <div className={styles.productImageContainer}>
              <div className={styles.productImage}>
                <img 
                  src={currentImage} 
                  alt={currentImage === subtype.image ? subtype.title : 'Технический чертеж'}
                  onClick={currentImage !== subtype.image ? handleMainImageClick : handleImageZoom}
                  className={styles.zoomableImage}
                  title={currentImage !== subtype.image ? 'Нажмите, чтобы вернуться к фото продукта' : 'Нажмите, чтобы увеличить'}
                />
                {currentImage !== subtype.image && (
                  <div className={styles.imageHint}>
                    Нажмите на изображение, чтобы вернуться к фото продукта
                  </div>
                )}
              </div>
            </div>

            {/* Чертежи (если есть) */}
            {subtype.hasDrawing && (
              <div className={styles.drawingSection}>
                <h2 className={styles.sectionTitle}>Технические чертежи</h2>
                <p className={styles.drawingHint}>Нажмите на чертеж, чтобы увеличить его</p>
                {subtype.drawings && subtype.drawings.length > 0 ? (
                  <div className={styles.drawingsGrid}>
                    {subtype.drawings.map((drawing, index) => (
                      <div 
                        key={index} 
                        className={styles.drawingImageContainer}
                        onClick={() => handleDrawingContainerClick(drawing)}
                      >
                        <img 
                          src={drawing} 
                          alt={`Чертеж ${index + 1}`}
                          className={styles.drawingImage}
                          onClick={(e) => handleDrawingZoom(drawing, e)}
                        />
                        <div className={styles.drawingOverlay}>
                          <span className={styles.drawingOverlayText}>Нажмите на чертеж для увеличения</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : subtype.drawingDimensions && (
                  <RoofPanelDrawing 
                    height={subtype.drawingDimensions.height}
                    width={subtype.drawingDimensions.width}
                  />
                )}
              </div>
            )}

            {/* Описание */}
            {subtype.description && (
              <div className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>Описание</h2>
                <p className={styles.description}>{subtype.description}</p>
              </div>
            )}

            {/* Кнопка Купить */}
            <div className={styles.buySection}>
              <Link to="/contacts" className={styles.buyButton}>
                КУПИТЬ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Модальное окно для увеличенного изображения */}
      {isModalOpen && modalImage && (
        <div 
          className={styles.modalOverlay}
          onClick={handleModalBackdropClick}
        >
          <div className={styles.modalContent}>
            <button 
              className={styles.modalCloseButton}
              onClick={handleCloseModal}
              aria-label="Закрыть"
            >
              ×
            </button>
            <img 
              src={modalImage} 
              alt="Увеличенное изображение"
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SubtypeProductPage;

