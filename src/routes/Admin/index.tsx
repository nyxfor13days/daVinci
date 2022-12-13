import { HiUserCircle, HiLockClosed } from "react-icons/hi2";
import "./Admin.css";

const AdminLogin = () => {
  return (
    <div className="container">
      <section className="login">
        <h1 className="login__title">Admin Login</h1>
        <form className="login__form">
          <label htmlFor="user-id" className="form__input">
            <HiUserCircle className="icon" />
            <input name="user-id" type="text" placeholder="Admin ID" />
          </label>

          <label htmlFor="password" className="form__input">
            <HiLockClosed className="icon" />
            <input name="password" type="password" placeholder="Password" />
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
