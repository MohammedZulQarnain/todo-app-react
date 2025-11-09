import { useState, useEffect } from 'react';

function Practice() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState("");
    const [editText, setEditText] = useState();
    const [filter, setFilter] = useState("all");
    useEffect(()=>{
        const storedTodos = localStorage.getItem("todos")
        if(storedTodos?.length){
            setTodos(JSON.parse(storedTodos))
        }
    },[])

    useEffect(()=>{
        if(todos.length>0){
            localStorage.setItem("todos",JSON.stringify(todos))
        }
    },[todos])

    const handleAddTodo = () => {
        if (todo.trim() === "")
            return;
        const newTodo = {
            id: Date.now(),
            text: todo,
            completed: false
        };
        setTodos([...todos, newTodo]);
        setTodo("")
    }

    const handleDeleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleEditTodo = (currentId, currentText) => {
        setEditId(currentId);
        setEditText(currentText);
    }

    const handleSaveTodo = (id) => {
        setTodos(
            todos.map((todo) => todo.id === id ? { ...todo, text: editText } : todo
            )
        )
        setEditId(null)
        setEditText("")
    }

    const HandleToggel = (id) => {
        setTodos(
            todos.map(
                (todo) =>
                    todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const filteredTodos = 
        todos.filter((todo) => {
            if (filter === "completed") return todo.completed;
            if (filter === "pending") return !todo.completed;
            return true; // for "all"
        });


    return (
        <div>
            <div>Todo App</div>
            <input type='text'
                value={todo}
                placeholder='Enter todo'
                onChange={(e) =>
                    setTodo(e.target.value)
                }
            />
            <button
                onClick={handleAddTodo}>
                Add
            </button>
            <div style={{ marginTop: "10px" }}>
                <button onClick={()=>setFilter("all")}>All</button>
                <button onClick={()=>setFilter("completed")}>Completed</button>
                <button onClick={()=>setFilter("pending")}>Pending</button>
            </div>
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type='checkbox'
                            checked={todo.completed}
                            onChange={() => { HandleToggel(todo.id) }}
                        />
                        {editId === todo.id ? (
                            <>
                                <input
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                />
                                <button onClick={() => handleSaveTodo(todo.id)}>
                                    Save
                                </button>
                            </>
                        ) :
                            (
                                <>

                                    <span
                                        style={{
                                            textDecoration: todo.completed ? "line-through" : "none",
                                            marginLeft: "8px",
                                        }}
                                    >
                                        {todo.text}
                                    </span>
                                    <button onClick={() => handleDeleteTodo(todo.id)}>
                                        Delete
                                    </button>
                                    <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                                        Edit
                                    </button>
                                </>
                            )
                        }
                    </li>

                ))
                }
            </ul>

        </div>
    );
}

export default Practice;