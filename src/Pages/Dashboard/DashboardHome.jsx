import React from 'react';
import useUserRole from '../../Router/hooks/useUserRole';
import AdminDashboard from '../AdminDashboard/AdminDashboard';
import UserDashboard from '../UserDashboard/UserDashboard';

const DashboardHome = () => {
    const {role} = useUserRole();
    if(role==="admin"){
        return <AdminDashboard></AdminDashboard>
    }
    if(role==="user"){
        return <UserDashboard></UserDashboard>
    }
};

export default DashboardHome;