import { useSelector } from 'react-redux'
import styles from './ChatContainer.module.scss'
import { formatDistance } from 'date-fns';
import { enGB } from 'date-fns/locale';
import { useRef, useEffect } from 'react';

const ChatContainer = ({interlocutor}) => {
    const user = useSelector(state => state.user)
    const chatWrapper = useRef(0)

    useEffect(() => {
        chatWrapper.current.scrollTop = chatWrapper.current.scrollHeight
    }, [chatWrapper.current.scrollHeight, chatWrapper.current.scrollTop])

    return (
        <div ref={chatWrapper} className={styles.main}>
            {
                user.messages[interlocutor] &&
                user.messages[interlocutor].discussion.map((item, index) => (
                    <div key={index} className={`${styles.chatBaloon} ${item.author === user._id && styles.mine}`}>
                    {console.log(item)}
                    <p className={styles.author}>{item.author === user._id ?
                    <>{user.name} {user.surname}</> :
                    <>{user.messages[interlocutor].user.name} {user.messages[interlocutor].user.surname}</>
                    }</p>
                    <p className={styles.date}>{formatDistance(new Date(item.date), new Date(), { addSuffix: true, locale: enGB })}</p>
                    <p className={styles.text}>{item.text}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default ChatContainer