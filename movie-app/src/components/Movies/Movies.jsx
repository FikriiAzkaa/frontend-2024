import styles from "./Movies.module.css"

function Movies() {
    return(
        <div className={styles.container}>
            <selection className={styles.movie}>
                <h2 className={styles.movie__title}>latest Movie</h2>
            <div className={styles.movie__container}>
                <div>
                    <img 
                        className={styles.movie__image}
                        src="https://picsum.photos/300/400"
                        alt=""
                    />
                    <h3 className={styles.movie__title}>Movie Title</h3>
                    <p className={styles.movie__date}>Date Tittle</p>
                </div>
                <div>
                    <img 
                        className={styles.movie__image}
                        src="https://picsum.photos/300/400"
                        alt=""
                    />
                    <h3 className={styles.movie__title}>Movie Title</h3>
                    <p className={styles.movie__date}>Date Title</p>
                </div>
                <div>
                    <img 
                        className={styles.movie__image}
                        src="https://picsum.photos/300/400"
                        alt=""
                    />
                    <h3 className={styles.movie__title}>Movie Title</h3>
                    <p className={styles.movie__date}>Date Title</p>
                </div>
                <div>
                    <img 
                        className={styles.movie__image}
                        src="https://picsum.photos/300/400"
                        alt=""
                    />
                    <h3 className={styles.movie__title}>Movie Title</h3>
                    <p className={styles.movie__date}>Date Title</p>
                </div>
                <div>
                    <img 
                        className={styles.movie__image}
                        src="https://picsum.photos/300/400"
                        alt=""
                    />
                    <h3 className={styles.movie__title}>Movie Title</h3>
                    <p className={styles.movie__date}>Date Title</p>
                </div>
                <div>
                    <img 
                        className={styles.movie__image}
                        src="https://picsum.photos/300/400"
                        alt=""
                    />
                    <h3 className={styles.movie__title}>Movie Title</h3>
                    <p className={styles.movie__date}>Date Title</p>
                </div>
                <div>
                    <img 
                        className={styles.movie__image}
                        src="https://picsum.photos/300/400"
                        alt=""
                    />
                    <h3 className={styles.movie__title}>Movie Title</h3>
                    <p className={styles.movie__date}>Date Title</p>
                </div>
                <div>
                    <img 
                        className={styles.movie__image}
                        src="https://picsum.photos/300/400"
                        alt=""
                    />
                    <h3 className={styles.movie__title}>Movie Title</h3>
                    <p className={styles.movie__date}>Date Title</p>
                </div>
                <div>
                    <img 
                        className={styles.movie__image}
                        src="https://picsum.photos/300/400"
                        alt=""
                    />
                    <h3 className={styles.movie__title}>Movie Title</h3>
                    <p className={styles.movie__date}>Date Title</p>
                </div>
            </div>
            </selection>
        </div>
        
    );
}

export default Movies;