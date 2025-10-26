export default function EditTask() {
  return (
    <div>
      <p>{task.description}</p>
      <button onClick={() => confirmEdit(task.id)}>Finish</button>
    </div>
  );
}
