import { useState,useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditingText] = useState("");
  const [filter, setFilter] = useState("all");

  // 🧠 Load todos from localStorage when app starts
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos?.length) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  // 🧠 Save todos to localStorage whenever they change
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAddTodo = () => {
    if (todo.trim() === "") 
      return;
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false, // default
    };
    setTodos([...todos, newTodo]);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  }

  const handleSaveTodo = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, text: editText } : todo
    ));
    setEditingId(null);
    setEditingText("");
  }

  const handleToggleComplete = (id) => {
    setTodos(todos.map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div>
      <div style={{ padding: "20px" }}></div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo"
      />

      <button onClick={handleAddTodo}>Add Todo</button>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>

      <ul>
        {filteredTodos.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggleComplete(item.id)}
            />
            {editingId === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={() => handleSaveTodo(item.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
              <span
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                    marginLeft: "8px",
                  }}
                >
                  {item.text}
                </span>
                <button onClick={() => handleEditTodo(item.id, item.text)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
