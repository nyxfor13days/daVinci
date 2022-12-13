import { FormEvent, useEffect, useState } from "react";
import { HiUserCircle, HiLockClosed } from "react-icons/hi2";
import { useNavigate } from "react-router";
import { useUserStore } from "../../store/UserStore";
import "./Admin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { user, setUser } = useUserStore();
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    user && navigate(`/admin/${user.id}`);
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (adminId === "admin123" && password.length > 0) {
      setUser({ id: adminId });
      navigate(`/${adminId}`);
    } else setError("Invalid credentials");
  };

  return (
    <div className="container">
      <section className="login">
        <h1 className="login__title">Admin Login</h1>
        {error && <p className="login__error">{error}</p>}
        <form onSubmit={handleSubmit} className="login__form">
          <label htmlFor="user-id" className="form__input">
            <HiUserCircle className="icon" />
            <input
              name="user-id"
              type="text"
              placeholder="Admin ID"
              value={adminId}
              onChange={(event) => setAdminId(event.target.value)}
            />
          </label>

          <label htmlFor="password" className="form__input">
            <HiLockClosed className="icon" />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <button type="submit" className="form__button">
            Login
          </button>
        </form>
      </section>
    </div>
  );
};

export default AdminLogin;
