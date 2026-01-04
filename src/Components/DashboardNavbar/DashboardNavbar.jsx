import { useState } from "react";
import { Bell, X } from "lucide-react";
//import { useQuery, useQueryClient } from "@tanstack/react-query";

//import useAxiosSecure from "../../hooks/useAxiosSecure";


import Swal from "sweetalert2";
import useAuth from "../../Router/hooks/useAuth";

const DashboardNavbar = () => {
  const { user, logOut } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const queryClient = useQueryClient();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  
  return (
    <header className="h-16 bg-base-100 border-b border-base-300 px-6 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-base-content">Dashboard</h2>

      <div className="flex items-center gap-4">
        

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="fixed top-0 right-0 h-full w-80 bg-base-200 backdrop-blur-md shadow-xl z-50 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b border-base-300">
              <h3 className="text-lg font-semibold">Notifications</h3>
              <button onClick={() => setSidebarOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

         

          </div>
        )}

        {/* User Info */}
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-base-content">
            {user?.displayName || "User"}
          </p>
          <p className="text-xs text-neutral-content">{user?.email}</p>
        </div>

        <img
          src={user?.photoURL || "https://i.ibb.co/2kR5Fz0/user.png"}
          alt="User"
          className="w-9 h-9 rounded-full border border-base-300 object-cover"
        />

        {/* Logout */}
        <button onClick={logOut} className="btn btn-primary">
          Logout
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;
