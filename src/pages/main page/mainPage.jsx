//CSS import
import styles from "./mainPage.module.css";
//COMPONENT imports
import Landing from "./landing section/landing";
import Section from "./section/section";
//DATA imports
import { sellData, buyData } from "../../data/data";
const MainPage = () => {
  return (
    <div className={styles.container__main}>
      <Landing />
      <Section data={sellData} />
      <Section data={buyData} />
    </div>
  );
};

export default MainPage;
