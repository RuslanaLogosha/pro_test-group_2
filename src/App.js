import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div>
      <Header isLoggedIn={true} />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
