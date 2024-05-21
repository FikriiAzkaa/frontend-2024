import styles from "./Movie.module.css";

function Movie(props) {
    const {image, title, year} = props;

    return (
        <div>
            <img 
                className={styles.movie__image}
                src= {image}
                alt= {title}/>
            <h3 className={styles.movie__title}>{title}</h3>
            <p className={styles.movie__date}>{year}</p>
        </div>
    );
}

export default Movie;