import { api } from "../api/axios";
import { useEffect, useState } from "react";
import { usePopup } from "../Context/PopupContext.jsx";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export const UserContext = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUserState = async () => {
      try {
        const response = await api.get("/user/userState", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUser(response.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      }
    };

    fetchUserState();
  }, []);
  return { user, setUser };
};

export const useAuth = () => {
  const Location = useLocation();
  const { user } = UserContext();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/Registration" state={{ from: Location }} replace />
  );
};

export const Logout = () => {
  const navigate = useNavigate();
  const { showPopup } = usePopup();
  const handleLogout = async () => {
    try {
      const response = await api.post("/user/logout", {
        withCredentials: true,
      });
      showPopup(5, response.data.message);
      setTimeout(() => {
        window.location.replace("http://localhost:5173");
      }, 6000);
    } catch (error) {
      showPopup(5, error.response.data.message);
    }
  };

  return (
    <button
      className="text-sm text-white lg:text-gray cursor-pointer hover:underline"
      onClick={handleLogout}
    >
      Log out
    </button>
  );
};
