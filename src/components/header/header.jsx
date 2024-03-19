//CSS imports
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.container__main}>
      <div className={styles.logo}>
        <img
          src="/assets/svgs/Logo.svg"
          alt="sketched company logo of a key and house keychain"
        />
      </div>

      <div className={styles.phone}>
        <a name="telephone link to assured exchange" href="tel:07504688872">
          <img src="/assets/svgs/phone.svg" alt="sketched phone" />
        </a>
      </div>
    </div>
  );
};

export default Header;
