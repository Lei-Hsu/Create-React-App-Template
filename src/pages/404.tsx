import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => {
      clearTimeout();
    };
  }, []);
  return <div>404 The Page Is Not Found</div>;
};

export default NotFound;
