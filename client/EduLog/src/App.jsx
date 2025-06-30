import React from 'react';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ManageTasks from "./pages/Admin/ManageTasks";
import CreateTask from "./pages/Admin/CreateTask";
import ManageUsers from "./pages/Admin/ManageUsers";
import UserDashboard from "./pages/User/UserDashboard";
import MyTasks from "./pages/User/MyTasks";
import ViewTaskDetails from './pages/User/ViewTaskDetails';
import PrivateRoute from './routes/PrivateRoute';
import UserProvider,{UserContext} from './context/userContext';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';

const App = () =>{
  return(
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* Admin Routes */}
            <Route  element={<PrivateRoute allowedRoles={["admin"]} />}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/tasks" element={<ManageTasks />} />
                <Route path="/admin/create-task" element={<CreateTask />} />
                <Route path="/admin/users" element={<ManageUsers />} />
            </Route>

            {/* User Routes */}
            <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
              <Route path="/user/dashboard" element={<UserDashboard />} />
              <Route path="/user/tasks" element={<MyTasks />} />
              <Route path="/user/task-details/:id" element={<ViewTaskDetails />}/>            
            </Route>  
            {/*Defalut Route*/}
            <Route path="/" element={<Root/>}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>  
          </Routes>
           <Toaster
              toastOptions={{
                className:"",
                style:{
                  fontSize:"13px",
                },  
              }}  
            />   
        </Router>
      </div>
     
    </UserProvider>
  );
};

export default App;
const Root = () =>{
  const{user, loading}=useContext(UserContext);
  if(loading) return <div className="text-center mt-10">Loading...</div>;
  if(!user){
    return <Navigate to="/login" />;
  }
  return user.role === "admin" ? <Navigate to="/admin/dashboard"/>:<Navigate to="/user/dashboard" />;
};