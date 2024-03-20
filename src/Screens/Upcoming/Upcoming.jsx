import React, { useEffect, useState } from 'react'
import Loader from '../../Components/Loader/Loader'
import CardContainer from '../../Components/CardContainer/CardContainer'
import Pagination from '../../Components/Pagination/Pagination'
import styles from './Upcoming.module.css'
import { DataProvider } from '../../Utils/DataProvider'
import DetailModal from '../../Components/DetailModal/DetailModal'

const Upcoming = () => {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState();
  const [showDetails, setShowDetails] = useState(false);

  const getMovies = () => {
    DataProvider.getUpcomingMovies(page)
      .then(res => {
        setMovies(res.results);
        setMaxPage(res.total_pages <= 500 ? res.total_pages : 500)
      })
      .catch((err) => {
        console.log(err);
        alert('Hubo un error a la hora de cargar las películas')
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getMovies()
  }, [page])

  return (
    <div className={styles.container}>
    <h1>Próximamente...</h1>
    {
      loading ?
        <Loader />
        :
        <CardContainer movies={movies} movie={movie} setShowDetails={setShowDetails} setMovie={setMovie}/>
    }
    <Pagination maxPage={maxPage} page={page} setPage={setPage} />
    <DetailModal show={showDetails} setShowDetails={setShowDetails} movie={movie} setMovie={setMovie}/>

  </div>
  )
}

export default Upcoming
