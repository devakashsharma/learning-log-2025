import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/route")
      .then((response) => {
        setRoutes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching routes:", error);
      });
  });

  return (
    <>
      <div className="bg-purple-200 h-screen flex justify-center items-center flex-col">
        <h1 className="text-5xl font-bold">Akash</h1>
        <p>routes: {routes.length}</p>
        {routes.map((route) => (
          <div key={route.id}>
            <h2 className="text-2xl font-semibold">{route.title}</h2>
            <p>{route.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
