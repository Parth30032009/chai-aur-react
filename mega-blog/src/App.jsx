import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { Header, Footer } from "./components/index";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="min-h-screen flex flex-wrap content-between bg-red-400">
      <div className="w-full block relative">
        <Header />
        <main className="mt-10">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
