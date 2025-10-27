export default function Task({ task, setIsEditing, setEditingId, deleteTask }) {
  return (
    <div>
      <p>{task.description}</p>
      <button
        onClick={() => {
          setIsEditing(true);
          setEditingId(task.id);
        }}
      >
        Edit
      </button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}
