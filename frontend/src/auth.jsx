import { useState } from "react";
import "./auth.css";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const url = isLogin
      ? "http://127.0.0.1:8000/api/login/"
      : "http://127.0.0.1:8000/api/register/";

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />

        {!isLogin && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          {isLogin ? "Sign In" : "Sign Up"}
        </button>

        <p className="switch-text">
          {isLogin ? "New to Netflix?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign up now." : " Sign in."}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Auth;
