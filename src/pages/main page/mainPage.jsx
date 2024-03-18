//CSS import
import styles from "./mainPage.module.css";
//COMPONENT imports
//DATA imports
import { MainPageList } from "../../data/data";

const MainPage = () => {
  return (
    <div className={styles.container__main}>
      <div className={styles.clouds}>
        <img src="src\assets\svg's\clouds.svg" alt="sketched clouds" />
      </div>

      <img
        src="src\assets\svg's\Mainpage.svg"
        alt="a sketched house background"
      />
      <div className={styles.container__center}>
        <div className={styles.list}>
          <ul>
            {MainPageList.items.map((item, i) => {
              return (
                <li key={i}>
                  <img
                    src="src\assets\svg's\tick.svg"
                    alt="sketched tick in a circle"
                  />
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.card}>
          <img
            src="src\assets\svg's\cardbackground.svg"
            alt="sketch background"
          />
          <h1>
            Click <span>here</span> for a FREE valuation
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
