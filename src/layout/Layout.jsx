import Header from './Header';
import Footer from './Footer';
import './Layout.module.css';

/**
 * Основной компонент макета страницы
 * Включает Header, основной контент и Footer
 */
function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
