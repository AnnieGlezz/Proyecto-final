import { useState } from 'react'
import styles from './Pagination.module.css'

const Pagination = ({ page, setPage, maxPage }) => {



    const handleClick = (type) => {
        if (type === 'sumar') {
            if(actualPage < maxPage){
                setPage(page + 1);
                setActualPage(Number(actualPage) + 1);
            }
        } else if (type === 'restar') {
            if(page > 1){
                setPage(page - 1); 
                setActualPage(Number(actualPage)-1);
            }
        } else return
    }

    const handleEnter = (e) => {
        if(e.key==='Enter'){
            if(Number(actualPage) <= maxPage){
                if(Number(actualPage)===0){
                    setPage(1)
                    setActualPage(1)
                } else {
                    setPage(actualPage)
                }
            } else {
                alert('el numero máximo de paginas es: ' + maxPage)
            }
        }
    }

    const [actualPage, setActualPage] = useState(page);
    const handleChange = (e) => {
        let valor = e.target.value.replace(/\D/g, '');
        setActualPage(valor)
    }


    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={() => handleClick('restar')} >-</button>
            <input type="text" className={styles.input} maxLength={4} value={actualPage}
                onChange={handleChange} onKeyDown={handleEnter} />
            <button className={styles.btn} onClick={() => handleClick('sumar')}>+</button>
        </div>
    )
}

export default Pagination
