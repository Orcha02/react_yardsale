import React from "react";
import "@styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <h1 className="error-title">Not Found</h1>
      <img
        className="error"
        src="https://raw.githubusercontent.com/Orcha02/holberton-system_engineering-devops/79f47bf24f1bd61898ea39eca89085bc5a442b2a/0x0C-web_server/404.jpg"
      />
    </div>
  );
};

export default NotFound;
