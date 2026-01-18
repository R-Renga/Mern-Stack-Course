import { useState } from "react";

const App = () => {
  const [inputText, setInputText] = useState("");

  const [todolist, SetTodolist] = useState([]);
  const [editingId, setEditingId] = useState(null);

  function addTodolist() {
    if (inputText.trim() === "") return;
    if(editingId !== null){
      SetTodolist(
        todolist.map((t) => {
          if (t.id === editingId) {
            return {
              ...t,
              name: inputText.trim(),
            };
          }
          return t;
        })
      );
      setEditingId(null);
      setInputText("")
    }else{
    const items = {
      id: todolist.length + 1,
      name: inputText.trim(),
      completed: false,
    };
    console.log(items);
    SetTodolist((prev) => [...prev, items]);
    setInputText("");
  }
  }

  function toggleCompleted(id) {
    SetTodolist(
      todolist.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  }

  function deleteItems(id) {
    SetTodolist(todolist.filter((t) => t.id !== id));
  }

  function editItems(id) {
    const itemToEdit = todolist.find((t) => t.id === id);
    if (itemToEdit) {
      setInputText(itemToEdit.name);
      setEditingId(id);
    }
  }

  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="enter todo"
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={addTodolist}>
        {editingId !== null ? "Save" : "Add"}
      </button>
      <ul>
        {todolist.length > 0 &&
          todolist.map((t) => {
            return (
              <li key={t.id}>
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleCompleted(t.id)}
                />
                <span
                  style={{ textDecoration: t.completed ? "line-through" : "" }}
                >
                  {t.name}
                </span>
                <button onClick={() => editItems(t.id)}>Edit</button>
                {/* <span className={t.completed?"text":""}>{t.name}</span> */}
                <button onClick={() => deleteItems(t.id)}>Delete</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
