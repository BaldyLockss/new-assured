import styles from "./card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src="/images/cardbackground.png" alt="sketched background" />
      <div className={styles.card__img}>
        <img src={props.card.src} alt={props.card.alt} />
      </div>
      <div className={styles.card__list}>
        <ul>
          {props.card.items.map((item, i) => {
            return (
              <li key={i}>
                <img src="/assets/svgs/tick.svg" alt="sketched tick" />
                <p>{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Card;
