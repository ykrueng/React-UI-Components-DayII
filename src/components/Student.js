import React from "react";
import "./Student.css";

const Student = props => {
  return (
    <div className="card--student">
      <h3>{props.student.name}</h3>
      <p>Age: {props.student.age}</p>
      <p>Identity: {props.student.identity}</p>
      <p>Best Friend: {props.student.bestFriend}</p>
    </div>
  );
};

export default Student;
