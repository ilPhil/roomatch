// import { useSelector, useDispatch } from "react-redux";
// import { likeDislike } from "../../store/actions";

import styles from "./LikesCardInfo.module.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { FiHeart } from "react-icons/fi";
import { likeDislike, peoplelikeDislike } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";

const LikesCardInfo = ({ user, showInfo, setShowInfo, isRoom }) => {
  const dispatch = useDispatch();
  const loading = useSelector((store) => store.loading);
  const loggedUser = useSelector((store) => store.user);

  const dataDetails = isRoom ? user.friendlyWith : user.iam;
  const data = user;
  console.log("data: ", data)

  const likeFunc = () => {
    dispatch(isRoom
      ? likeDislike(
        {
          userId: loggedUser._id,
          ilike: data.roomId,
        },
        data.roomId,
        "addlike"
      )
      : peoplelikeDislike(
        {
          roomId: loggedUser.roomId.roomId,
          roomilike: data.id,
        },
        data.id,
        "addlike"
      )
    );
  };

  return (
    <div className={styles.background}>
      <div className={styles.closeBtn} to="/">
        <IoIosCloseCircle onClick={() => setShowInfo(!showInfo)} />
      </div>
      <div className={styles.modalInfo}>
        <div className={styles.flexHeaderInfo}>
          <div className={styles.headerInfo}>
            <h3>
              {user.name} {user.surname}
            </h3>
            {console.log(user)}
            {!isRoom && <p>Age: {user.age}</p>}
            <p>
              {user.town} ({user.city})
            </p>
          </div>
          {/* <div className={styles.likeBtn}>
            <FiHeart className={styles.icon} />
          </div> */}

          <div className={styles.likeBtn}>
            <FiHeart
              onClick={() => !loading && likeFunc()}
              className={`${styles.outlineHeart} ${styles.icon}`}
            />
            {/* {loggedUser.ilike.filter((like) => like.roomId === data._id).length >
              0 ? (
              <FaHeart
                onClick={() => !loading && dislikeFunc()}
                className={`${styles.fillHeart} ${styles.icon}`}
              />
            ) : (
              <FiHeart
                onClick={() => !loading && likeFunc()}
                className={`${styles.outlineHeart} ${styles.icon}`}
              />
            )} */}
          </div>
        </div>

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
                    checked={dataDetails.lgbtq === 1 ? true : false}
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
                    checked={dataDetails.pet_owner === 1 ? true : false}
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
                    checked={dataDetails.multicultural === 1 ? true : false}
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
                    checked={dataDetails.veg === 1 ? true : false}
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
                    checked={dataDetails.smooker === 1 ? true : false}
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
                    checked={dataDetails.party_lover === 1 ? true : false}
                  />
                  <span className={styles.mark}></span>
                </label>
              </div>
            </div>
          </section>
        </fieldset>
      </div>
    </div>
  );
};

export default LikesCardInfo;
