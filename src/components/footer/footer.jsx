import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.main__section}>
        <div className={styles.logo}>
          <img
            src="/assets/svgs/AssuredLogo.svg"
            alt="corporate company logo"
          />
        </div>
        <div className={styles.footer__body}>
          <div className={styles.navigation__list}>
            <h2>Navigate</h2>
            <ul>
              <li>Selling your home</li>
              <li>Cash buyer opportunities</li>
              <li>FAQ's</li>
            </ul>
          </div>
          <div className={styles.contact}>
            <h2>Contact</h2>
            <ul>
              <li>Tel: 01613383287</li>
              <li>
                <a name="email link" href="mailto:info@assuredexchange.co.uk">
                  Email:info@assuredexchange.co.uk
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.socials}>
            <h2>Social</h2>
            <ul>
              <li>
                <div className={styles.icon}>
                  <a
                    name="facebook link"
                    href="https://www.facebook.com/profile/.php?id=100076463592285"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/assets/svgs/facebook.svg" alt="facebook logo" />
                  </a>
                </div>
              </li>
              <li>
                <div className={styles.icon}>
                  <img src="/assets/svgs/instagram.svg" alt="instagram logo" />
                </div>
              </li>
              <li>
                <div className={styles.icon}>
                  <img src="/assets/svgs/x.svg" alt="x website logo" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.images}>
          <div className={styles.image__a}>
            <img
              src="public\images\HMRC.png"
              alt="his majestys customs and revenue logo"
            />
          </div>
          <div className={styles.image__b}>
            <img
              src="public\images\ICO.png"
              alt="information commissioners office logo"
            />
          </div>
          <div className={styles.image__c}>
            <img
              src="public\images\PRS.png"
              alt="property redress scheme logo"
            />
          </div>
        </div>
      </div>

      <div className={styles.compliance}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in
          asperiores esse neque minima eaque maxime repudiandae? Ut similique
          neque voluptate, voluptatibus maiores rem! Exercitationem, sunt
          minima, quod laborum quos perspiciatis eius id a earum iure
          accusantium libero eos inventore tempora nam debitis nobis suscipit
          fugiat quaerat quisquam deleniti dolore rerum aliquid? Quas aliquid
          sunt facere obcaecati quibusdam delectus unde. Aliquid, aut accusamus.
          Laboriosam suscipit sapiente expedita doloremque non commodi. Aut
          inventore sunt totam facilis deleniti voluptatibus! Harum dolores
          dolorem officia maiores corporis, eaque eos tempore eligendi, suscipit
          minus, recusandae iusto molestiae atque deleniti consectetur.
          Accusantium ab sit natus perferendis.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
