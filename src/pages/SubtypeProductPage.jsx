import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './SubtypeProductPage.module.css';
import sandwichImg from '../assets/images/products/sandwich.jpg';
import sandwichStenovayaBazaltImg from '../assets/images/products/sandwich-stenovaya-bazalt.jpg';
import sandwichStenovayaBazaltDrawing1 from '../assets/images/products/sandwich-stenovaya-bazalt-drawing1.jpg';
import sandwichStenovayaBazaltDrawing2 from '../assets/images/products/sandwich-stenovaya-bazalt-drawing2.jpg';

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
      image: sandwichImg,
      hasDrawing: true,
      drawingDimensions: {
        height: 41,
        width: 1000
      },
      description: 'Кровельная сэндвич-панель с утеплителем из базальтовой ваты. Специальный профиль для эффективного водоотвода.'
    },
    'sendvich-panel-stenovaya-pir': {
      title: 'Сэндвич панель стеновая PIR',
      image: sandwichImg,
      hasDrawing: false,
      description: 'Стеновая сэндвич-панель с утеплителем PIR. Высокая энергоэффективность и долговечность.'
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

  // Обработчик клика на чертеж
  const handleDrawingClick = (drawing) => {
    setCurrentImage(drawing);
  };

  // Обработчик клика на основное фото для возврата к исходному
  const handleMainImageClick = () => {
    setCurrentImage(subtype.image);
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
                  onClick={handleMainImageClick}
                  className={currentImage !== subtype.image ? styles.clickableImage : ''}
                  title={currentImage !== subtype.image ? 'Нажмите, чтобы вернуться к фото продукта' : ''}
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
                        onClick={() => handleDrawingClick(drawing)}
                      >
                        <img 
                          src={drawing} 
                          alt={`Чертеж ${index + 1}`}
                          className={styles.drawingImage}
                        />
                        <div className={styles.drawingOverlay}>
                          <span className={styles.drawingOverlayText}>Нажмите для увеличения</span>
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
    </div>
  );
}

export default SubtypeProductPage;

