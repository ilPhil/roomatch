import styles from "./MatchesProfiles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeChar } from "../../store/actions";
import { useEffect } from "react";

const MatchesProfiles = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user);

  useEffect(() => {
    dispatch(
      changeChar(
        [{
            propName: "newMatch",
            value: [],
          }],
        user._id
      )
    );
  }, [dispatch, user._id]);

  return (
    <div className={styles.container}>
      <div className={styles.matchesContainer}>
        {user.roomId.roomId
          ? (
            user.roomId.matches.length > 0 ?
            user.roomId.matches.map(userMatch => (
              <div className={styles.matches}>
                {user.newMatch.filter(item => item === userMatch.id).length >
                  0 && <span>New</span>}
                <img
                  className={styles.imgMatch}
                  src={userMatch.photo}
                  alt={userMatch.name}
                />
              </div>
            )) :
            <p>no matches available</p>
            )
          : (
            user.matches.length > 0 ?
            user.matches.map(room => (
              <div key={room.roomId} className={styles.matches}>
                {user.newMatch.filter(item => item === room.roomId).length >
                  0 && <span>New</span>}
                <img
                  className={styles.imgMatch}
                  src={room.roomPhoto}
                  alt={room.roomType}
                />
              </div>
            )) :
            <p>no matches available</p>
            )
            }
      </div>
    </div>
  );
};

export default MatchesProfiles;
