import styles  from './Navbar.module.css';

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie App</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}>
                        <link to="/">Home</link>
                        </li>
                        <li className={styles.navbar__item}>
                        <link to="/">Add Movie</link>
                        </li> 
                        <li className={styles.navbar__item}>
                        <link to="/">Popular</link>   
                        </li>
                        <li className={styles.navbar__item}>
                        <link to="/">Now Playing</link>
                        </li>
                        <li className={styles.navbar__item}>
                        <link to="/">Top Rated</link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;