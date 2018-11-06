import React, { Fragment } from "react";
import Student from "./Student";

const students = [
  {
    name: "Harry Potter",
    identity: "The Chosen One",
    age: 11,
    bestFriend: "Ron Weasley and Hermione Granger"
  },
  {
    name: "Ron Weasley",
    identity: "Youngest Weasley, Harry's best friend",
    age: 11,
    bestFriend: "Harry Potter and Hermione Granger"
  },
  {
    name: "Hermione Granger",
    identity: "Smart McSmart pants, Harry's best friend",
    age: 11,
    bestFriend: "Harry Potter and Ron Weasley"
  },
  {
    name: "Draco Malfoy",
    identity: "Jerk face",
    age: 11,
    bestFriend: "Crabbe and Goyle"
  }
];

const HogwartsStudents = () => {
  return (
    <Fragment>
      <h1>Hogwarts Students:</h1>
      {students.map(student => <Student student={student} />)}
      {/*<Student student={HarryProfile} />
      <Student student={RonProfile} />
      <Student student={HermioneProfile} />*/}
    </Fragment>
  );
};

export default HogwartsStudents;
