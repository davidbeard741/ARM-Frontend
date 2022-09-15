import React, { useEffect, useState } from "react";
import Created from "./Created/created";
import Owned from "./Owned/owned";
import style from "./Tabs.module.scss";
function Tabs() {
  const [activeTab, setActiveTab] = useState("PersonalDetails");

  return (
    <div className={style.container}>
      <div className={style.tabs}>
        <div className={style.navWrapper}>
          <ul className={style.nav}>
            <li
              onClick={() => setActiveTab("Created")}
              className={activeTab === "Created" ? style.active : ""}
            >
              Created
            </li>

            <li
              onClick={() => setActiveTab("Owned")}
              className={activeTab === "Owned" ? style.active : ""}
            >
              Owned
            </li>
          </ul>
        </div>
        <div className="outlet">
          {activeTab === "Created" && <Created />}
          {activeTab === "Owned" && <Owned />}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
