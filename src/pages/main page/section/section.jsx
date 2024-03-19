//CSS imports
import styles from "./section.module.css";
//REACT imports
import { useState } from "react";

const Section = (props) => {
  const [cardRotated, setCardRotated] = useState(
    props.data.cards.map(() => false)
  );

  const rotateHandler = (i) => {
    const copyState = [...cardRotated];
    copyState[i] = !copyState[i];
    setCardRotated(copyState);
  };
  return (
    <div className={styles.container__main}>
      <img src={props.data.src} alt={props.data.alt} />
      <div className={styles.title}>
        <h1>{props.data.title}</h1>
      </div>
      <div className={styles.body}>
        {props.data.cards.map((card, i) => {
          return (
            <div className={styles.wrapper}>
              <div
                className={styles.card}
                key={i}
                onClick={() => rotateHandler(i)}
              >
                <div className={styles.card__img}>
                  <img
                    style={{
                      transform: cardRotated[i] ? "scale(0)" : "scale(1)",
                      opacity: cardRotated[i] ? "0" : "1",
                    }}
                    src={card.src}
                    alt={card.alt}
                  />
                </div>
                <div
                  className={styles.card__body}
                  style={{
                    transform: cardRotated[i] ? "scale(0)" : "scale(1)",
                    opacity: cardRotated[i] ? "0" : "1",
                  }}
                >
                  <ul className={styles.body__list}>
                    {card.items.map((item, i) => {
                      return (
                        <li className={styles.list__item} key={i}>
                          <img src="/assets/svgs/tick.svg" alt="" />
                          <p>{item}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div
                  className={styles.back__wrapper}
                  style={{
                    transform: cardRotated[i] ? "scale(1)" : "scale(0)",
                    opacity: cardRotated[i] ? "1" : "0",
                  }}
                >
                  <div className={styles.card__back}>
                    <img
                      src="/assets/svgs/cardbackground.svg"
                      alt="sketched box filling"
                    />
                    <div className={styles.text}>
                      <p>{card.cardBack}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.btn}></div>
    </div>
  );
};

export default Section;
