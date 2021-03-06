import styles from "./LikesCard.module.scss";
import { useState } from "react";
import LikesCardInfo from "./../LikesCardInfo";
import { useSelector } from "react-redux";

const LikesCard = ({ data, isRoom }) => {
  const user = useSelector(state => state.user)
  const [showInfo, setShowInfo] = useState(false);

  const roomDataCard = () => (
    <>
      <p className={styles.name}>{data.roomType} Room</p>
      <p className={styles.name}>in {data.roomAddress}</p>
      <p className={styles.city}>
        {data.town} ({data.city})
      </p>
    </>
  );

  const userDataCard = () => (
    <>
      <p className={styles.name}>
        {data.name} {data.surname}
      </p>
      <p className={styles.city}>
        {data.town} ({data.city})
      </p>
    </>
  );

  return (
    <>
      {showInfo && (
        <LikesCardInfo
          data={data}
          showInfo={showInfo}
          setShowInfo={setShowInfo}
          isRoom={isRoom}
        />
      )}
      <div
        className={styles.cardContainer}
        style={{ backgroundImage: `url(${isRoom ? data.roomPhoto : data.photo})` }}
        onClick={() => setShowInfo(!showInfo)}
      >
        {user.newLike.filter(item => item === data.id).length > 0 && (
          <span>New</span>
        )}
        <div className={styles.info}>
          {isRoom ? roomDataCard() : userDataCard()}
        </div>
      </div>
    </>
  );
};

export default LikesCard;
