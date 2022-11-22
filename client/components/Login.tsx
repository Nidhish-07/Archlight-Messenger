import React from "react";
import styles from "../styles/Login.module.scss";
import Image from "next/image";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="bg-black relative text-white">
      <div>Login</div>
      <div>
        <div className={styles.login_box}>
          <h2>Login</h2>
          <form>
            <div className={styles.user_box}>
              <input type="text" name="" />
              <label>Username</label>
            </div>
            <div className={styles.user_box}>
              <input type="password" name="" />
              <label>Password</label>
            </div>
            <button >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* background image */}
      <div>
        {/* <Image src={}></Image> */}
      </div>
    </div>
  );
};

export default Login;
