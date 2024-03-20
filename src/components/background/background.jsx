import styles from "./background.module.css";

const Background = () => {
  return (
    <div className={styles.container__main}>
      <div className={styles.clouds}>
        <img src="/assets/svgs/clouds.svg" alt="sketched clouds" />
        <img src="/assets/svgs/clouds.svg" alt="sketched clouds" />
        <img src="/assets/svgs/clouds.svg" alt="sketched clouds" />
        <img src="/assets/svgs/clouds.svg" alt="sketched clouds" />
      </div>

      <img src="/assets/svgs/Mainpage.svg" alt="a sketched house background" />
    </div>
  );
};

export default Background;
