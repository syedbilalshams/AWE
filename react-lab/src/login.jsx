import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage("Please fill in all fields.");
    } else {
      setMessage(`Welcome, ${username}!${remember ? " (Remembered)" : ""}`);
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h2>LOGIN</h2>
      <label>User Name</label>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="👤" />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="🔒" />
      <div className="row">
        <button type="submit">Submit</button>
        <div>
          <label><input type="checkbox" checked={remember}
                 onChange={() => setRemember(!remember)} /> Remember me</label><br />
          <a href="#" onClick={() => setMessage("Password reset link sent!")}>Forgot Password ?</a>
        </div>
      </div>
      {message && <p className="msg">{message}</p>}
    </form>
  );
}