import React, { useEffect, useState } from 'react';
import MovieDetail from '../sub/MovieDetail';
// import axios from 'axios';


function Main() {
  //1. 상태관리
  const [isLoading, setIsLoading] = useState(true); //로딩바
  const [movies, setMovies] = useState([]);  //json파일 불러오기

  //2. 영화 데이터 로딩하기
  //방법1.
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.lt/api/v2/list_movies.json?sort_by=rating"
      )
    ).json();
    setMovies(json.data.movies);
    setIsLoading(false);
  };

  //방법2.
  // const getMovies = async () => {
  //   try {
  //     const {
  //       data: {
  //         data: { movies }
  //       },
  //     } = await axios.get(
  //       "https://yts.lt/api/v2/list_movies.json?sort_by=rating"
  //     );
  //     console.log(movies);

  //     setMovies(movies);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log('영화데이터 로딩 오류 :', error);
  //   }
  // };

  //3. 라이프사이클에서 데이터를 한번만 로딩한다.
  useEffect(() => {
    getMovies();
  }, []);

  //4. 콘솔창에 출력하여 확인
  console.log(movies);

  return (
    <main>
      {isLoading ? (<div className="loading_bar">
        <img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`}
          // (<img src={`${process.env.PUBLIC_URL}/images/loader.jpg`} // 모바일 버전
          alt="로딩중"
        /></div>) : (
        <ul className="movie_wrap">
          {movies.map((movie) => (
            <MovieDetail
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.large_cover_image}
              genres={movie.genres}
              rating={movie.rating}
            />
          ))}
        </ul>
      )}
    </main>
  );
}

export default Main;