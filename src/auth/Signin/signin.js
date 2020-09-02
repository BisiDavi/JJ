import React, { useState } from "react";
import passport from "passport";
import { Link } from "react-router-dom";
import { Layout } from "../../components/import";

const Signin = () => {
  const [form, setForm] = useState({
    emailPhone: "",
    password: ""
  });

  const emailPhoneNumberHandler = e =>
    setForm({
      ...form,
      emailPhone: e.target.value
    });

  const passwordHandler = e =>
    setForm({
      ...form,
      password: e.target.value
    });

  return (
    <div>
      <Layout>
        <div className="signin">
          <div className="title">
            <h3>Sign in</h3>
          </div>
          <div className="body">
            <form>
              <input
                value={form.emailPhone}
                type="text"
                onChange={emailPhoneNumberHandler}
                placeholder="Email or Phone Number"
              />
              <input
                type="password"
                value={form.emailPhone}
                onChange={passwordHandler}
                placeholder="Password"
              />
              <Link to="/forgot-password">Forgot your password</Link>
              <button>SIGN IN</button>
            </form>
          </div>
          <div>
            <p>Dont have an account?</p>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Signin;
