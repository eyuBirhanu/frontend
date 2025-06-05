const AddTaskForm = ({ newTask, setNewTask, onAddTask }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  return (
    <form
      onSubmit={onAddTask}
      className="bg-white p-6 rounded-lg shadow-md mb-8"
    >
      <div className="space-y-4">
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleInputChange}
          placeholder="Task title (e.g., Buy groceries)"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none  focus:outline-none focus:ring-2 focus:ring-cyan-500"
          required
        />
        <textarea
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Add a little description (optional)"
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 mt-4 rounded-lg transition duration-300"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
