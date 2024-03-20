import React from 'react';
import styles from './Card.module.css'

const Card = ({ movie, setShowDetails, setMovie }) => {


    return (
        <div className={styles.card} onClick={()=> {setShowDetails(true); setMovie(movie)}}>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="" />
            <h3 className={styles.title}>{movie.title}</h3>
        </div>
    )
}

export default Card
