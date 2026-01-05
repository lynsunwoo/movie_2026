import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
// import Navigation from './component/Navigation' 
import Main from './component/Main';
import Footer from './component/Footer';
import MovieDetail from './sub/MovieDetail';
import Api from './sub/Api';
import Router from './sub/Router';
import Contact from './sub/Contact'
import NotFound from './sub/NotFound'

function App() {
  return (
    <>
      <HashRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/api" element={<Api />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/movie_detail" element={<MovieDetail/>}/>
            <Route path="/router" element={<Router/>}/>
            <Route path="/*" element={<NotFound/>}/> 
            {/* /* 위에있는 주소를 제외한 모든 주소 */}
          </Routes>
        

        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
