import { useSelector } from "react-redux";
import MatchesProfiles from "../../components/MatchesProfiles";
import MessagePreview from "../../components/MessagePreview";
import styles from "./Matches.module.scss";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";

const Matches = () => {
  const user = useSelector(state => state.user);
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (Object.keys(user.messages).length > 0) {
      Object.keys(user.messages).map(message =>
        setMessageList([...messageList, user.messages[message]])
      );

      messageList.sort((a, b) => {
        return (
          new Date(b.discussion[b.discussion.length - 1].date) -
          new Date(a.discussion[a.discussion.length - 1].date)
        );
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Object.keys(user.messages).length]);

  return (
    <>
      <div className={styles.main}>
        <h3 className={styles.title}>Matches</h3>
        <MatchesProfiles />
        <div className={styles.separator}></div>
        <div className={styles.messPrev}>
          <h3 className={styles.text}>Messages</h3>
          {Object.keys(user.messages).length > 0 ? (
            <>
              {messageList.map((message, index) => (
                <MessagePreview message={message} key={index} />
              ))}
            </>
          ) : (
            <p className={styles.noitem}>
              No message available. To start a conversation, click on a match!
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Matches;
