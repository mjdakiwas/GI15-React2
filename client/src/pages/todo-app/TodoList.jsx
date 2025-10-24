export default function TodoList() {
  return (
    <main>
      <h1>Challenge: Hard</h1>
      <p>
        Develop a to-do list app with React hooks and React Router. Implement
        features like adding, editing, and deleting tasks. Use React Router to
        navigate between different pages, such as a task list and a task detail
        page.
      </p>
      <form>
        <label htmlFor="add">Add Task</label>
        <input type="text" id="add-task" />
        <button type="submit">Add</button>
      </form>
      <h2>To do List</h2>
      <section className="task-list"></section>
    </main>
  );
}
