import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onToggleComplete, onDelete, onToggleExpand }) => {
  if (tasks.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        No tasks found. Add one to get started!
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDelete={onDelete}
          onToggleExpand={onToggleExpand}
        />
      ))}
    </div>
  );
};

export default TaskList;
