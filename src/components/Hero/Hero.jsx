import styles from "./Hero.module.css"

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Spider-Man: Far from Home</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Action, Adventure
                    </h3>
                    <p className={styles.hero__description}>
                        2019
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img 
                        className={styles.hero__image}
                        src="https://lsf.go.id/wp-content/uploads/2021/12/SPM.jpeg"
                        alt="placeholder"
                    />
                </div>
            </section>
        </div>
    );
}
export default Hero;
