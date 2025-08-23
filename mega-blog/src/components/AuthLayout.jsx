import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      // Protected route, but user not logged in → go to login
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      // Public-only route, but user IS logged in → go to home (or dashboard)
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : children;
};

export default Protected;
