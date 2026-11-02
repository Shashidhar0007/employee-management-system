import React, { useState, useEffect } from "react";

function App() {

  const [employees, setEmployees] = useState([]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const getEmployees = async () => {

    const response = await fetch(
      "http://localhost:5000/employees"
    );

    const data = await response.json();

    setEmployees(data);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  const addEmployee = async () => {

    await fetch(
      "http://localhost:5000/employees",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email
        })
      }
    );

    getEmployees();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Employee Management</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={addEmployee}>
        Add Employee
      </button>

      <hr />

      {employees.map(emp => (
        <div key={emp.id}>
          {emp.id} - {emp.name} - {emp.email}
        </div>
      ))}
    </div>
  );
}

export default App;