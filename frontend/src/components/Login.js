import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";
import { BsBoxArrowInRight } from "react-icons/bs";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>
          Don't have an account ?{" "}
          <Link to="/signup" className="signup">
            Signup
          </Link>
        </h3>
        <input
          type="text"
          value={email}
          placeholder="example@email.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isLoading} className="icon">
          Login <BsBoxArrowInRight />
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
