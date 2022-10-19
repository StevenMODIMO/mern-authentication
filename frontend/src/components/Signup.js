import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { BsBoxArrowInRight } from 'react-icons/bs'

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, loading, error } = useSignup(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} className='icon'>Signup <BsBoxArrowInRight /></button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
