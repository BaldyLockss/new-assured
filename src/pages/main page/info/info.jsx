import styles from "./info.module.css";

const Info = (props) => {
  return (
    <div className={styles.container__main}>
      <div className={styles.text}>
        {props.data.information.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
      <div className={styles.img}>
        <img src={props.data.src} alt={props.data.alt} />
      </div>
    </div>
  );
};

export default Info;
