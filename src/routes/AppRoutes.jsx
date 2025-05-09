import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import TaskDetails from '../pages/TaskDetails.jsx';
import SignUp from '../pages/Signup.jsx';
import UserDashboard from '../pages/UserDashboard.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />  
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/tasks/:id" element={<TaskDetails />} />
    </Routes>
  );
}
