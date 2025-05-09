import { useEffect, useState } from 'react';

export default function UserDashboard() {
  const [tasks, setTasks] = useState([]);

  // Simulating fetching tasks from an API
  useEffect(() => {
    const dummyTasks = [
      {
        id: 1,
        title: 'Submit Report',
        description: 'Submit the weekly report to the admin',
        dueDate: '2025-05-10',
        priority: 'High',
        completed: false,
      },
      {
        id: 2,
        title: 'Code Review',
        description: 'Review the code for Task Manager frontend',
        dueDate: '2025-05-08',
        priority: 'Medium',
        completed: false,
      },
      {
        id: 3,
        title: 'Team Meeting',
        description: 'Join the standup meeting at 10AM',
        dueDate: '2025-05-07',
        priority: 'Low',
        completed: false,
      },
    ];
    setTasks(dummyTasks);
  }, []);

  // Handle checkbox change with confirmation dialog
  const handleCheckboxChange = (id) => {
    const confirmed = window.confirm('Are you sure you want to submit this task?');
    if (confirmed) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    }
  };

  return (
    <div className="p-6 fixed top-0 left-0 w-full h-full bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Welcome, User 👋</h1>
      <p className="text-lg text-gray-600 mb-2">Here are your tasks assigned by the admin:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`bg-white rounded-lg shadow-lg rounded-xl p-5 border-l-4 ${
              task.completed ? 'border-green-600' : 'border-blue-600'
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h2>
            <p className="text-gray-600 mb-2">{task.description}</p>
            <p className="text-sm text-gray-500">Due Date: {task.dueDate}</p>
            <span
              className={`inline-block mt-3 px-3 py-1 text-sm rounded-full ${
                task.priority === 'High'
                  ? 'bg-red-100 text-red-600'
                  : task.priority === 'Medium'
                  ? 'bg-yellow-100 text-yellow-600'
                  : 'bg-green-100 text-green-600'
              }`}
            >
              {task.priority} Priority
            </span>
            <div className="mt-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(task.id)}
                  className="form-checkbox h-5 w-5 text-green-600 cursor-pointer"
                />
                <span className="text-gray-700">
                  {task.completed ? 'Completed' : 'Mark as Completed'}
                </span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}