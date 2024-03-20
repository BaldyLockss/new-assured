//CSS import
import styles from "./mainPage.module.css";
//COMPONENT imports
import Landing from "./landing section/landing";
import Section from "./section/section";
import Info from "./info/info";
//DATA imports
import { sellData, buyData, sellInfo, buyInfo } from "../../data/data";
const MainPage = () => {
  return (
    <div className={styles.container__main}>
      <Landing />
      <Section data={sellData} />
      <Info data={sellInfo} />
      <Section data={buyData} />
      <Info data={buyInfo} />
    </div>
  );
};

export default MainPage;
