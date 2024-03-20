//CSS imports
import styles from "./section.module.css";
//COMPONENT imports
import Card from "./card/card";

const Section = (props) => {
  return (
    <div className={styles.container__main}>
      <h2>{props.data.title}</h2>
      <img src={props.data.src} alt={props.data.alt} />
      <div className={styles.container__cards}>
        {props.data.cards.map((card, i) => {
          return <Card card={card} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Section;
