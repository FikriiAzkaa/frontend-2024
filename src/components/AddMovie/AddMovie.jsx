import styles from "./AddMovie.module.css"

function AddMovie() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
            <div>
                <h1 className={styles.hero_title}>Add Movie</h1>
            </div>
            <form>
            <label>Title</label><br />
            <input type="" id="" name="" value="" /><br />
            <label>Add Movie</label><br />
            <input type="" id="" name="" value="" /><br /><br />
            <input type="submit" value="Submit" />
            </form>
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

export default AddMovie;