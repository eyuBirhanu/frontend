import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({ task, onToggleComplete, onDelete, onToggleExpand }) => {
  const textLimit = 100;
  const isLongDescription = task.description.length > textLimit;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="mt-1 h-5 w-5 flex-shrink-0 accent-cyan-500"
          />

          <div className="min-w-0 break-words">
            <span
              className={`font-semibold text-lg ${
                task.completed ? "line-through text-gray-400" : "text-gray-800"
              }`}
            >
              {task.title}
            </span>
            {task.description && (
              <p className="text-gray-500 mt-1 text-sm">
                {isLongDescription && !task.isExpanded
                  ? `${task.description.substring(0, textLimit)}...`
                  : task.description}

                {isLongDescription && (
                  <button
                    onClick={() => onToggleExpand(task.id)}
                    className="text-cyan-600 hover:underline ml-2 font-semibold"
                  >
                    {task.isExpanded ? "See less" : "See more"}
                  </button>
                )}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="text-gray-400 hover:text-red-500 transition-colors duration-300 flex-shrink-0"
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
