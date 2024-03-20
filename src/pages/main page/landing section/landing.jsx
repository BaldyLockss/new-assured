//CSS import
import styles from "./landing.module.css";
//COMPONENT imports

//DATA imports
import { LandingList } from "../../../data/data";

const Landing = () => {
  return (
    <div className={styles.container__main}>
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
          <h1>
            Click{" "}
            <span>
              <a
                name="link to customer form"
                href="https://podio.com/webforms/29434708/2417753"
              >
                here
              </a>
            </span>{" "}
            for a FREE valuation
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
