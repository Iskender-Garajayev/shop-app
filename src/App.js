import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/Header/Header'
import Main from './components/main/Main';
// import Swiper from './components/main/swiper/Swiper';
import HomeScreen from './components/homescreen/HomeScreen';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <HomeScreen/>
      <Footer/>
    </div>
  );
}

export default App;
