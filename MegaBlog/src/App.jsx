import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import authservice from "./appwrite/auth";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components/index";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout({}));
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setloading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
