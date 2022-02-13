import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Rooms.module.scss";
import RoomCard from "../../components/RoomCard/RoomCard";
import { httpGET } from "../../libs/http";

const Rooms = () => {
  const user = useSelector(state => state.user)
  const [roomsList, setRoomList] = useState([]);

  useEffect(() => {
    httpGET("/rooms").then((data) => setRoomList(data));
  }, []);

  return (
    <div className={styles.main}>
      {console.log(roomsList)}
      {roomsList.map(
        (room) =>
          room.roomOwner !== user._id && <RoomCard room={room} key={room._id} />
      )}
    </div>
  );
};

export default Rooms;
