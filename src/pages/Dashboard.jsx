import React, { useEffect, useState } from 'react';
import ManageUsers from '../components/ManageUsers';
import AssignTasks from '../components/AssignTasks';
import ViewAllTasks from '../components/ViewAllTasks';
import PromoteUsers from '../components/PromoteUsers';
import ViewAssignedTasks from '../components/ViewAssignedTasks';
import UpdateTaskStatus from '../components/UpdateTaskStatus';
import CheckDeadlines from '../components/CheckDeadlines';
import MarkTasksCompleted from '../components/MarkTasksCompleted';

const Dashboard = () => {
  const [role, setRole] = useState(null);
  const [activeTab, setActiveTab] = useState(0); // Track the active tab

  useEffect(() => {
    // Simulated user session check
    const storedRole = 'admin'//localStorage.getItem('role'); // 'admin' or 'user'

    if (!storedRole) {
      window.location.href = '/dashboard'; // Redirect to login if no role is found
    } else {
      setRole(storedRole);
    }
  }, []);

  const adminTabs = [
    { title: 'Manage Users', component: <ManageUsers /> },
    { title: 'Assign Tasks', component: <AssignTasks /> },
    { title: 'View All Tasks', component: <ViewAllTasks /> },
    { title: 'Promote or Remove Users', component: <PromoteUsers /> },
  ];

  const userTabs = [
    { title: 'View Assigned Tasks', component: <ViewAssignedTasks /> },
    { title: 'Update Task Status', component: <UpdateTaskStatus /> },
    { title: 'Check Deadlines', component: <CheckDeadlines /> },
    { title: 'Mark Tasks as Completed', component: <MarkTasksCompleted /> },
  ];

  const tabs = role === 'admin' ? adminTabs : userTabs;

  const handleTabClick = (index) => {
    setActiveTab(index); // Update the active tab index
  };

  return (
    <div>

      <div className=" p-4 rounded-lg bg-blue-200 shadow-lg min-h-[60vh] w-full">
        <div className="flex space-x-4 mb-4">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => handleTabClick(index)} // Handle tab click
              className={`px-4 py-2 font-semibold rounded-lg transition duration-300 ${
                activeTab === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          {/* Render the component for the active tab */}
          {tabs[activeTab].component}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;