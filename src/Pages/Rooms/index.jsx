import styles from "./Rooms.module.scss";
import RoomCard from "../../components/RoomCard/RoomCard";
import Header from "../../components/Header";
import MainNav from "../../components/MainNav";

const Rooms = () => {
  return (
    <div className={styles.main}>
      <RoomCard />
    </div>
  );
};

export default Rooms;
