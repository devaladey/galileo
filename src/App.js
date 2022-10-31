import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Overview from './components/overview/Overview';
import Video from './components/video/Video';

function App() {
  return (
    <>
      
      <Header>
      <Navbar />
      </Header>
      <Video />
      <Overview />
      <Footer />

    </>
  );
}

export default App;
