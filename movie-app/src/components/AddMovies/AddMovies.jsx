import { useState } from "react";
import styles from "./AddMovies.module.css";
import { nanoid } from "nanoid";
import Alert from "../Alert/Alert";


function AddMovies(props) {
  const { movies, setMovies } = props;
  
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  const [isDataError, setIsDataError] = useState({
    isTitleError: false,
    isDateError: false,
    isPosterError: false,
  });

  const { title, date, poster, type } = formData;

  const { isTitleError, isDateError, isPosterError } = isDataError;

  function AddMovies() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    setMovies([...movies, movie]);
  }

  function validate() {
    if (title === "") {
      setIsDataError({
        ...isDataError,
        isTitleError: true,
      });
      return false;
    } else if (date === "") {
      setIsDataError({
        ...isDataError,
        isTitleError: true,
        isDateError: true,
      });
      return false;
    } else if (poster === "") {
      setIsDataError({
        ...isDataError,
        isTitleError: true,
        isDateError: true,
        isPosterError: true,
      });
      return false;
    } else {
      setIsDataError({
        ...isDataError,
        isTitleError: false,
        isDateError: false,
        isPosterError: false,
      });
      return true;
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    validate() && addMovie();
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
              id="title"
              type="text"
              placeholder="enter the title of the movie!"
              value={title}
              onChange={handleChange}
              name="title"
            />
            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            <label className={styles.label__date}>Date</label>
            <input
              className={styles.input__date}
              id="date"
              type="number"
              placeholder="enter the date of the movie!"
              value={date}
              onChange={handleChange}
              name="date"
            />
            {isDateError && <Alert>Date Wajib Diisi</Alert>}
            <label className={styles.label__date}>Poster</label>
            <input
              className={styles.input__date}
              id="poster"
              type="text"
              placeholder="enter the poster of the movie!"
              value={poster}
              onChange={handleChange}
              name="poster"
            />
            {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
            <label className={styles.label__date}>Type</label>
            <select
              className={styles.input__date}
              id="type"
              type="text"
              placeholder="enter the type of the movie!"
              value={type}
              onChange={handleChange}
              name="type"
            >
              <option value="">--Pilih Genre--</option>
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

export default AddMovies;