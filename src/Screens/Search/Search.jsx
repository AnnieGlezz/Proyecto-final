import { useState } from 'react'
import CardContainer from '../../Components/CardContainer/CardContainer'
import DetailModal from '../../Components/DetailModal/DetailModal'
import Loader from '../../Components/Loader/Loader'
import Pagination from '../../Components/Pagination/Pagination'
import styles from './Search.module.css'
import { DataProvider } from '../../Utils/DataProvider'

const Search = () => {

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [maxPage, setMaxPage] = useState();
    const [showDetails, setShowDetails] = useState(false);
    const [text, setText] = useState('');

    const getMovies = () => {
        setLoading(true)
        DataProvider.getMoviesByName(page, text)
            .then((res) => {
                console.log(res)
                setMovies(res.results);
                setMaxPage(res.total_pages <= 500 ? res.total_pages : 500);
            })
            .catch(err => {
                console.log(err);
                alert('Error al cargar las películas')
            })
            .finally(() => setLoading(false))
    }

    const handleClick = () => {
        if (text.length >= 3) getMovies()
        else alert('Ingresa un texto mayor a 3 caracteres')
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            if (text.length >= 3) getMovies()
            else alert('Ingresa un texto mayor a 3 caracteres')
        }
        return
    }


    return (
        <div className={styles.container}>
            <div>
                <input type="text" className={styles.input} placeholder='Escribe el nombre' onKeyDown={(e) => handleKeyDown(e)}
                    onChange={(e) => setText(e.target.value)} value={text} />
                <button className={styles.btn} onClick={handleClick}>Buscar</button>
            </div>
            <h1>Resultados</h1>
            {
                loading ?
                    <Loader />
                    :
                    <CardContainer movies={movies} setShowDetails={setShowDetails} setMovie={setMovie} />
            }
            <Pagination page={page} setPage={setPage} maxPage={maxPage} />
            <DetailModal show={showDetails} setShowDetails={setShowDetails} movie={movie} setMovie={setMovie} />
        </div>
    )
}

export default Search
