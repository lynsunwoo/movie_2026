import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './css/Movie.css';
import './css/Sub.css';
import Header from './component/Header';
// import Navigation from './component/Navigation' 
import Main from './component/Main';
import Footer from './component/Footer';
import MovieDetail from './sub/MovieDetail';
import Api from './sub/Api';
import Router from './sub/Router';
import Contact from './sub/Contact'
import NotFound from './sub/NotFound'
import Detail from './sub/Detail' //개별영화 목록

function App() {
  return (
    <>
      <BrowserRouter basename='/movie_2026'>
        <Header />
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/api" element={<Api />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/movie_detail" element={<MovieDetail/>}/>
            <Route path="/router" element={<Router/>}/>
            <Route path="/*" element={<NotFound/>}/> 
            {/* /* 위에있는 주소를 제외한 모든 주소 */}

            <Route path="/:id" element={<Detail />}/>
          </Routes>
        

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
