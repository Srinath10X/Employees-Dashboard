import React from "react";

const Card = (props) => {
  const deleteId = () => {
    props.onDelete(props.id);
  };

  const styles = {
    delbtn: {
      cursor: "pointer",
    },
  };

  return (
    <>
      <div className="card">
        <h2 className="name">Name: {props.name}</h2>
        <p className="id">Id: {props.id}</p>
        <p className="age">Age: {props.age}</p>
        <p className="gender">Gender: {props.gender}</p>
        <div className="btns">
          <button className="del" style={styles.delbtn} onClick={deleteId}>
            Delete
          </button>
          <button className="view-details">View</button>
        </div>
      </div>
    </>
  );
};

export default Card;
