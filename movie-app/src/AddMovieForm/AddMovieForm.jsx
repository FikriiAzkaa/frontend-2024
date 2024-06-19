import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import { nanoid } from "nanoid";
import Alert from "../components/Alert/Alert";




function AddMovieForm(props) {
  const { movies, setMovies } = props;

  const [title, setTitle] = useState("");

  const [date, setDate] = useState("");
  
  const [poster, setPoster] = useState("");

  const [type, setType] = useState("");

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handlePoster(e) {
    setPoster(e.target.value);
  }

  function handleType(e) {
    setType(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsDateError(true);
      setIsTitleError(false);
    } else if (poster === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsPosterError(true);
    } else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: poster,
      };

      setMovies([...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
      setIsPosterError(false)
    }
  }
 
      return (
        <div className={styles.container}>
          <section className={styles.add}>
            <div className={styles.add__left}>
              <img
                className={styles.add__image}
                src="https://picsum.photos/536/354"
                alt="placeholder"
              />
            </div>
            <div className={styles.add__right}>
              <h2 className={styles.title}> Add Movie</h2>
              <form onSubmit={handleSubmit}>
                <label className={styles.label__title}>Title</label>
                <input
                  className={styles.input__title}
                  type="text"
                  placeholder="enter the title of the movie!"
                  value={title}
                  onChange={handleTitle}
                />
                {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                <label className={styles.label__date}>Date</label>
                <input
                  className={styles.input__date}
                  type="number"
                  placeholder="enter the date of the movie!"
                  value={date}
                  onChange={handleDate}
                />
                {isDateError && <Alert> Date Wajib Diisi</Alert>}
                <label className={styles.label__date}>Poster</label>
                <input
                  className={styles.input__date}
                  type="text"
                  placeholder="enter the poster of the movie!"
                  value={poster}
                  onChange={handlePoster}
                />
                {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
                <label className={styles.label__date}>Type</label>
                <select
                  className={styles.input__date}
                  placeholder="enter the type of the movie!"
                  value={type}
                  onChange={handleType}
                >
                  <option value="">Pilih Genre</option>
                  <option value="action">Action</option>
                  <option value="drama">Drama</option>
                  <option value="comedy">Comedy</option>
                  <option value="horror">Horror</option>
                  <option value="romance">Romance</option>
                  <option value="thriller">Thriller</option>
                </select>
                <button className={styles.add__button} type="submit">
                  Add Movie
                </button>
              </form>
            </div>
          </section>
        </div>
      );
  }


export default AddMovieForm;