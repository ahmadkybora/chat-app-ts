import Button from "../../components/Button";
import styles from "./login.module.scss";

const Login = () => { 
  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <input className="f-form-control"/>
        <input className="f-form-control"/>
        <Button title="Login"/>
      </div>
    </div>
  )
}

export default Login;