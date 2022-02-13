import { useEffect, useState } from "react";
import styles from "./Users.module.scss";
import UserCard from "../../components/UserCard";
import { httpGET } from "../../libs/http";

const Users = () => {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    httpGET("/users").then((data) => setPeopleList(data));
  }, []);

  return (
    <div className={styles.main}>
      {peopleList.map((user) => (
        <UserCard userInfo={user} key={user._id} />
      ))}
    </div>
  );
};

export default Users;
