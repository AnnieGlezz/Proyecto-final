import React, { useEffect, useState } from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import styles from './NowPlaying.module.css'
import { DataProvider } from '../../Utils/DataProvider';
import Loader from '../../Components/Loader/Loader';
import Pagination from '../../Components/Pagination/Pagination';
import DetailModal from '../../Components/DetailModal/DetailModal';

const NowPlaying = () => {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();

  const getMovies = () => {
    setLoading(true)
    DataProvider.getNowPlayingMovies(page)
      .then((res) => {
        setMovies(res.results);
        setMaxPage(res.total_pages <= 500 ? res.total_pages : 500);
      })
      .catch(err => {
        console.log(err);
        alert('Error al cargar las películas')
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getMovies()
  }, [page])


  return (
    <div className={styles.container}>
      <h1>Ahora en cartelera</h1>
      {
        loading ?
          <Loader />
          :
          <CardContainer movies={movies} setShowDetails={setShowDetails} setMovie={setMovie}/>
      }
      <Pagination page={page} setPage={setPage} maxPage={maxPage}/>
      <DetailModal show={showDetails} setShowDetails={setShowDetails} movie={movie} setMovie={setMovie}/>
    </div>
  )
}

export default NowPlaying
