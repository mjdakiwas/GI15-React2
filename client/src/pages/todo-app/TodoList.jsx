import { useState, useEffect } from "react";

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = async (e) => {
    e.preventDefault();

    if (task.trim() !== "") {
      try {
        const res = await fetch("/api/tasks", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: Date.now(),
            description: task,
            completed: false,
          }),
        });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setTasks(data);
        setTask("");
      } catch (err) {
        console.log("Error submitting form:", err);
      }
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Failed to delete task");
      const data = await res.json();
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    } catch (err) {
      console.log("Error deleting task:", err);
    }
  };

  const editTask = async (id) => {
    try {
      const res = await fetch(`/api/tasks/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });
      if (!res.ok) throw new Error("Failed to modify task");
      const data = await res.json();
      console.log(data);
      const modifiedTask = tasks.indexOf(data.id);
      setTasks((prevTasks) => (prevTasks[modifiedTask] = modifiedTask));
    } catch (err) {
      console.log("Error modifying task:", err);
    }
  };

  const clearList = async () => {
    try {
      const res = await fetch(`/api/tasks`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Failed to clear list");
      // await res.json();
      setTasks([]);
    } catch (err) {
      console.log("Error clearing task list:", err);
    }
  };

  return (
    <main>
      <h1>Challenge: Hard</h1>
      <p>
        Develop a to-do list app with React hooks and React Router. Implement
        features like adding, editing, and deleting tasks. Use React Router to
        navigate between different pages, such as a task list and a task detail
        page.
      </p>
      <form onSubmit={addTask}>
        <label htmlFor="add">Add Task</label>
        <input
          type="text"
          id="add-task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <h2>To do List</h2>
      <button onClick={() => clearList()}>Clear</button>
      <section className="task-list">
        {tasks.map((task, index) => (
          <div key={index}>
            <p>{task.description}</p>
            <button onClick={() => editTask(task.id)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </section>
    </main>
  );
}
