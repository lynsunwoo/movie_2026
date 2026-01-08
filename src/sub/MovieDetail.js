import React from 'react';
import { Link } from 'react-router-dom';

function MovieDetail({ id, year, title, summary, poster, genres, rating }) {
  return (
    <li className="movie_list">
      <div className="poster_box_wrap">
        <div className='poster_box'><img src={poster} alt={title} />
        </div>
      </div>

      <div className="info_box">
        <p>영화 아이디:{id}</p>
        <p><Link to ={`/${id}`}>{title}</Link></p>
        <p>{year}</p>
        {
          /* 줄거리는 slice 매서드로 생략 생략기호(...) 포함 */
        }
        <p>영화줄거리<br /> {summary.slice(0, 200)}...</p>
        <p>장르: {genres?.join(' ')}</p>
        <p>평점: {rating}</p>
      </div>
    </li>
  )
}

export default MovieDetail;