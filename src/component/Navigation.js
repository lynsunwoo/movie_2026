import React from 'react';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
      <nav className="navi">
        <ul>
          <li><Link to ='/' title="홈으로">Home</Link></li>
          <li><Link to ='/api' title="영화api 페이지">API</Link></li>
          <li><Link to ='/contact' title="문의하기">Contact US</Link></li>
          <li><Link to ='/router' title="리액트 라우터 설정 방법과 활용">Router</Link></li>
        </ul>
      </nav>
  )
}

export default Navigation;