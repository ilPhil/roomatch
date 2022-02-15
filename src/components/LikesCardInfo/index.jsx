import styles from "./LikesCardInfo.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
// import { FaHeart } from "react-icons/fa";

const LikesCardInfo = ({ showInfo, setShowInfo }) => {
  return (
    <div className={styles.background}>
      <div className={styles.closeBtn} to="/">
        <IoIosCloseCircle onClick={() => setShowInfo(!showInfo)} />
      </div>
      <div className={styles.modalInfo}>
        <div className={styles.headerInfo}>
          <h3>Name Surname </h3>
          <p>Age 32</p>
          <p>Augusta, (SR)</p>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          scelerisque dignissim orci vel gravida. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia curae; Aenean
          scelerisque dignissim
        </p>

        <fieldset className={styles.fieldset}>
          <legend>Friendly for</legend>
          <section>
            <div className={styles.flexColumn}>
              <div>
                <label className={styles.labelContainer} htmlFor="lgbtq">
                  LGBTQ+
                  <input
                    readOnly
                    type="checkbox"
                    name="action"
                    id="lgbtq"
                    // checked={values.friendlyFor.lgbtq === 1 ? true : false}
                    // onChange={(e) => handleInputPref("lgbtq", e)}
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>

              <div>
                <label className={styles.labelContainer} htmlFor="pet_owner">
                  Pet owner
                  <input
                    readOnly
                    // checked={values.friendlyFor.pet_owner === 1 ? true : false}
                    // onChange={(e) => handleInputPref("pet_owner", e)}
                    type="checkbox"
                    name="action"
                    id="pet_owner"
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>
              <div>
                <label
                  className={styles.labelContainer}
                  htmlFor="multicultural"
                >
                  Multicultural
                  <input
                    readOnly
                    // checked={
                    // values.friendlyFor.multicultural === 1 ? true : false
                    // }
                    // onChange={(e) => handleInputPref("multicultural", e)}
                    type="checkbox"
                    name="action"
                    id="multicultural"
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>
            </div>

            <div className={styles.flexColumn}>
              <div>
                <label className={styles.labelContainer} htmlFor="veg">
                  Veg
                  <input
                    // checked={values.friendlyFor.veg === 1 ? true : false}
                    type="checkbox"
                    // onChange={(e) => handleInputPref("veg", e)}
                    name="action"
                    id="veg"
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>

              <div>
                <label className={styles.labelContainer} htmlFor="smooker">
                  Smooker
                  <input
                    // checked={values.friendlyFor.smooker === 1 ? true : false}
                    // onChange={(e) => handleInputPref("smooker", e)}
                    type="checkbox"
                    name="action"
                    id="smooker"
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>

              <div>
                <label className={styles.labelContainer} htmlFor="party">
                  Party lover
                  <input
                    // checked={values.friendlyFor.party === 1 ? true : false}
                    // onChange={(e) => handleInputPref("party", e)}
                    type="checkbox"
                    name="action"
                    id="party"
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>
            </div>
          </section>
        </fieldset>
        <div>
          <FiHeart className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default LikesCardInfo;
