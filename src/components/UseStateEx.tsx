import React from "react";
import { User } from "../interfaces/useStateInterfaces";


const UseStateEx = () => {
  const [user, setUser] = React.useState<User | null>(null);

  const fetchUser = () => {
    setUser({
      name: "Nick",
      age: 24,
      instrument: "guitar",
      stack: {
        frontend: "React",
        backend: "Express and Node",
        database: "MongoDB",
      },
      drink: "coffee",
      isAdmin: false,
    })
};

  return (
    <div>
      <button onClick={fetchUser}>Fetch User</button>
    { user && <h2>{`Welcome back, ${user?.name}`}</h2>}   
    { user && <p>{`Would you like to have a ${user?.drink}?`}</p>}
    </div>
  );
};

export default UseStateEx;
