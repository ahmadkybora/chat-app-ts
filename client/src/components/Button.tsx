import styles from "../login/login.module.scss";

const Button = ({ title }) => {
    return (
        <button 
            className={styles.button}
            type="button"
            >
                {title}
        </button>
    )
}

export default Button;
