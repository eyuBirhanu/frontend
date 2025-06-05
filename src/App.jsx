import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

const initialTasks = [
  {
    id: 1,
    title: "Wake Up Early",
    description:
      "Get out of bed by 6:00 AM and start the day with a glass of water.",
    completed: false,
    isExpanded: false,
  },
  {
    id: 2,
    title: "Morning Coding Session",
    description:
      "Spend 1 hour working on a personal project or practicing algorithms.",
    completed: false,
    isExpanded: false,
  },
  {
    id: 3,
    title: "Go to School",
    description:
      "Attend classes and take notes, especially for math and science subjects.",
    completed: true,
    isExpanded: false,
  },
  {
    id: 4,
    title: "Lunch with Friends",
    description: "Meet up with classmates during lunch and catch up.",
    completed: true,
    isExpanded: false,
  },
  {
    id: 5,
    title: "Evening Review",
    description:
      "Spend 30 minutes reviewing school notes or revising for tomorrow.",
    completed: false,
    isExpanded: false,
  },
  {
    id: 6,
    title: "Night Walk",
    description:
      "Take a short 15-minute walk after dinner to relax and clear your mind.",
    completed: false,
    isExpanded: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [filter, setFilter] = useState("all");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.title.trim() === "") {
      return;
    }

    const taskToAdd = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      completed: false,
      isExpanded: false,
    };
    setTasks([taskToAdd, ...tasks]);
    setNewTask({ title: "", description: "" });
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleToggleExpand = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isExpanded: !task.isExpanded } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") {
      return !task.completed;
    }
    if (filter === "completed") {
      return task.completed;
    }
    return true;
  });

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <main className="w-full max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-700">
          My Tasks
        </h1>

        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          onAddTask={handleAddTask}
        />

        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${
              filter === "all"
                ? "bg-cyan-500 text-white"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${
              filter === "pending"
                ? "bg-cyan-500 text-white"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${
              filter === "completed"
                ? "bg-cyan-500 text-white"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            Completed
          </button>
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDeleteTask}
          onToggleExpand={handleToggleExpand}
        />
      </main>
      <footer class="bg-gray-100 text-gray-400 text-sm text-center py-4">
        <p>
          &copy; 2025
          <a
            href="https://www.linkedin.com/in/eyu-birhanu"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 hover:text-blue-600 hover:underline"
          >
            {" "}
            Eyu Birhanu
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
