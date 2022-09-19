import React, { useEffect, useRef, useState } from "react";
import styles from "./notification.module.scss";
import moment from "moment";
import notificationImg from "../../../Assets/gif/bell.gif";
import { BsFillBellFill } from "react-icons/bs";
const notificationData = ([
  // {
  //   message: "1524854545",
  // },
  // {
  //   message: "1524854545",
  // },
] = []);
interface Prop {
  onClickOutside?: any;
}
const Notification = (props: Prop) => {
  const ref = useRef(null);
  const [notification, setnotification] = useState(false);
  const [notificationNumber, setNotificationNumber] = useState();
  const { onClickOutside } = props;

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !event.target) {
        onClickOutside && onClickOutside();
        setnotification(notification);
      }
    };
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper} ref={ref}>
          <div
            className={styles.notification}
            onClick={() => setnotification(!notification)}
          >
            <div className={styles.imgWrapper}>
              <BsFillBellFill />
            </div>
            {notificationNumber ? (
              <div className={styles.notificationbadge}>
                <span>6</span>
              </div>
            ) : (
              ""
            )}
          </div>
          {notification ? (
            <div className={styles.bellmessage}>
              <div className={styles.heading}>
                <span>Notifications</span>
              </div>
              {notificationData.length == 0 ? (
                <div className={styles.imgContainer}>
                  <div className={styles.textWrapper}>
                    <img
                      src={"https://d3bfm8su4pz02o.cloudfront.net/gif/bell.gif"}
                      alt=""
                    />
                    <label>No Notifications Yet</label>
                    <p>You have no notification from last 30 days.</p>
                  </div>
                </div>
              ) : (
                notificationData.map((items, index) => {
                  return (
                    <div className={styles.card} key={index}>
                      <div className={styles.right} key={index}>
                        {/* <p>{items?.message}</p>
                        <label>
                          {moment(items?.createdAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        </label> */}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Notification;
