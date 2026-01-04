import React from 'react';
import useUserRole from '../../Router/hooks/useUserRole';
import AdminDashboard from '../AdminDashboard/AdminDashboard';

const DashboardHome = () => {
    const {role} = useUserRole();
    if(role==="admin"){
        return <AdminDashboard></AdminDashboard>
    }
};

export default DashboardHome;