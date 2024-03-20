//CSS import
import styles from "./faq.module.css";
//REACT imports
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container__main}>
      <div className={styles.questions}>
        <h2>hello</h2> <button onClick={() => navigate(-1)}>back</button>
      </div>
    </div>
  );
};

export default FAQ;
