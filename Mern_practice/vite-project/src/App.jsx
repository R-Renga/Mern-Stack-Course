import { useState, useRef } from "react";

const App = () => {
  const {comment : CommentData} = useComment("");
  const usernameRef = useRef(null);
  const ageRef = useRef(null);

  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const age = ageRef.current.value;

    const newUser = { username, age };

    setList([...list, newUser]);

    usernameRef.current.value = "";
    ageRef.current.value = "";
  };

  const handleDelete = (username) => {
    const updates = list.filter((data) => data.username !== username);
    setList(updates);
  };

  const handleEdit = (username) => {
    const selected = list.find((data) => data.username === username);

    usernameRef.current.value = selected.username;
    ageRef.current.value = selected.age;

    const updatedList = list.filter((data) => data.username !== username);
    setList(updatedList);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="text" ref={usernameRef} />
        </div>

        <div>
          <label>Age: </label>
          <input type="number" ref={ageRef} />
        </div>

        <button type="submit">Submit</button>
      </form>

      <div>
        {list.map((value, index) => (
          <div key={index}>
            <h3>{value.username}</h3>
            <p>{value.age}</p>

            <button onClick={() => handleDelete(value.username)}>Delete</button>
            <button onClick={() => handleEdit(value.username)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;