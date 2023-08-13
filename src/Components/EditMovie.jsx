import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";
const EditMovie = ({ handleEdit,film }) => {
  const [name, setName] = useState(film.name);
  const [image, setImage] = useState(film.image);
  const [rating, setRating] = useState(film.rating);
  const [date, setDate] = useState(film.date);
  const handleRating = (x) => setRating(x);
  const handleSubmit = (e) => {
    e.preventDefault();
    const MovieToEdit = {
      id:film.id,
      name,
      image,
      date,
      rating,
    };
    handleEdit(MovieToEdit);
    closeModal();
    setDate("");
    setImage("");
    setRating(1);
    setName("");
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal} className="btn">
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Movie Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Movie Poster</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <StarRating rating={rating} handleRating={handleRating} />
          <label>Movie Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <>
            <button className="btn" type="submit">
              Confirme
            </button>
            <button className="btn  " onClick={closeModal}>
              Cancel
            </button>
          </>
        </form>
      </Modal>
    </div>
  );
};

export default EditMovie;
