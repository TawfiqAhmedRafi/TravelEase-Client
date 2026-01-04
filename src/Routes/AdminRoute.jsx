import React from 'react';

import Forbidden from '../Components/Forbidden/Forbidden';
import useAuth from '../Router/hooks/useAuth';
import useUserRole from '../Router/hooks/useUserRole';

const AdminRoute = ({children}) => {
    const {loading} = useAuth();
    const {role , isLoading} = useUserRole();
    if(loading || isLoading){
        return <span className='loading loading-bars text-primary'></span>
    }
     if(role!== 'admin'){
        return <Forbidden></Forbidden>
    }
    return children;
};

export default AdminRoute;