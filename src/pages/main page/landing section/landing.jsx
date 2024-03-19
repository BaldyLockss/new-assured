//CSS import
import styles from "./landing.module.css";
//COMPONENT imports

//DATA imports
import { LandingList } from "../../../data/data";

const Landing = () => {
  return (
    <div className={styles.container__main}>
      <div className={styles.clouds}>
        <img src="/assets/svgs/clouds.svg" alt="sketched clouds" />
        <img src="/assets/svgs/clouds.svg" alt="sketched clouds" />
        <img src="/assets/svgs/clouds.svg" alt="sketched clouds" />
        <img src="/assets/svgs/clouds.svg" alt="sketched clouds" />
      </div>

      <img src="/assets/svgs/Mainpage.svg" alt="a sketched house background" />
      <div className={styles.container__center}>
        <div className={styles.list}>
          <ul>
            {LandingList.items.map((item, i) => {
              return (
                <li key={i}>
                  <img
                    src="/assets/svgs/tick.svg"
                    alt="sketched tick in a circle"
                  />
                  <p>{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.card}>
          <img src="/assets/svgs/cardbackground.svg" alt="sketch background" />
          <h1>
            Click <span>here</span> for a FREE valuation
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
