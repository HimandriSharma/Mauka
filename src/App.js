import Head from './components/head';
import './App.css';
import Home from './components/home'
import Welcome from './components/welcome';
import Present from './components/present';
import Blog from './components/blog';
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Head/>
      <Home/>
      <Welcome/>
      <Present/>
      <Blog/>
      <Footer/>
      {/* <header className="App-header">
        Test
      </header> */}
    </div>
  );
}

export default App;
