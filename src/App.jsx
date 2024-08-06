import "./App.css";
import React, { useState } from "react";
import Count from "./component/pages/Count";
import Button from "./component/Button";

const App = () => {
  {
    /* let count = 0;
  const increment = () => {
    count++;
    console.log(count);
  };
  const decrement = () => {
    count++;
    console.log(count);
  }; */
  }
  const [students, setStudent] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const updateStudent = (e) => {
    e.preventDefault();
    console.log("e", e);
    const newData = {
      id: students.length + 1,
      name,
      age,
    };
    setStudent((prev) => [...prev, newData]);
    setAge(0);
    setName("");
  };
  const deleteStudent = (id) => {
    const newStudents = [...students];
    const updateStudent = newStudents.filter((student) => student.id !== id);
    setStudent(updateStudent);
  };

  return (
    <div>
      <form onSubmit={updateStudent}>
        <input
          type="text"
          value={name}
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={age}
          placeholder="enter your age"
          onChange={(e) => setAge(e.target.value)}
        />
        <Button text="Add student" bg="green" type="submit" />
      </form>
      {students?.map((student) => (
        <div
          key={student.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
            border: "1px solid black",
            marginTop: "5px",
          }}
        >
          <p>{student.name}</p>
          <p>{student.age}</p>
          <Button
            text="Delete"
            bg="red"
            onClick={() => deleteStudent(student?.id)}
          />
        </div>
      ))}
      <h1>App Counter</h1>

      {/* <Count />*/}
    </div>
  );
};

export default App;
