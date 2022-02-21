import styles from "./LikesCardInfo.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { RiRainbowLine } from "react-icons/ri";
import { BsWifi, BsSnow, BsCash } from "react-icons/bs";

import { likeDislike, peoplelikeDislike } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const LikesCardInfo = ({ data, showInfo, setShowInfo, isRoom }) => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading);
  const loggedUser = useSelector((store) => store.user);

  const currentItemDetails = isRoom ? data.friendlyWith : data.iam;
  const currentItem = data;
  console.log("data: ", currentItem)

  const likeFunc = () => {
    dispatch(isRoom
      ? likeDislike(
        {
          userId: loggedUser._id,
          ilike: currentItem.roomId,
        },
        currentItem.roomId,
        "addlike"
      )
      : peoplelikeDislike(
        {
          roomId: loggedUser.roomId.roomId,
          roomilike: currentItem.id,
        },
        currentItem.id,
        "addlike"
      )
    );
  };

  const genericDetails = () => (
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
                checked={parseInt(currentItemDetails.lgbtq) === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>
          <div>
            <label className={styles.labelContainer} htmlFor="pet_owner">
              Pet owner
              <input
                readOnly
                type="checkbox"
                name="action"
                checked={parseInt(currentItemDetails.pet_owner) === 1 ? true : false}
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
                type="checkbox"
                name="action"
                id="multicultural"
                checked={parseInt(currentItemDetails.multicultural) === 1 ? true : false}
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
                readOnly
                type="checkbox"
                name="action"
                id="veg"
                checked={parseInt(currentItemDetails.veg) === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>
          <div>
            <label className={styles.labelContainer} htmlFor="smooker">
              Smoker
              <input
                readOnly
                type="checkbox"
                name="action"
                id="smooker"
                checked={parseInt(currentItemDetails.smooker) === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>

          <div>
            <label className={styles.labelContainer} htmlFor="party">
              Party lover
              <input
                readOnly
                type="checkbox"
                name="action"
                id="party"
                checked={parseInt(currentItemDetails.party_lover) === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>
        </div>
      </section>
    </fieldset>
  );

  const roomDetails = () => (
    <>
      <div className={styles.flexHeaderInfo}>
        <div className={styles.headerInfo}>
          <h3>
            {data.roomType} Room
          </h3>
          <div className={styles.subHeader}>
            <p>in {data.roomAddress}</p>
            <p>
              {data.town} ({data.city})
            </p>
          </div>
          <h4>
            Price: {data.rentPrice} Euro
          </h4>
        </div>

        <div className={styles.likeBtn}>
          <FiHeart
            onClick={() => !loading && likeFunc()}
            className={`${styles.outlineHeart} ${styles.icon}`}
          />
        </div>
      </div>
      {genericDetails()}
      {aboutTheFlat()}
    </>
  );

  const aboutTheFlat = () => (
    <fieldset className={styles.fieldset}>
      <legend>About the flat</legend>

      {/* Number of roommates in flat */}
      <p className={styles.roommatesTitle}>
        Roommates:
        <span>
          <AiOutlineMan />
          {currentItem.roommates.males}
        </span>
        <span>
          <AiOutlineWoman />
          {currentItem.roommates.females}
        </span>
        <span>
          <RiRainbowLine />
          {currentItem.roommates.others}
        </span>
      </p>


      <section>
        {/* Conforts */}
        <div className={styles.flexColumn}>
          <div className={styles.char}>
            <span
              className={currentItem.aboutFlat.airCond ? styles.active : ""}>
              <BsSnow />
            </span>
            Air Conditioning
          </div>

          <div className={styles.char}>
            <span
              className={currentItem.aboutFlat.billsInc ? styles.active : ""}>
              <BsCash />
            </span>
            Bills included
          </div>

          <div className={styles.char}>
            <span
              className={currentItem.aboutFlat.wifi ? styles.active : ""}>
              <BsWifi />
            </span>
            Wi-Fi
          </div>

          {/* Number of rooms */}
          <div className={styles.char}>
            <p className={styles.charNum}>{currentItem.aboutFlat.bedrooms}</p>
            Bedrooms
          </div>
          <div className={styles.char}>
            <p className={styles.charNum}>{currentItem.aboutFlat.bathrooms}</p>
            Bathrooms
          </div>

          <div className={styles.char}>
            <p className={styles.charNum}>{currentItem.aboutFlat.kitchen}</p>
            Kitchen
          </div>
        </div>

      </section>
    </fieldset>
  );

  const aboutThePerson = () => (
    <fieldset className={styles.fieldset}>
      <legend>About me</legend>
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
                checked={parseInt(currentItemDetails.lgbtq) === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>
          <div>
            <label className={styles.labelContainer} htmlFor="pet_owner">
              Pet owner
              <input
                readOnly
                type="checkbox"
                name="action"
                checked={parseInt(currentItemDetails.pet_owner) === 1 ? true : false}
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
                type="checkbox"
                name="action"
                id="multicultural"
                checked={parseInt(currentItemDetails.multicultural) === 1 ? true : false}
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
                readOnly
                type="checkbox"
                name="action"
                id="veg"
                checked={parseInt(currentItemDetails.veg) === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>
          <div>
            <label className={styles.labelContainer} htmlFor="smooker">
              Smoker
              <input
                readOnly
                type="checkbox"
                name="action"
                id="smooker"
                checked={parseInt(currentItemDetails.smooker) === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>

          <div>
            <label className={styles.labelContainer} htmlFor="party">
              Party lover
              <input
                readOnly
                type="checkbox"
                name="action"
                id="party"
                checked={parseInt(currentItemDetails.party_lover) === 1 ? true : false}
              />
              <span className={styles.mark}></span>
            </label>
          </div>
        </div>
      </section>
    </fieldset>
  );

  const userDetails = () => (
    <>
      <div className={styles.flexHeaderInfo}>
        <div className={styles.headerInfo}>
          <h3>
            {data.name} {data.surname}
          </h3>
          <div className={styles.subHeader}>
            <p>
              from {data.town} ({data.city})
            </p>
          </div>
        </div>

        <div className={styles.likeBtn}>
          <FiHeart
            onClick={() => !loading && likeFunc()}
            className={`${styles.outlineHeart} ${styles.icon}`}
          />
        </div>
      </div>
      {genericDetails()}
      {aboutThePerson()}
    </>
  );

  return (
    <div className={styles.background}>
      <div className={styles.closeBtn} to="/">
        <IoIosCloseCircle onClick={() => setShowInfo(!showInfo)} />
      </div>
      <div className={styles.modalInfo}>
        {isRoom ? roomDetails() : userDetails()}
      </div>
    </div>
  );
};

export default LikesCardInfo;
