import "../../styles/todo-app/task.css";

export default function Task({ task, setIsEditing, setEditingId, deleteTask }) {
  return (
    <div className="task">
      <p className="task__description">{task.description}</p>
      <button
        onClick={() => {
          setIsEditing(true);
          setEditingId(task.id);
        }}
      >
        Edit
      </button>
      <button onClick={() => deleteTask(task.id)} className="task__deleteBtn">
        Delete
      </button>
    </div>
  );
}
