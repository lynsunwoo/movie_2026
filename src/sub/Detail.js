import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const getMovie = async () => {
    try {
      const res = await fetch(
        `https://yts.lt/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await res.json();
      setMovie(json.data.movie);
    } catch (err) {
      setError('데이터를 불러올 수 없습니다.');
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!movie) return <p>로딩중...</p>;

  return (
    <main className="detail_wrap">
      <div className="movie_detail">
        <img src={movie.large_cover_image} alt={movie.title}/>
        <ul className="detail">
          <li><h3>상세보기</h3></li>
          <li><span>ID:</span> {movie.id}</li>
          <li><span>제목:</span> {movie.title}</li>
          <li><span>출시연도:</span> {movie.year}</li>
          <li><span>줄거리:</span> {movie.summary}</li>
          <li>평점: {movie.rating} ⭐</li>
          <li>
            <button onClick={() => navigate('/')}>
              목록으로
            </button>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Detail;
