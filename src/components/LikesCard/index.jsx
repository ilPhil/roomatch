import styles from "./LikesCard.module.scss";

const LikesCard = ({ user }) => {
  return (
    <div className={styles.cardContainer}>
      {console.log(user)}
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${user.photo})` }}
      >
        <div className={styles.info}>
          <p className="">
            {user.name} {user.surname}
          </p>
          <p className="">{user.city}</p>
          <p className="">{user.town}</p>
        </div>
      </div>
    </div>
  );
};

export default LikesCard;
