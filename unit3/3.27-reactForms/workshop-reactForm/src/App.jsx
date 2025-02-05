import { useState, useEffect } from "react";
import "./app.css";
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <div>
        <SignUpForm setToken={setToken} />
        <Authenticate token={token} setToken={setToken} />
      </div>
    </>
  );
}

// components can be reusable
