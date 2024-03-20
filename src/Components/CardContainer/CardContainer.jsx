import React from 'react'
import Card from '../Card/Card'
import styles from './CardContainer.module.css'


const CardContainer = ({ movies, setShowDetails, setMovie }) => {
    return (
        <>
            <div className={styles.container}>
                {
                    movies.map((e, i) => <Card movie={e} key={i} setShowDetails={setShowDetails} setMovie={setMovie}/>)
                }
            </div>

        </>
    )
}

export default CardContainer
