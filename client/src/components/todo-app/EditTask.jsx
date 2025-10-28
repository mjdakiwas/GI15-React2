import { useState } from "react";
import "../../styles/todo-app/task.css";

export default function EditTask({
  task,
  setIsEditing,
  setEditingId,
  updateTask,
}) {
  const [editedDesc, setEditedDesc] = useState(task.description);

  const handleSave = () => {
    updateTask(task.id, { description: editedDesc });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="task">
      <input
        type="text"
        value={editedDesc}
        onChange={(e) => setEditedDesc(e.target.value)}
        className="task__descriptionInput"
      />
      <button onClick={() => setIsEditing(false)}>Cancel</button>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
