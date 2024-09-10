import React, { useEffect, useState } from "react";

const App: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch("http://localhost:3000/users/1");
        const response = await fetch("http://0.0.0.0:8080/users/1");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        //setMessage(data.name + ": " + data.email);
        setMessage(data.name + ": " + data.age);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Hello, DaisyUI with Vite, React, and TypeScript!
        </h1>
        {/*<button className="btn mt-4">Click Me</button>*/}
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default App;
